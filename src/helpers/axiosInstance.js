//but axios say  I have a better mechanism. What? What is the better mechanism? axios says that you can configure the axios instance. You can configure the axiosinstance how you can say const axiosinstance dot create, okay, exact instance dot create. And then you can set up base URL. What is the base URL? Base URL is the starting part of your URL that, let's say, if you want to hit always the same API. Here we are going to hit the same API always. If you have multiple APIs, then it doesn't make a lot of sense. But if you are going to hit the same API altogether, you can set the base URL that every time the starting part of the URL is going to be same, and the remaining part you can mention in the get request. I'll show you how so 

import axios from "axios";
import { COINGECKO_API_URL } from "./Constant";

const axiosInstance = axios.create({
    // baseURL: "https://api.coingecko.com/api/v3",
    baseURL: COINGECKO_API_URL,
})

export default axiosInstance;