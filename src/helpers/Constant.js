//what is the initial of the URL this part -> https://api.coingecko.com/api/v3 -> this part is going to be constant , In every API call this part be a constant, So i store in a sperate constant file, know what should be do is we should try to make one more file i am call it as axiosInstance.js
export const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

export const chartDays = [
        {
            label: '24 Hours',
            value: 1
        },
        {
            label: '7 Days',
            value: 7
        },
        {
            label: '30 Days',
            value: 30
        },
        {
            label: '90 Days',
            value: 90
        },
        {
            label: '365 Days',
            value: 365
        },
    ]