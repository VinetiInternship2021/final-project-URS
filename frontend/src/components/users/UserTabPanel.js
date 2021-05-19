import Box from '@material-ui/core/Box';
import React from 'react';

function UserTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`user-tabpanel-${index}`}
            aria-labelledby={`user-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <React.Fragment>{children}</React.Fragment>
                </Box>
            )}
        </div>
    );
}

export default UserTabPanel;
