import styles from './GreenButton.module.scss';

import React from 'react';

const GreenButton = ({ text, onClick }) => {
    return (
        <button className={styles.greenButton} onClick={onClick}>
            {text}
        </button>
    );
};

export default GreenButton;
