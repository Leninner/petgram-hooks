import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return sessionStorage.getItem('token') || false;
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      sessionStorage.setItem('token', token);
    },

    deactivateAuth: () => {
      setIsAuth(false);
      sessionStorage.removeItem('token');
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default { Provider, Consumer: Context.Consumer };
