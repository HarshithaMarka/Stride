import { createTheme } from '@mui/material/styles';

// Define the core color palette constants
const PRIMARY_COLOR = '#673ab7'; // A shade of purple from the image's buttons
const SECONDARY_COLOR = '#4caf50'; // A generic green, can be refined if a specific secondary action color is needed from the image.
const BACKGROUND_DEFAULT = '#f0f2f5'; // Light gray background to match the overall page
const TEXT_COLOR_PRIMARY = '#333333'; // Darker text for main headings
const TEXT_COLOR_SECONDARY = '#555555'; // Slightly lighter text for body/descriptions
const BORDER_COLOR = '#e0e0e0'; // Light border for inputs and containers
const PAPER_BACKGROUND = '#ffffff'; // White background for cards/forms

// Define the custom theme for MUI
export const strideTheme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
      // You might want to define light and dark variants if used
      // light: '#9a67ea',
      // dark: '#320b86',
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    background: {
      default: BACKGROUND_DEFAULT,
      paper: PAPER_BACKGROUND, // For card-like elements
    },
    text: {
      primary: TEXT_COLOR_PRIMARY,
      secondary: TEXT_COLOR_SECONDARY,
    },
    // Adding an action color for hover/focus states, similar to the image
    action: {
      hover: 'rgba(103, 58, 183, 0.04)', // Slight purple tint on hover
      selected: 'rgba(103, 58, 183, 0.08)',
    }
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: '2.5rem', // Adjust as needed
      fontWeight: 700,
      color: TEXT_COLOR_PRIMARY,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: TEXT_COLOR_PRIMARY,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: TEXT_COLOR_PRIMARY,
    },
    body1: {
      fontSize: '1rem',
      color: TEXT_COLOR_SECONDARY,
    },
    body2: {
      fontSize: '0.875rem',
      color: TEXT_COLOR_SECONDARY,
    },
    button: {
      textTransform: 'none', // Buttons in the image don't seem to be all caps
      fontWeight: 600,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          borderRadius: '8px', // Slightly rounded corners like in the image
          padding: '10px 20px',
        },
        containedPrimary: {
          boxShadow: 'none', // Buttons in the image appear flat or with very subtle shadow
          '&:hover': {
            backgroundColor: '#5e35b1', // A slightly darker purple on hover
            boxShadow: 'none',
          },
        },
        outlinedPrimary: {
            // If you have outlined buttons, adjust them here
            borderColor: PRIMARY_COLOR,
            color: PRIMARY_COLOR,
            '&:hover': {
                backgroundColor: 'rgba(103, 58, 183, 0.04)',
            }
        },
        textPrimary: {
            color: PRIMARY_COLOR,
            '&:hover': {
                backgroundColor: 'rgba(103, 58, 183, 0.04)',
            }
        }
      },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                '& .MuiOutlinedInput-root': {
                    borderRadius: '8px', // Matching button border radius
                    backgroundColor: PAPER_BACKGROUND,
                    '& fieldset': {
                        borderColor: BORDER_COLOR,
                    },
                    '&:hover fieldset': {
                        borderColor: PRIMARY_COLOR, // Highlight on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: PRIMARY_COLOR, // Highlight when focused
                        borderWidth: '1px',
                    },
                },
                '& .MuiInputBase-input': {
                    padding: '12px 14px', // Adjust padding to match visual size
                },
            },
        },
    },
    MuiLink: {
        styleOverrides: {
            root: {
                color: PRIMARY_COLOR, // Links should be primary color
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                }
            }
        }
    },
    MuiCheckbox: {
        styleOverrides: {
            root: {
                color: PRIMARY_COLOR, // Checkbox color
                '&.Mui-checked': {
                    color: PRIMARY_COLOR,
                },
            }
        }
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: '12px', // Rounded corners for cards/paper elements
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', // Subtle shadow for depth
            }
        }
    }
  },
});