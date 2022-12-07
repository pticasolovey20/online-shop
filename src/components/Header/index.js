import styles from './Header.module.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onCart }) => {
    return (
        <header>
            <Link to="/">
                <div className={styles.logoWrapper}>
                    <img width={40} height={40} src="img/logo.png" alt="logo" />
                    <div>
                        <h3>SNEAKERS STORE</h3>
                        <p>Only the best sneakers</p>
                    </div>
                </div>
            </Link>
            <ul className={styles.customButton}>
                <li>
                    <img width={20} height={20} src="img/cart.svg" alt="cart" onClick={onCart} />
                    <span>1205 UAH</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={20} height={20} src="img/favorites.svg" alt="favorites" />
                    </Link>
                </li>
                <li>
                    <Link to="/user">
                        <img width={20} height={20} src="img/user.svg" alt="user" />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
