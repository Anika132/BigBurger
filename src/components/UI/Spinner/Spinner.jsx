import React from 'react';

import Modal from '../Modal/Modal';
import classes from './Spinner.css';
import loadingImg from '../../../assests/images/loading.gif';

const spinner = () => (
    <Modal show>
        <div className={classes.Modal}>
            <img src={loadingImg} alt="" />
            <p>&nbsp;Loading !!&nbsp;</p>
        </div>
    </Modal>
);

export default spinner;