import React from 'react';
import styles from './Bag.module.css'
import CartItem from "../CartItem/CartItem";

const Bag = ({state, dispatch}) => {
    return (
        <div className={styles.container}>
            <h2>Your Bag</h2>
            {state.items.length > 0 ? <main className={styles.bag}>
                {state.items.map(item => (<CartItem key={item.name} {...item} dispatch={dispatch}/>))}
                <hr/>
                <div className={styles.total}>
                    <div>Total</div>
                    <div className={styles.totalPrice}>${state.totalPrice}</div>
                </div>
                <button className={styles.clear} onClick={() => dispatch({type: 'CLEAR'})}>Clear Cart</button>
            </main> : <main className={styles.empty}>is currently empty</main>}
        </div>
    )
}

export default Bag;
