import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('greenride_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    // In a real app, this would validate credentials with an API
    // For demo purposes, we'll simulate successful login
    setCurrentUser(userData);
    localStorage.setItem('greenride_user', JSON.stringify(userData));
    return Promise.resolve(userData);
  };

  // Signup function
  const signup = (userData) => {
    // In a real app, this would create a new user via API
    // For demo purposes, we'll simulate successful signup
    setCurrentUser(userData);
    localStorage.setItem('greenride_user', JSON.stringify(userData));
    return Promise.resolve(userData);
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('greenride_user');
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}