import { createTheme } from '@mui/material/styles';

// Define the core color palette constants
const PRIMARY_COLOR = '#4f46e5'; // Deep Indigo (primary action, branding)
const SECONDARY_COLOR = '#10b981'; // Smooth Emerald (secondary action, success)
const BACKGROUND_DEFAULT = '#f9fafb'; // Light Gray

// Define the custom theme for MUI
export const strideTheme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR, 
    },
    secondary: {
      main: SECONDARY_COLOR, 
    },
    background: {
        default: BACKGROUND_DEFAULT, 
    }
  },
  typography: {
    // Using a system font stack for better cross-platform compatibility, 
    // or you can specify 'Roboto' if you installed it.
    fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
  },
  components: {
    // Optional: Add global overrides for components, e.g., to adjust button styles
    MuiButton: {
      styleOverrides: {
        root: {
          // Add smooth transition effects to all MUI Buttons
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
});