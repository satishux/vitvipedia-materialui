import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    winecardRoot: {
        margin: '1em',
        overflow: 'hidden'
    },
    wineCardContent: {
        marginTop: theme.spacing(-2),
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(-2),
        marginBottom: theme.spacing(-3)
    },
    wineCardInfo: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',

    },
    priceStyling: {
        color: '#dd4433',
        marginLeft: '.5em',
        position: 'relative',
        bottom: '3px'
    },
    buyButtonStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    wineDetailInfo: {
        fontFamily: 'Lora',
        fontWeight: 'bold',
        marginRight: '10px'
    }
}));

export { useStyles };
export default useStyles;
