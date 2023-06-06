import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      }
    },
    typography:{
      fontFamily: "'Poppins', sans-serif"
    },
    button: {    
      '&:hover': {
          backgroundColor: '#000000',
      },
  }
  });