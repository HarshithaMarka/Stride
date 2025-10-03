import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the centralized theme configuration
import { strideTheme } from './styles/strideTheme';
import HeroPage from './features/pages/components/hero/HeroPage';
import LoginPage from './features/auth/components/LoginPage';
import SignUpPage from './features/auth/components/SignUpPage';

function App() {
  return (
    // Wrap the app with ThemeProvider and CssBaseline for MUI styling
    <BrowserRouter>
      <ThemeProvider theme={strideTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;