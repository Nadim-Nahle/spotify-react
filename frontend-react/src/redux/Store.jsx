import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./slices/filterSlice";

export const Store = configureStore({
  reducer: {
    searchKey: filterSliceReducer,
  },
});
