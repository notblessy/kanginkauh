import React, { useEffect } from "react";

import { createContext, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

const AuthCtx = createContext({
  loading: false,
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      authUser ? setUser(authUser) : setUser(null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthCtx.Provider value={{ loading, user: user ? user : null }}>
      {children}
    </AuthCtx.Provider>
  );
};

export const useAuth = () => useContext(AuthCtx);
