// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useMutation } from "@apollo/client/react";
import { LOGIN_MUTATION, REGISTER_MUTATION } from "../graphql/mutations";

// ---------------------- TypeScript Interfaces ----------------------
export interface User {
  id: string;
  fullName: string;
  email: string;
  avatar?: string | null;
  isAdmin: boolean;
  isActive: boolean;
}

interface SignInResponse {
  signIn: {
    token: string;
    success: boolean;
    message: string;
    user: User;
  };
}

interface SignUpResponse {
  signUp: {
    token: string;
    success: boolean;
    message: string;
    user: User;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
}

// ---------------------- Context ----------------------
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ---------------------- Provider ----------------------
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Apollo mutations must be inside the component
  const [signIn] = useMutation<SignInResponse>(LOGIN_MUTATION);
  const [signUp] = useMutation<SignUpResponse>(REGISTER_MUTATION);

  // Load saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("blog_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("blog_user");
      }
    }
  }, []);

  // ---------------------- Login ----------------------
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await signIn({
        variables: { input: { email, password } },
      });

      if (!data?.signIn.success) return false;

      const { token, user } = data.signIn;

      localStorage.setItem("token", token);
      localStorage.setItem("blog_user", JSON.stringify(user));
      setUser(user);

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // ---------------------- Register ----------------------
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await signUp({
        variables: { input: { fullName: name, email, password } },
      });

      if (!data?.signUp.success) return false;

      const { token, user } = data.signUp;

      localStorage.setItem("token", token);
      localStorage.setItem("blog_user", JSON.stringify(user));
      setUser(user);

      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  // ---------------------- Logout ----------------------
  const logout = () => {
    setUser(null);
    localStorage.removeItem("blog_user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// ---------------------- Custom Hook ----------------------
// @vite-ignore
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};