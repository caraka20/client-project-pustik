import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.155:3000",
  headers: {
    apikey: "tekno123",
  },
});

export default axiosInstance;
// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL,
//     headers: {
//         'apikey': import.meta.env.VITE_API_KEY
//     }
// });

// export default axiosInstance;
