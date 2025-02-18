import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: 'blue' | 'light' | 'dark' | 'green' | 'black-red' | 'black-teal' | 'black-green';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  theme = 'light' 
}) => {
  React.useEffect(() => {
    // Get existing classes
    const existingClasses = document.body.className
      .split(' ')
      .filter(cls => !cls.startsWith('theme-'));
    
    // Add new theme class while preserving others
    document.body.className = [...existingClasses, `theme-${theme}`].join(' ');

    return () => {
      // On cleanup, remove only the theme class
      document.body.className = existingClasses.join(' ');
    };
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider; 