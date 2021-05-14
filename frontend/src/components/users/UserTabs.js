import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useStyles } from './styles';
import UserList from './UserList';
import UserTabPanel from './UserTabPanel';
import AddUser from './AddUser';

function geProps(index) {
    return {
        id: `user-tab-${index}`,
        'aria-controls': `user-tabpanel-${index}`,
    };
}

const students = [{name: 'John', deactivatedAt: null}, {name: 'Jane', deactivatedAt: new Date()}];
const professors = [{name: 'Jenna', deactivatedAt: null}, {name: 'Leo', deactivatedAt: new Date()}];
const requesters = [{name: 'Requester 1'}, {name: 'Requester 2'}];

function UserTabs() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

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
                <AddUser className={classes.addUser}/>
                <UserList users={students}/>
            </UserTabPanel>
            <UserTabPanel value={value} index={1}>
                <AddUser className={classes.addUser}/>
                <UserList users={professors}/>
            </UserTabPanel>
            <UserTabPanel value={value} index={2}>
                <UserList users={requesters} isRequester={true}/>
            </UserTabPanel>
        </div>
    );
}

export default UserTabs;
