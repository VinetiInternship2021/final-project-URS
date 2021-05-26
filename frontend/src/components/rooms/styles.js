import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    dialogContainer: {
        width: '450px',

        '& .MuiFormLabel-root': {
            margin: 0
        },

        '& .MuiFormControl-root': {
            height: '60px',
            width: '450px',
        }
    },
    buttonAdd: {
        marginTop: '50px',
        marginBottom: '20px',
    },
    buttons: {
        margin: 0,
        padding: 0
    },
    dayOfWeek: {
        paddingTop: '20px',
        fontWeight: 'bold'
    },
    holidayLabel: {
        margin: 0,
        fontSize: '11px',
        paddingTop: '4px'
    },
    timePicker: {
        width: '125px !important'
    }
}));
