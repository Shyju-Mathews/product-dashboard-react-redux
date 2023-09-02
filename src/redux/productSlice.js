import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../errorCode/StatusCode";

const initialState = {
    data: [],
    status: StatusCode.IDLE
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = StatusCode.LOADING;
        })
        
        .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE;
            })

        .addCase(getProducts.rejected, (state, action) => {
            state.status = StatusCode.ERROR;
        })
    }
})

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;


export const getProducts = createAsyncThunk('products/get', async () => {
    const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
        return data;
})


// export function getProducts() {
//     return async function getProductsThunk(dispatch, getstate) {
//         const res = await fetch("https://fakestoreapi.com/products")
//         const data = await res.json();
//         dispatch(fetchProducts(data))
//     }
// }