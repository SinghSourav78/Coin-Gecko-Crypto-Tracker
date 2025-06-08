import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrencyContext } from "../Context/CurrencyContext";
import { useQuery } from "react-query";
import { fetchCoinDetails } from "../Services/fetchCoinDetails";

//hera we are making a custom Hook

function useFetchCoin() {
    const { coinId } = useParams();
    const {currency} = useContext(CurrencyContext);
    const {isError, isLoading, data:coin} = useQuery(["coin",coinId], () => fetchCoinDetails(coinId),
    {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    }
    );

    return {
        coinId, currency,isError,isLoading,coin
    }
}

export default useFetchCoin;