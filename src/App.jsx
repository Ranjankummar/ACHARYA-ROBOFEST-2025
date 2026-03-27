import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import { AuthProvider } from './context/AuthContext';
import AdminRegistrationsPage from './pages/AdminRegistrationsPage';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/login" element={<AuthPage />} />
          <Route
            path="/admin/registrations"
            element={(
              <ProtectedAdminRoute>
                <AdminRegistrationsPage />
              </ProtectedAdminRoute>
            )}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
