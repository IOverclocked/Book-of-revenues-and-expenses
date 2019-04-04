import React from 'react';
import Add from '@material-ui/icons/Add';
import Style from './AddButton.module.scss';

const AddButton = ({ ...props }) => (
    <button className={Style.wrapper} {...props}>
        <Add className={Style.icon} />
    </button>
)

export default AddButton;