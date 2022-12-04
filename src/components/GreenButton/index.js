import './style.scss';

import React from 'react';

const GreenButton = ({ srcImg, altImg, text, onClick }) => {
    return (
        <button className="greenButton" onClick={onClick}>
            <img src={srcImg} alt={altImg} />
            {text}
        </button>
    );
};

export default GreenButton;
