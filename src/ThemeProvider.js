import React, {
    useState, 
    useEffect, 
    useContext,
    createContext
} from 'react';

const ThemeContext = createContext();

export function ThemeContextProvider({children}) {
    
    const getPrefColorScheme = () => {
        if (!window.matchMedia) return;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
      
    const getInitialMode = () => {
        const isReturningUser = 'dark' in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();

        if (isReturningUser) {
            return savedMode;
        } else if (userPrefersDark) {
            return true;
        } else {
            return false;
        }
    }

    const [darkMode, setDarkMode] = useState(getInitialMode());

    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    const handleToggleSwitchMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <ThemeContext.Provider value={{darkMode, handleToggleSwitchMode}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('something went wrong with provider');
  }
  return context;
}