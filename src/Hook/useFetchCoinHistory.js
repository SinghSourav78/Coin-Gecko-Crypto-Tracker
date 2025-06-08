import { useQuery } from "react-query";
import { fetchCoinHistoricData } from "../Services/fetchCoinHistoricData";
import { useContext, useState } from "react";
import { CurrencyContext } from "../Context/CurrencyContext";

// this is known as custom hook
function useFetchCoinHistory(coinId) {
 
    const {currency} = useContext(CurrencyContext);
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily')

    const {data:historicData, isLoading, isError} = useQuery(['coinHistoricData', coinId, currency, days, interval],
        () => fetchCoinHistoricData(coinId,interval,days,currency),
        {
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2
        }
    )

    return [
        historicData,
        isLoading,
        isError,
        setDays,
        setCoinInterval,
        days,
        currency
    ]

}

export default useFetchCoinHistory;