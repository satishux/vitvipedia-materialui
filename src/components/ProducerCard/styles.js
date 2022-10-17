import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    cardImage: {
        height: 'auto',
        width: 200,
        [theme.breakpoints.down('md')]: {
            height: '200px',
            width: '100%',
            objectFit: 'cover'
        }
    },
    showMobile: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex'
        }
    },
    hideMobile: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
}));

export { useStyles };
export default useStyles;