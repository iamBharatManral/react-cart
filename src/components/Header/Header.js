import React from 'react';
import styles from './Header.module.css'
import cart from '../../assets/images/cart.svg'
const Header = ({totalItems}) => {
    return (
        <header className={styles.header}>
            <h1>Cartducer</h1>
            <div className={styles.cart}>
                <div>{totalItems}</div>
                <img src={cart} alt="cart"/>
            </div>
        </header>
    )
}

export default Header;
