import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../pages/AuthPage.css';

const ProtectedAdminRoute = ({ children }) => {
  const { isLoading, isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <section className="auth-shell">
        <div className="container">
          <div className="auth-card">
            <h2 className="section-title">Authenticating</h2>
            <p className="auth-meta">Validating your session and admin access...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace state={{ from: location, error: 'This account is not authorized to access the admin dashboard.' }} />;
  }

  return children;
};

export default ProtectedAdminRoute;
