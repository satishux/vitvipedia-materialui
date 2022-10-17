import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles(theme => ({
    modalContainer: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    imgStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    media: {
        height: '20em'
    },
    RightBoxSection: {
        margin: '0 6em',
        [theme.breakpoints.down('md')]: {
            margin: '0'
        },
        display: 'flex',
        flexDirection: 'column'
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
    spinner: {
        display: 'flex',
        height: '50vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export { useStyles };
export default useStyles;