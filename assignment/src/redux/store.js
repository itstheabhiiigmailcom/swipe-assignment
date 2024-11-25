import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './slices/invoiceSlice';
import customerReducer from './slices/customerSlice';
import productReducer from './slices/productSlice';

const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    customer: customerReducer,
    product: productReducer,
  },
  // Enable Redux DevTools extension for debugging
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
