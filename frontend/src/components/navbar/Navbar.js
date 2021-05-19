import * as React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Container
} from '@material-ui/core';
import { Home } from '@material-ui/icons';

import { useStyles } from './styles';
import Logout from '../dashboard/Logout';
import { useHistory } from 'react-router-dom';

const NavBar = ({ navLinks }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                    <IconButton edge="start"
                                color="inherit"
                                aria-label="home"
                                onClick={() => history.push('/dashboard')}>
                        <Home fontSize="large" />
                    </IconButton>
                    <List component="nav"
                          aria-labelledby="main navigation"
                          className={classes.navDisplayFlex}>
                        {navLinks.map(({ title, path }) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
                        ))}
                    </List>
                    <Logout/>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
export default NavBar;
