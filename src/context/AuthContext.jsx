import React, { useEffect, useState } from 'react';
import { ID } from 'appwrite';
import { account } from '../appwrite';
import { isAdminEmail } from '../config/admins';
import { AuthContext } from './authContextObject';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const bootstrapSession = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
      return currentUser;
    } catch {
      setUser(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    bootstrapSession();
  }, []);

  const signup = async ({ name, email, password }) => {
    await account.create(ID.unique(), email, password, name);
    await account.createEmailPasswordSession(email, password);
    return bootstrapSession();
  };

  const login = async ({ email, password }) => {
    await account.createEmailPasswordSession(email, password);
    return bootstrapSession();
  };

  const logout = async () => {
    await account.deleteSession('current');
    setUser(null);
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: Boolean(user),
    isAdmin: isAdminEmail(user?.email || ''),
    signup,
    login,
    logout,
    refreshSession: bootstrapSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
