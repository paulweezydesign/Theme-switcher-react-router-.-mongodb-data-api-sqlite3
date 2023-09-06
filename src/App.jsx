import React, { useState, createContext, useContext } from 'react';

// Creating the theme context
const ThemeContext = createContext();

// Theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Function component to be styled
const StyledComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff',
      }}
    >
      Example of a styled component
    </div>
  );
};

// Theme switcher component
const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

// App component
const App = () => {
  return (
    <ThemeProvider>
      <StyledComponent />
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
