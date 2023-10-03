import React from 'react';
import styles from './Product.module.css'

const Product = ({name, price, img, dispatch}) => {
    return (
        <div className={styles.product}>
            <img src={img} alt="product"/>
            <div className={styles.details}>
                <div>{name}</div>
                <div>${price}</div>
                <button type={'button'} onClick={() => dispatch({type: 'REMOVE', payload: {name, count: 0, price}})}>remove</button>
            </div>
        </div>
    )
}

export default Product;
