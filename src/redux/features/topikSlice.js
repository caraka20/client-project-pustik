import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/api";

const initialState = {
  data: {},
};

export const topikSlice = createSlice({
  name: "topik",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
    setSingleData: (state, { payload }) => {
      state.singleData = payload;
    },
  },
});

// Get semua data
export const fetchData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/topik`);
    dispatch(setData(response.data.data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Get data berdasarkan permalink
export const getDataByPermalink = (permalink) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/topik/${permalink}`);
    dispatch(setSingleData(response.data)); 

  } catch (error) {
    console.error("Error fetching data by permalink:", error);
  }
};

export const { setData, setSingleData } = topikSlice.actions;

export default topikSlice.reducer;
