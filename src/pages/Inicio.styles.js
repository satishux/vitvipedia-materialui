import makeStyles from '@mui/styles/makeStyles';

const styles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.25em'
    }
  },
  width: {
    width: '100%'
  },
  opacity: {
    opacity: 0.4
  },
  marginBottomButton: {
    marginBottom: '9.4em'
  },
  mapContainer: {
    backgroundColor: '#F2F2F2'
  },

  mapBorderRadius: {
    borderRadius: '1em',
    overflow: 'hidden'
  },
  mapRoot: {
    flex: 1,
    marginRight: '-0.5em',
    marginLeft: '-0.5em',
    marginTop: '1em'
  },
  containerButtons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  arrowBackStyle: {
    color: 'black',
    right: 0,
    position: 'absolute',
    marginTop: '-2.9em',
    marginRight: '1em',
    backgroundColor: '#EEEEEE',
    '&:hover': {
      backgroundColor: '#BFBFBF'
    },
    margin: '1em 0'
  },
  drawer: {
    background: '#F2F2F2'
  },
  bestWinesSentenceStyle: {
    color: '#000',
    backgroundColor: '#BFBFBF',
    '&:visited, &:focus, &:active': {
      backgroundColor: '#BFBFBF'
    },
    borderRadius: '0.3em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2em'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5em'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1em'
    }
  },
  bestWineContainer: {
    marginTop: '1em'
  },
  mapHeight: {
    minHeight: '300px',
    '@media(min-width: 500px)': {
      minHeight: '580px'
    }
  },
  paperStyle: {
    padding: '2em',
    marginBottom: '2em',
    fontSize: '1.2em',
    fontFamily: 'Roboto'
  }
}));

export default styles;
