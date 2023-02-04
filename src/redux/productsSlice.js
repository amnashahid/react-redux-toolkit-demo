import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
    items: [],
    loading: false
}
const url = 'https://fakestoreapi.com/products';

export const getProductsitems = createAsyncThunk('products/getProductsitems', () =>
{
    return fetch(url)
        .then(resp => resp.json())
        .catch(err => console.log(err));
});

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [getProductsitems.pending]: (state) =>
        {
            state.loading = true
        },
        [getProductsitems.fulfilled]: (state, action) =>
        {
            state.items = action.payload
            state.loading = false
        },
        [getProductsitems.rejected]: (state) =>
        {
            state.loading = false
        },
    }
}

);

export default productsSlice.reducer;