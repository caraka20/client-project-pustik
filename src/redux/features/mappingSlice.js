import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/api";

const initialState = {
  data: [], // Data untuk menyimpan hasil API
  totalPages: 0, // Total halaman
  currentPage: 1, // Halaman saat ini
  totalItems: 0, // Total item
};

export const mappingSlice = createSlice({
  name: "mapping",
  initialState,
  reducers: {
    setMappings: (state, { payload }) => {
      state.data = payload.items;
      state.totalPages = payload.totalPages;
      state.currentPage = payload.currentPage;
      state.totalItems = payload.totalItems;
    },
  },
});

// Fungsi untuk mengambil data dari API dengan query params
export const fetchMappings = (params) => async (dispatch) => {
  try {
    // Membangun query string dari params
    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");

    const response = await axiosInstance.get(`/mapping?${queryString}`);
    dispatch(setMappings(response.data.data)); // Menyimpan data ke Redux store
  } catch (error) {
    console.error("Error fetching mappings:", error);
  }
};

export const { setMappings } = mappingSlice.actions;

export default mappingSlice.reducer;
