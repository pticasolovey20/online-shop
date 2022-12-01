import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ name, price, imgUrl }) => {
    const [status, setStatus] = useState(false);

    const handleswitch = () => {
        setStatus(!status);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="img/heart-off.svg" alt="off" />
            </div>
            <img width={133} height={112} src={imgUrl} alt="item" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{price}</b>
                </div>
                <img
                    className={styles.plus}
                    src={status ? 'img/button-checked.svg' : 'img/button-plus.svg'}
                    alt="plus"
                    onClick={handleswitch}
                />
            </div>
        </div>
    );
};

export default Card;
