import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as _ from 'lodash';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useStyles } from './styles';
import UserList from './UserList';
import UserTabPanel from './UserTabPanel';
import { getUsers, getRequesters } from '../../redux/users/userActions';
import { UserModel } from '../../models/userModel';

function geProps(index) {
    return {
        id: `user-tab-${index}`,
        'aria-controls': `user-tabpanel-${index}`,
    };
}

function UserTabs() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const users = useSelector(state => state.user.users || []);
    const requesters = useSelector(state => state.user.requesters || []);

    let students = [];
    let professors = [];

    if (!_.isEmpty(users)) {
        students = _.filter(users, user => user.role === UserModel.roles.student);
        professors = _.filter(users, user => user.role === UserModel.roles.professor && user.verified);
    }

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getRequesters());
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.tabs}>
            <Tabs value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{style: {backgroundColor: 'black'}}}>
                <Tab label='Students' {...geProps(0)} />
                <Tab label='Professors' {...geProps(1)} />
                <Tab label='Requesters' {...geProps(2)} />
            </Tabs>
            <UserTabPanel value={value} index={0}>
                <UserList users={students}/>
            </UserTabPanel>
            <UserTabPanel value={value} index={1}>
                <UserList users={professors}/>
            </UserTabPanel>
            <UserTabPanel value={value} index={2}>
                <UserList users={requesters} isRequester={true}/>
            </UserTabPanel>
        </div>
    );
}

export default UserTabs;
