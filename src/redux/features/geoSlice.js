import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/api";

const initialState = {
  data: { items: [], totalItems: 0 }, // Default struktur data
  isLoading: false,
  error: null,
};

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setGeoData: (state, { payload }) => {
      state.data = payload; // Payload harus mengandung `items` dan `totalItems`
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

// Thunk untuk fetch data Geo
export const fetchGeo = (params) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");
    const response = await axiosInstance.get(`/geo?${queryString}`);
    dispatch(setGeoData(response.data.data)); // Respons API harus sesuai
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const { setGeoData, setLoading, setError } = geoSlice.actions;

export default geoSlice.reducer;
