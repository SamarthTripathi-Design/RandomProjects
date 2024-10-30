// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incCounter: (state) => {
      state.value += 1;
    },
    decCounter: (state) => {
      state.value -= 1;
    },
  },
});

export const { incCounter, decCounter } = counterSlice.actions;
export default counterSlice.reducer;
