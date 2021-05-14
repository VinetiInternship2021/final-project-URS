import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    tabs: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: 500,
        margin: '0 auto',
        marginTop: 100
    },
    deactivateButton: {
        width: 100
    },
    buttonAdd: {
        marginTop: '50px',
        marginBottom: '20px',
    },

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
    addUser: {
        float: 'right'
    }
}));
