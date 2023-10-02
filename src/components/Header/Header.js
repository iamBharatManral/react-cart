import React from 'react';
import styles from './Header.module.css'
import cart from '../../assets/images/cart.svg'
const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Cartducer</h1>
            <div className={styles.cart}>
                <div>0</div>
                <img src={cart} alt="cart"/>
            </div>
        </header>
    )
}

export default Header;
