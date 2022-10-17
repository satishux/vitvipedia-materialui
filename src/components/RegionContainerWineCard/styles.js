import makeStyles from '@mui/styles/makeStyles';
import { red } from '@mui/material/colors';


const useStyles = makeStyles(theme => ({
    cardComponentroot: {
        maxWidth: 345,
        margin: '0.5em',
        paddingBottom: '1em',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
            marginRight: '0',
            maxWidth: '100%'
        }
    },
    cardLink: {
        [theme.breakpoints.down('md')]: {
            width: '100%'
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

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    },
    button: {
        backgroundColor: '#fff',
        color: '#000',
        '&:hover': {
            backgroundColor: '#E65B5B',
            color: '#fff'
        }
    }
}));

export { useStyles };
export default useStyles;