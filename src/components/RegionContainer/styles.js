import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    containerStyling: {
      display: 'flex',
      width: '100%'
    },
    cardStyle: {
      marginBottom: '1em'
    },
    regionCard: {
      [theme.breakpoints.up('md')]: {
        marginRight: '1em'
      }
    },
    producerMargin: {
      margin: '-1em'
    },
    headerPadding: {
      padding: '1em',
      borderBottom: '1px solid #ccc'
    },
    producerImg: {
      height: '150px',
      width: 'auto'
    },
    producer: {
      padding: '1em',
      borderRadius: 0,
      borderBottom: '1px solid #ccc',
  
      '&:last-child': {
        borderBottom: 'none'
      }
    },
    wineHeading: {
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    wineList: {
      display: 'block',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
  
  }));

  export { useStyles };
  export default useStyles;