import {createContext, useContext} from 'react'

export const ThemeContext = createContext({
    themeMode : "light",
    darkMode: () => {},
    lightMode: () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

// Custom Hook
export default function useTheme() {
   return useContext(ThemeContext);
}
