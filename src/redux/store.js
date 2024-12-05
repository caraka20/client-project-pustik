import { configureStore } from "@reduxjs/toolkit";
import posisiReducer from "./features/posisiSlice";
import topikReducer from "./features/topikSlice";
import mappingReducer from "./features/mappingSlice";
import geoReducer from "./features/geoSlice";

const store = configureStore({
  reducer: {
    posisi: posisiReducer,
    topik: topikReducer,
    mapping: mappingReducer,
    geo: geoReducer,
  },
});

export default store;
