import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Download, ExternalLink, Filter, LogOut, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Query } from 'appwrite';
import { databases, APPWRITE_CONFIG, getProofPreviewUrl, getProofDownloadUrl } from '../appwrite';
import { useAuth } from '../hooks/useAuth';
import './AdminRegistrationsPage.css';

const EVENT_LABELS = {
  'robo-triathlon': 'Robo-Triathlon',
  'robo-race': 'Robo Race',
  'robo-war': 'Robo War',
  'robo-exhibition': 'Robo Exhibition',
};

const formatDate = (value) => {
  if (!value) {
    return '-';
  }

  return new Date(value).toLocaleString();
};

const getDashboardFetchError = (error) => {
  const code = error?.code;
  const message = (error?.message || '').toLowerCase();

  if (code === 401 || message.includes('unauthorized') || message.includes('not logged')) {
    return 'Your session is not valid. Please log in again.';
  }

  if (code === 403 || message.includes('permission') || message.includes('forbidden')) {
    return 'You do not have read permission for this table. In Appwrite, remove Any and enable User read (or admin role read).';
  }

  if (message.includes('collection') || message.includes('table') || message.includes('database')) {
    return 'Table configuration is missing or invalid. Verify databaseId and tableId (registrations).';
  }

  return error?.message || 'Unable to load registrations right now.';
};

