import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    containerStyle: {
        flex: 1,
    },
    spinner: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainCardStyle: {
        width: '100%'
    },
    imgStyling: {
        padding: '3em',
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            height: '400px'
        }
    },
    ActionButtons: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: '1.5em'
        }
    },
    cartBtn: {
        marginLeft: '1em',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0
        }
    },
    wineDetailInfo: {
        fontWeight: '500'
    }
}));

export { useStyles };
export default useStyles;