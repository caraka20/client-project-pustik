import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/api";

const initialState = {
  data: {},
};

export const posisiSlice = createSlice({
  name: "industri",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

// Menggunakan permalink sebagai parameter
export const fetchData = (permalink) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/industri/${permalink}`);
    dispatch(setData(response.data.data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const { setData } = posisiSlice.actions;

export default posisiSlice.reducer;
