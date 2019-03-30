import React from 'react';
import Add from '@material-ui/icons/Add';
import Style from './AddButton.module.scss';

const AddButton = () => (
    <button className={Style.wrapper}>
        <Add className={Style.icon} />
    </button>
)

export default AddButton;