import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, clear } from './redux/cartSlice';

function Cart(props)
{
    const { products } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    { console.log(products) }
    return (
        <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', verticalAlign: 'middle' }}>
            {products.map((item) =>
            {
                return <div >
                    <h3> {item.name}</h3>
                    <button onClick={() => dispatch(increment(item))}>+</button>
                    <button onClick={() =>
                    {
                        if (products.length > 1)
                            dispatch(decrement(item))
                        if (products.length === 1)
                            dispatch(clear(item))
                    }}>-</button>
                    <button onClick={() => dispatch(clear(item))}>remove</button>
                </div >
            })}</div >
    );
}

export default Cart;