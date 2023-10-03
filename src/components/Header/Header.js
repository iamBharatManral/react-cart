import React from 'react';
import styles from './Header.module.css'
import cart from '../../assets/images/cart.svg'
import github from '../../assets/images/github.svg'
const Header = ({totalItems}) => {
    return (
        <header className={styles.header}>
            <h1>Cartducer</h1>
            <a href={'https://github.com/iamBharatManral/react-cart'} target={'_blank'} rel="noreferrer"><img src={github} alt="github"/></a>
            <div className={styles.cart}>
                <div>{totalItems}</div>
                <img src={cart} alt="cart"/>
            </div>
        </header>
    )
}

export default Header;
