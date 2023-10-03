import React from 'react';
import styles from './Counter.module.css'
import up from '../../assets/images/up.svg'
import down from '../../assets/images/down.svg'

const Counter = ({count, dispatch, name, price}) => {
    return (
        <div className={styles.counter}>
            <button onClick={() => dispatch({type: 'ADD', payload: {name, count: 1, price}})}><img src={up} alt="plus"/></button>
            <div>{count}</div>
            <button onClick={() => dispatch({type: 'REMOVE', payload: {name, count: -1, price}})}><img src={down} alt="minus"/></button>
        </div>
    )
}

export default Counter;
