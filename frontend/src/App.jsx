import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the centralized theme configuration
import { strideTheme } from './styles/strideTheme';

// Pages
import HeroPage from './features/pages/components/hero/HeroPage';
import LoginPage from './features/auth/components/LoginPage';
import SignUpPage from './features/auth/components/SignUpPage';
import DashboardPage from './features/dashboard/DashboardPage';

// Route protection utility
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={strideTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* 🔒 Protected Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
