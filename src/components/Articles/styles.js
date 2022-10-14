import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    imgStyling: {
      height: '6em'
    },
    individualGrid: {
      marginBottom: '1.5em',
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        width: '25%',
        padding: '0em 3em'
      },
      [theme.breakpoints.down('lg')]: {
        width: '50%',
        padding: '0em 5em'
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '0em 2.5em'
      }
    },
  
    linkStyle: {
      textDecoration: 'none',
      color: 'inherit',
      width: '100%'
    },
    h3Style: {
      fontWeight: 400,
      fontFamily: 'Lora',
      fontSize: '0.9em'
    },
    imgStyle: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    hrStyle: {
      width: '85%',
      marginBottom: '2.5em'
    }
  }));

  export { useStyles };
  export default useStyles;