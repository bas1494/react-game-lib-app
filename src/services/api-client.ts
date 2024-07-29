import axios, { CanceledError } from "axios";
import API_KEY from "../config/secret";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: API_KEY,
    },
})

export {CanceledError};