import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AdminUser {
  name: string;
  email: string;
  role: string;
  avatar: string;
}

interface AuthContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AUTH_STORAGE_KEY = 'cice_admin_session_v1';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    // Artificial small delay for realistic UX feedback
    await new Promise((res) => setTimeout(res, 400));

    const cleanEmail = email.trim().toLowerCase();
    // Accept standard default or any valid user
    if ((cleanEmail === 'admin@cice.news' && pass === 'admin123') || (cleanEmail && pass && pass.length >= 4)) {
      const authenticatedUser: AdminUser = {
        name: cleanEmail === 'admin@cice.news' ? 'Editor-in-Chief' : cleanEmail.split('@')[0],
        email: cleanEmail,
        role: 'Super Administrator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      };
      setUser(authenticatedUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authenticatedUser));
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password (default: admin@cice.news / admin123)' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
