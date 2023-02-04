import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    products: [
        { id: 1, name: 'product 1', price: 160 },
        { id: 2, name: 'product 2', price: 130 },
        { id: 3, name: 'product 3', price: 140 },
        { id: 4, name: 'product 4', price: 150 },
        { id: 5, name: 'product 5', price: 140 },
    ],
    count: 5
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) =>
        {
            state.products.push(action.payload)
            state.count = state.products.length;
        },
        decrement: (state, action) =>
        {
            let items = state.products.filter(item => item.id === action.payload.id);
            items.pop();
            let rest = state.products.filter(item => item.id !== action.payload.id);
            state.products = [...rest, ...items];
            state.count = state.products.length;

        },
        clear: (state, action) =>
        {
            state.products = state.products.filter(item => item.id !== action.payload.id);
            state.count = state.products.length;
        },
    }
}

);

export const { increment, decrement, clear } = cartSlice.actions
export default cartSlice.reducer;