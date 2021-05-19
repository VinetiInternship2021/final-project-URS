import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';

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

UserTabPanel.propTypes = {
    children: PropTypes.any,
    value: PropTypes.number,
    index: PropTypes.number
};

export default UserTabPanel;
