import './style.scss';

import React from 'react';
import CartItem from '../CartItem';
import GreenButton from '../GreenButton';

const Drawer = ({ onCloseCart, items = [], onRemove, cartItems }) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    CART
                    <img
                        className="remove-button cu-p"
                        src="img/button-remove.svg"
                        alt="remove"
                        onClick={onCloseCart}
                    />
                </h2>

                {cartItems.length > 0 ? (
                    <div className="items">
                        {items.map(item => (
                            <CartItem item={item} key={item.id} onRemove={onRemove} />
                        ))}
                    </div>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img
                            className="mb-20"
                            width={120}
                            height={120}
                            src={'/img/empty-cart.png'}
                            alt={'empty'}
                        />
                        <h2>Cart is empty</h2>
                        <p className="opacity-6">Add at least one pair of sneakers to order</p>

                        <GreenButton
                            srcImg={'img/arrow.svg'}
                            altImg={'arrow'}
                            text={'Back'}
                            onClick={onCloseCart}
                        />
                    </div>
                )}

                {cartItems.length > 0 && (
                    <div className="cartTotalBlock">
                        <ul className="cartTotalBlock">
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
                            text={'Make an order'}
                            onClick={() => console.log('make an order')}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drawer;
