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

const UserList = function ({ users, isRequester }) {
    const classes = useStyles();
    return (
        <List dense={true}>
            {users.map(user =>
                <ListItem key={user.name}>
                    <ListItemAvatar>
                        <Avatar>
                            <Person />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name}/>
                    <ListItemSecondaryAction>
                        {!isRequester ? <Button className={classes.deactivateButton} variant='contained'>
                            {user.deactivatedAt ? 'Activate' : 'Deactivate'} </Button>
                        : <Grid container>
                            <Grid item xs={6}>
                                <IconButton> <Check/> </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton> <Clear/> </IconButton>
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
