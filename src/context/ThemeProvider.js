import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getCurrentTheme());

    useEffect(() => {
        const updateTheme = (newTheme) => {
            setTheme(newTheme);
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        };

        const handleThemeChange = (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            updateTheme(newTheme);
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleThemeChange);

        // Listen for changes in localStorage to detect manual theme overrides
        const handleStorageChange = (e) => {
            if (e.key === 'theme') {
                updateTheme(e.newValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Initialize theme based on saved preference or system preference
        updateTheme(getCurrentTheme());

        return () => {
            mediaQuery.removeEventListener('change', handleThemeChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

const getCurrentTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};
