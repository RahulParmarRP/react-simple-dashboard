export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));
