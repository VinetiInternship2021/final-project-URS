import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    dialogContainer: {
        width: '400px',

        '& .MuiFormLabel-root': {
            margin: 0
        },

        '& .MuiFormControl-root': {
            height: '60px',
            width: '400px',
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
}));
