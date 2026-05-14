import { createContext, useContext, useState, useEffect } from 'react';
import { apiLogin } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('authEmail');
    if (token && email) setUser({ email });
    setLoading(false);
  }, []);

  async function login(email, password) {
    const data = await apiLogin(email, password);
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('authEmail', data.email);
    setUser({ email: data.email });
  }

  function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authEmail');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
