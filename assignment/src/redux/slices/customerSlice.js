import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    data: null, // Stores customer data
  },
  reducers: {
    setCustomer: (state, action) => {
      console.log("Data received in setCustomer:", action.payload);
      state.data = { ...action.payload }; // Replace the current customer data with the new one
    },
  },
});

export const { setCustomer } = customerSlice.actions;
export default customerSlice.reducer;
