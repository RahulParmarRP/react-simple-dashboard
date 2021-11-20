import axios from "axios"
import { BASE_API } from "../utils"
export const httpClient = axios.create({
  baseUrl: BASE_API,
})

export default httpClient