import React from 'react'
import { func, string } from 'prop-types';
import Switch from '@material-ui/core/Switch';

export const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Switch
        onChange={toggleTheme}
        color="gray"
        name="darkModeSwitch"
        inputProps={{ 'aria-label': 'dark mode switch' }}
        />
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}