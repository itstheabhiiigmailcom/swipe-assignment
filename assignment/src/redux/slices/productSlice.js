import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [], // Stores the list of products
  },
  reducers: {
    setProducts: (state, action) => {
      console.log("Data received in setProducts:", action.payload);
      state.items = [...action.payload]; // Replace the current product items with the new ones
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
