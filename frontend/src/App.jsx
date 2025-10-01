import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import the centralized theme configuration
import { strideTheme } from './styles/strideTheme';
import HeroPage from './features/pages/components/hero/HeroPage';

function App() {
  return (
    // Wrap the app with ThemeProvider and CssBaseline for MUI styling
    <ThemeProvider theme={strideTheme}>
      <CssBaseline />
      <HeroPage />
    </ThemeProvider>
  );
}

export default App;