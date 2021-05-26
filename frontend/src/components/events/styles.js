import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    roomTypeButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px'
    },
    rooms: {
        margin: '0 auto',
        padding: '10px',
        width: '50%'
    },
    roomTypeButton: {
        marginRight: '10px'
    },
    roomTypeTitle: {
        textAlign: 'center',
    },
    eventCalendar: {
        marginTop: '20px'
    },
    times: {
        margin: '5px'
    }
});
