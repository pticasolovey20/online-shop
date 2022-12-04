import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ name, price, imgUrl, onFavorite, onPlus }) => {
    const [status, setStatus] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onPlus();
        setStatus(!status);
    };

    const onClickFavorite = () => {
        onFavorite();
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    src={isFavorite ? 'img/heart-on.svg' : 'img/heart-off.svg'}
                    alt="off"
                    onClick={onClickFavorite}
                />
            </div>
            <img width={133} height={112} src={imgUrl} alt="item" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{price} UAH</b>
                </div>
                <img
                    className={styles.plus}
                    src={status ? 'img/button-checked.svg' : 'img/button-plus.svg'}
                    alt="plus"
                    onClick={onClickPlus}
                />
            </div>
        </div>
    );
};

export default Card;
