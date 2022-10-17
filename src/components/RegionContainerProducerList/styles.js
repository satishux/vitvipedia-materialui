import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    backToProducerArrow: {
        color: 'black',
        backgroundColor: '#ccc'
    },
    wineList: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    },
}));

export { useStyles };
export default useStyles;