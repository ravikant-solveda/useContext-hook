// ThemeContextProvider.js
import React, { useState, createContext, useContext } from 'react';

const MyContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState({ name: 'John', role: 'Admin' });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const contextValues = { theme, user, updateUser };
  console.log(user.name, user.role, 'pppppppppppppppppp');

  return (
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(MyContext);
};

export default ThemeContextProvider;
