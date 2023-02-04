import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    products: [
    ],
    count: 0
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