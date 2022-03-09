import { useContext, createContext, useState, useEffect } from "react";

import api from "../services/api";

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageDate() {
      const storagedUser = localStorage.getItem("@R:user");
      const storagedToken = localStorage.getItem("@R:token");

      if (storagedToken && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

        // await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      }
    }
    loadStorageDate();
  }, []);
  async function signIn(email, password) {
    const response = await api.post("/users/auth", {
      email,
      password,
    });
    setUser(response.data.user);

    api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

    localStorage.setItem("@R:user", JSON.stringify(response.data.user));
    localStorage.setItem("@R:token", response.data.token);
  }

  async function signOut() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthContext;
