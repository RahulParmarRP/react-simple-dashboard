import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
export const httpClient = axios;

export default httpClient;
