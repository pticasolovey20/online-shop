import styles from './Drawer.module.scss';

import React from 'react';
import CartItem from '../CartItem';
import GreenButton from '../GreenButton';

const Drawer = ({ onCloseCart, items = [], onRemove, cartItems }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2>
                    CART
                    <img
                        className={styles.removeButton}
                        src="img/button-remove.svg"
                        alt="remove"
                        onClick={onCloseCart}
                    />
                </h2>

                {cartItems.length > 0 ? (
                    <div className={styles.items}>
                        {items.map(item => (
                            <CartItem item={item} key={item.id} onRemove={onRemove} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.cartEmpty}>
                        <img
                            className={styles.emptyCartImg}
                            width={120}
                            height={120}
                            src={'/img/empty-cart.png'}
                            alt={'empty'}
                        />
                        <h2>Cart is empty</h2>
                        <p>Add at least one pair of sneakers to order</p>

                        <GreenButton
                            srcImg={'img/arrow.svg'}
                            altImg={'arrow'}
                            text={'BACK'}
                            onClick={onCloseCart}
                        />
                    </div>
                )}

                {cartItems.length > 0 && (
                    <div className={styles.cartTotalBlock}>
                        <ul className={styles.cartTotalBlock}>
                            <li>
                                <span>Total:</span>
                                <div></div>
                                <b>9999 UAH</b>
                            </li>
                            <li>
                                <span>Сommission:</span>
                                <div></div>
                                <b>1000 UAH</b>
                            </li>
                        </ul>

                        <GreenButton
                            srcImg={'img/arrow.svg'}
                            altImg={'arrow'}
                            text={'MAKE AN ORDER'}
                            onClick={() => console.log('make an order')}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drawer;
