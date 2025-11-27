import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App.tsx'
import './i18n'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00335e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#4d2300ff',
      contrastText: '#fff'
    },

    text: {
      primary: '#fff',
      secondary: '#ffffffff',
    },

    background: {
      default: '#001325ff',
      paper: '#002646ff'
    }
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
