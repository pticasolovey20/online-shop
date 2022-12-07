import styles from './CartItem.module.scss';

const CartItem = ({ item, onRemove }) => {
    return (
        <div className={styles.cartItem}>
            <div
                style={{ backgroundImage: `url(${item.imgUrl})` }}
                className={styles.cartItemImg}
            ></div>
            <div className={styles.description}>
                <p>{item.name}</p>
                <b>{item.price} UAH</b>
            </div>
            <img
                onClick={() => onRemove(item.id)}
                className={styles.removeButton}
                src="img/button-remove.svg"
                alt="remove"
            />
        </div>
    );
};

export default CartItem;
