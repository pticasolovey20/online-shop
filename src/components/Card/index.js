import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ item, onFavorite, onPlus, favorited = false }) => {
    const [status, setStatus] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus(item);
        setStatus(!status);
    };

    const onClickFavorite = () => {
        onFavorite(item);
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
            <img width={133} height={112} src={item.imgUrl} alt="item" />
            <h5>{item.name}</h5>
            <div className={styles.priceBlock}>
                <div className={styles.cardBottom}>
                    <span>Price:</span>
                    <b>{item.price} UAH</b>
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
