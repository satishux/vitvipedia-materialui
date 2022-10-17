import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles(theme => ({
    wineListRoot: {
      marginTop: '3.5em',
      [theme.breakpoints.down('md')]: {
        marginTop: '1em'
      }
    }
}));

export { useStyles }
export default useStyles;