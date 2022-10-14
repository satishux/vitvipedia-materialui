import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#ffff',
      fontFamily: 'Lora',
      padding: '20px',
      paddingBottom: '11em',
    },
    marginPage: {
      width: '640px',
      [theme.breakpoints.up('md')]: {
        margin: '0px 64px'
      },
      [theme.breakpoints.down('lg')]: {
        margin: '0px 48px'
      },
      [theme.breakpoints.down('md')]: {
        margin: '0px 24px',
        width: '400px',
      }
    },
    titleStyle: {
      fontFamily: 'Raleway',
      fontWeight: 400,
      fontSize: '2.8em'
    },
    subtitle: {
      fontWeight: 300,
      color: '#888'
    },
    articleInfo: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    authorContainer: {
      display: 'flex'
    },
    authorStyle: {
      marginLeft: '10px',
      fontSize: '0.9em',
      color: '#888'
    },
    iconButton: {
      color: 'white',
      background: '#333',
      padding: '0.3em',
      marginLeft: '0.5em',
  
      '&:hover': {
        background: '#000000'
      }
    },
    mainImgStyle: {
      width: '100%',
      height: '300px',
      objectFit: 'contain'
    },
    imgContainerStyle: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3em'
    },
    paragraphStyleContainer: {
      [theme.breakpoints.up('md')]: {
        fontSize: '21px'
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '18px'
      },
  
      '& p': {
        [theme.breakpoints.up('md')]: {
          lineHeight: '32px'
        },
        [theme.breakpoints.down('md')]: {
          lineHeight: '28px'
        }
      },
      '& img': {
        [theme.breakpoints.up('md')]: {
          marginTop: '1em'
        },
        [theme.breakpoints.down('md')]: {
          marginTop: '1em'
        }
      }
    },
    paragraphStyle: {
      [theme.breakpoints.up('md')]: {
        lineHeight: '32px'
      },
      [theme.breakpoints.down('md')]: {
        lineHeight: '28px'
      }
    },
    responsiveImgs: {
      [theme.breakpoints.up('md')]: {
        width: '60%',
        topMargin: '1em'
      },
      [theme.breakpoints.down('md')]: {
        width: '60%',
        topMargin: '1em'
      }
    },
    responsiveImgBottle: {
      [theme.breakpoints.up('md')]: {
        width: '30%',
        topMargin: '1em'
      },
      [theme.breakpoints.down('md')]: {
        width: '25%',
        topMargin: '1em'
      },
      [theme.breakpoints.down('sm')]: {
        width: '35%',
        topMargin: '1em'
      }
    },
    responsiveImglong: {
      [theme.breakpoints.up('md')]: {
        width: '40%',
        topMargin: '1em'
      },
      [theme.breakpoints.down('md')]: {
        width: '40%',
        topMargin: '1em'
      }
    }
  }));

export {
    useStyles
}

export default useStyles;