const AdminRegistrationsPage = () => {
  const { user, logout } = useAuth();
  const [allRegistrations, setAllRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [eventFilter, setEventFilter] = useState('all');
  const [selectedProof, setSelectedProof] = useState(null);

  const fetchRegistrations = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      if (!APPWRITE_CONFIG.databaseId || !APPWRITE_CONFIG.registrationsCollectionId) {
        throw new Error('Missing table configuration. Set registrations table ID in appwrite config.');
      }

      const response = await databases.listDocuments(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.registrationsCollectionId,
        [
          Query.limit(500),
          Query.orderDesc('$createdAt'),
        ]
      );

      setAllRegistrations(response.documents || []);
    } catch (nextError) {
      setError(getDashboardFetchError(nextError));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  const filteredRegistrations = useMemo(() => {
    return allRegistrations
      .filter((item) => {
        if (eventFilter === 'all') {
          return true;
        }

        return (item.targetEvent || '').toLowerCase() === eventFilter;
      })
      .filter((item) => {
        if (!searchTerm.trim()) {
          return true;
        }

        const text = [
          item.fullName,
          item.email,
          item.mobile,
          item.college,
          item.transactionId,
          item.usn,
        ]
          .join(' ')
          .toLowerCase();

        return text.includes(searchTerm.trim().toLowerCase());
      })
      .sort((a, b) => {
        const first = new Date(b.$createdAt || b.createdAt || 0).getTime();
        const second = new Date(a.$createdAt || a.createdAt || 0).getTime();
        return first - second;
      });
  }, [allRegistrations, eventFilter, searchTerm]);

  return (
    <section className="admin-shell">
      <div className="container">
        <header className="admin-header premium-card">
          <div>
            <h2 className="section-title">Registrations Console</h2>
            <p className="admin-subtitle">Review participant submissions and verify payment proofs.</p>
            <p className="admin-meta">Signed in as {user?.email}</p>
          </div>

          <div className="admin-header-actions">
            <Link className="premium-btn premium-btn-outline" to="/">Public Site</Link>
            <button className="premium-btn" onClick={logout} type="button">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </header>

        <div className="admin-filters premium-card">
          <label className="filter-block" htmlFor="searchRegistrations">
            <Search size={16} />
            <input
              id="searchRegistrations"
              type="text"
              placeholder="Search by name, email, transaction, USN..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <label className="filter-block" htmlFor="eventFilter">
            <Filter size={16} />
            <select
              id="eventFilter"
              value={eventFilter}
              onChange={(event) => setEventFilter(event.target.value)}
            >
              <option value="all">All Events</option>
              {Object.entries(EVENT_LABELS).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <button type="button" className="premium-btn premium-btn-outline" onClick={fetchRegistrations}>
            Refresh
          </button>
        </div>

        {isLoading && <p className="admin-state">Loading registrations...</p>}
        {error && <p className="admin-state admin-error">{error}</p>}
        {!isLoading && !error && filteredRegistrations.length === 0 && (
          <p className="admin-state">No registrations found for the current filters.</p>
        )}

        {!isLoading && !error && filteredRegistrations.length > 0 && (
          <>
            <div className="registrations-table-wrap">
              <table className="registrations-table">
                <thead>
                  <tr>
                    <th>Participant</th>
                    <th>Event</th>
                    <th>Academic</th>
                    <th>Transaction</th>
                    <th>Submitted</th>
                    <th>Proof</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRegistrations.map((item) => {
                    const fileId = item.screenshotFileId || item.proofFileId || '';
                    const previewUrl = fileId ? getProofPreviewUrl(fileId) : '';
                    const downloadUrl = fileId ? getProofDownloadUrl(fileId) : '';

                    return (
                      <tr key={item.$id || item.id || `${item.email}-${item.transactionId}`}>
                        <td>
                          <strong>{item.fullName || '-'}</strong>
                          <span>{item.email || '-'}</span>
                          <span>{item.mobile || '-'}</span>
                        </td>
                        <td>{EVENT_LABELS[item.targetEvent] || item.targetEvent || '-'}</td>
                        <td>
                          <span>{item.college || '-'}</span>
                          <span>{item.department || '-'}</span>
                          <span>{item.year || '-'} | {item.usn || '-'}</span>
                        </td>
                        <td>{item.transactionId || '-'}</td>
                        <td>{formatDate(item.$createdAt || item.createdAt)}</td>
                        <td>
                          <div className="proof-actions">
                            {previewUrl ? (
                              <button
                                type="button"
                                className="proof-thumb-btn"
                                onClick={() => setSelectedProof({
                                  title: item.fullName || 'Payment Proof',
                                  previewUrl,
                                  downloadUrl,
                                })}
                              >
                                <img 
                                  src={previewUrl} 
                                  alt={`Proof for ${item.fullName || 'participant'}`} 
                                  loading="lazy" 
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.insertAdjacentHTML('beforeend', '<span class="text-muted" style="color:var(--danger, red);font-size:0.8rem;">Load Error (Check Perms)</span>');
                                  }}
                                />
                              </button>
                            ) : (
                              <span className="text-muted">No proof ID ({fileId ? 'invalid' : 'missing'})</span>
                            )}

                            {downloadUrl && (
                              <a href={downloadUrl} target="_blank" rel="noreferrer" className="icon-action" aria-label="Open proof">
                                <ExternalLink size={15} />
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="registrations-mobile-grid">
              {filteredRegistrations.map((item) => {
                const fileId = item.screenshotFileId || item.proofFileId || '';
                const previewUrl = fileId ? getProofPreviewUrl(fileId) : '';
                const downloadUrl = fileId ? getProofDownloadUrl(fileId) : '';

                return (
                  <article key={`mobile-${item.$id || item.id || `${item.email}-${item.transactionId}`}`} className="registration-card premium-card">
                    <h3>{item.fullName || '-'}</h3>
                    <p>{EVENT_LABELS[item.targetEvent] || item.targetEvent || '-'}</p>
                    <p>{item.email || '-'}</p>
                    <p>{item.mobile || '-'}</p>
                    <p>{item.college || '-'}</p>
                    <p>{item.department || '-'}</p>
                    <p>{item.year || '-'} | {item.usn || '-'}</p>
                    <p>Txn: {item.transactionId || '-'}</p>
                    <p>{formatDate(item.$createdAt || item.createdAt)}</p>

                    <div className="proof-actions">
                      {previewUrl && (
                        <button
                          type="button"
                          className="proof-thumb-btn"
                          onClick={() => setSelectedProof({
                            title: item.fullName || 'Payment Proof',
                            previewUrl,
                            downloadUrl,
                          })}
                        >
                          <img 
                            src={previewUrl} 
                            alt={`Proof for ${item.fullName || 'participant'}`} 
                            loading="lazy" 
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              e.target.parentElement.insertAdjacentHTML('beforeend', '<span style="color:var(--danger, red);font-size:0.85rem;">Load Error</span>');
                            }}
                          />
                        </button>
                      )}

                      {!previewUrl && (
                        <p className="text-muted text-sm">No proof ID found</p>
                      )}

                      {downloadUrl && (
                        <a href={downloadUrl} target="_blank" rel="noreferrer" className="premium-btn premium-btn-outline card-download">
                          <Download size={14} /> Download Proof
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </div>

      {selectedProof && (
        <div className="proof-modal-overlay" role="dialog" aria-modal="true">
          <div className="proof-modal premium-modal-content">
            <button className="proof-close" type="button" onClick={() => setSelectedProof(null)}>
              <X size={18} />
            </button>
            <h3>{selectedProof.title}</h3>
            <img 
              src={selectedProof.previewUrl} 
              alt={selectedProof.title} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentElement.insertAdjacentHTML('beforeend', '<div style="padding:2rem;text-align:center;color:var(--danger, red);">Image Load Failed (Check Bucket Permissions)</div>');
              }}
            />
            <div className="proof-modal-actions">
              {selectedProof.downloadUrl && (
                <a className="premium-btn premium-btn-outline" href={selectedProof.downloadUrl} target="_blank" rel="noreferrer">
                  <Download size={14} /> Download
                </a>
              )}
              {selectedProof.downloadUrl && (
                <a className="premium-btn" href={selectedProof.downloadUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={14} /> Open in New Tab
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminRegistrationsPage;
