import axios, { AxiosResponse } from 'axios';
import PATH from '../../api/paths.json';
import '../../api/src/index';
import { CurrencyType } from "../../api/types";

const getCurrencys = async() => {
    const currencys: CurrencyType[] = [];
    const { API_URL } = process.env;
    
    try {
        const response: AxiosResponse<CurrencyType[], CurrencyType[]> = await axios.get(API_URL + PATH.CURRENCYS);
        
        if (response.status === 200) {
            currencys.push(...response.data);
        }
    } catch (err) {
        console.log(err);
    }
    
    return currencys;
}

(async() => {
    const currencys = await getCurrencys();
    
    for (const [index, currency] of currencys.entries()) {
        console.log(`Index: ${index} -|- Code: ${currency.code} -|- Name: ${currency.name}`)
    }
})();