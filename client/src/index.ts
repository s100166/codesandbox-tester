import axios, { AxiosResponse } from 'axios';
import PATH from '../../api/paths.json';
import { CurrencyType } from "../../api/types";

const getCurrencys = async() => {
    const response: AxiosResponse<CurrencyType[], CurrencyType[]> = await axios.get(process.env.API_URL + PATH.CURRENCYS);
    return response.status === 200 ? response.data : [];
}

(async() => {
    const currencys = await getCurrencys();
    
    for (const currency of currencys) {
        console.log(currency.code);
    }
})();