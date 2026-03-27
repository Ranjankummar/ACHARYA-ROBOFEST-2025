import React, { useState } from 'react';
import { ArrowRight, LogIn } from 'lucide-react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { isAdminEmail } from '../config/admins';
import './AuthPage.css';

const INITIAL_FORM = {
  email: '',
  password: '',
};

const AuthPage = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ loading: false, error: '' });
  const { login, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const routeError = location.state?.error || '';

  if (isAuthenticated && isAdmin) {
    return <Navigate to="/admin/registrations" replace />;
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: '' });

    try {
      let currentUser = null;

      currentUser = await login({
        email: form.email.trim(),
        password: form.password,
      });

      if (!currentUser || !isAdminEmail(currentUser.email || '')) {
        await logout();
        setStatus({
          loading: false,
          error: 'Login succeeded, but this account is not authorized for admin dashboard access.',
        });
        return;
      }

      const redirectPath = location.state?.from?.pathname || '/admin/registrations';
      navigate(redirectPath, { replace: true });
    } catch (error) {
      const nextError = error?.message || 'Authentication failed. Please verify your credentials.';
      setStatus({ loading: false, error: nextError });
      return;
    }

    setStatus({ loading: false, error: '' });
  };

  return (
    <section className="auth-shell">
      <div className="container">
        <div className="auth-card premium-card">
          <h2 className="section-title">Admin Access</h2>
          <p className="auth-meta">Only coordinator allowlisted accounts can access registrations.</p>

          <form className="auth-form" onSubmit={onSubmit}>

            <input
              className="minimal-input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              required
            />

            <input
              className="minimal-input"
              type="password"
              name="password"
              placeholder="Password"
              minLength={8}
              value={form.password}
              onChange={onChange}
              required
            />

            {routeError && <p className="auth-error">{routeError}</p>}
            {status.error && <p className="auth-error">{status.error}</p>}

            <button type="submit" className="premium-btn" disabled={status.loading}>
              {status.loading ? 'Please wait...' : 'Login'}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
