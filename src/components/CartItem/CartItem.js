import React from 'react';
import styles from './CartItem.module.css'
import Counter from "../Counter/Counter";
import Product from "../Product/Product";
const CartItem = ({name, price, img, quantity, dispatch}) => {
    return (
        <div className={styles.cartItem}>
            <Product name={name} price={price} img={img} dispatch={dispatch}/>
            <Counter dispatch={dispatch} count={quantity} name={name} price={price}/>
        </div>
    )
}

export default CartItem;
