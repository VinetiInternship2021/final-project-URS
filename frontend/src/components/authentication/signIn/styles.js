import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    errorMessage: {
        ...theme.typography.subtitle1,
        color: '#ef5350',
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(1),
        textAlign: 'center'
    },
}));
