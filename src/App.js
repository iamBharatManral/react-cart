import './App.css';
import Header from "./components/Header/Header";
import Bag from "./components/Bag/Bag";
import {cartReducer} from "./reducers/cartReducer";
import {useReducer} from "react";

const initialState = {
    items: [
        {name: 'Samsung Galaxy S10', price: 1000, img: 'https://www.course-api.com/images/cart/phone-1.png', quantity: 1},
        {name: 'Google Pixel 3a', price: 500, img: 'https://www.course-api.com/images/cart/phone-2.png', quantity: 1},
        {name: 'Xiaomi Redmi Note 2', price: 699, img: 'https://www.course-api.com/images/cart/phone-3.png', quantity: 1},
        {name: 'Samsung Galaxy S7 Edge', price: 299, img: 'https://www.course-api.com/images/cart/phone-4.png', quantity: 1},
    ],
    totalPrice: 2498,
    totalItems: 4
}

function App() {
    const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <div className="App">
     <Header totalItems={state.totalItems}/>
        <Bag state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
