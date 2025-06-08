import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page=1, currency='usd') {
    const perPage = 10; //agar yeh pr 20 krdia to her page mein 20 data fetch hokr aayenge
    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        
        return response.data;
    } catch (error) {
        console.log(error);
        return null; //we are returning null for a movement
    }
    
}