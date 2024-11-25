import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoice: [], // Stores invoice data
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setInvoice: (state, action) => {
      console.log("Data received in action payload in Slice:", action.payload);
      state.invoice.push({
        invoiceNumber: action.payload.invoiceNumber,
        date: action.payload.date,
        totalAmount: action.payload.totalAmount
      })
      console.log("Reducer: Updated state.data:", JSON.parse(JSON.stringify(state.invoice)));
 // Log the updated state
    },
  },
});

export const { setInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
