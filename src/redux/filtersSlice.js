
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: ""
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  selectors: {
        selectNameFilter: (state) => {
      return state.name;
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  }
})

export const { selectNameFilter } = filtersSlice.selectors;
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// export const selectNameFilter = (state) => {
//   return state.filters.name;
// };

