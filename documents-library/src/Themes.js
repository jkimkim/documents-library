import { createContext, useState, useMemo }from 'react'
import { createTheme} from '@mui/material/styles'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light',
                },
            }),
        [darkMode],
    )
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}
