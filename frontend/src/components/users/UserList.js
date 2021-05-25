import React  from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import { Person } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import IconButton from '@material-ui/core/IconButton';
import { Check, Clear } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateUser, deleteUser } from '../../redux/users/userActions';

const UserList = function ({ users, isRequester }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const update = user => {
        const updated = {
            active: !user.active
        };
        dispatch(updateUser(user.id, updated));
    };

    const verifyUser = id => {
        const updated = {
            verified: true
        };
        dispatch(updateUser(id, updated));
    };

    const declineRequest = id => {
        dispatch(deleteUser(id));
    };

    return (
        <List dense={true}>
            {users.map(user =>
                <ListItem key={user.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <Person />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name}/>
                    <ListItemSecondaryAction>
                        {!isRequester ?
                            <Button 
                                onClick={() => update(user)}
                                className={classes.deactivateButton}
                                variant='contained'>
                            { user.active ? 'Deactivate' : 'Activate' }
                            </Button>
                        : <Grid container>
                            <Grid item xs={6}>
                                <IconButton onClick={() => verifyUser(user.id)}> <Check/> </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton onClick={() => declineRequest(user.id)}> <Clear/> </IconButton>
                            </Grid>
                        </Grid>}
                    </ListItemSecondaryAction>
                </ListItem>
            )}
        </List>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    isRequester: PropTypes.bool
};

export default UserList;
