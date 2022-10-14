import { createTheme, adaptV4Theme } from '@mui/material/styles';

const mainColor = '#D9D9D9';
const secondaryColor = '#000000';
const terciaryColor = '#e94a4a';

export default createTheme(adaptV4Theme({
  palette: {
    common: {
      main: `${mainColor}`,
      second: `${secondaryColor}`
    },
    primary: {
      main: `${mainColor}`
    },
    secondary: {
      main: `${secondaryColor}`
    },
    terciary: {
      main: `${terciaryColor}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: '1.1rem',
      fontWeight: 700
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: mainColor,
        fontSize: '1rem'
      }
    }
    // MuiInput: {
    //   filled: {
    //     '&:after': {
    //       borderBottom: `2px solid ${mainColor}`
    //     },
    //     '&:hover:not($disabled):not($focused):not($error):before': {
    //       borderBottom: `2px solid ${mainColor}`
    //     }
    //   }
    // }
  }
}));
