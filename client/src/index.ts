import axios, { AxiosResponse } from "axios";
import PATH from "../../api/paths.json";
import { API } from "../../api/typings";

const getCurrencys = async (): Promise<API[]> => {
  const currencys: API[] = [];
  const { API_URL } = process.env;

  try {
    const response: AxiosResponse<API[], API[]> = await axios.get(
      `${API_URL}${PATH.CURRENCYS.LIST}`
    );

    if (response.status === 200) {
      currencys.push(...response.data);
    }
  } catch (err) {
    console.error(err);
  }

  return currencys;
};

const getCurrency = async (code: string): Promise<API> => {
  const currencys: API[] = [];
  const { API_URL } = process.env;

  try {
    const response: AxiosResponse<API, API> = await axios.get(
      `${API_URL}${PATH.CURRENCYS.GET}`,
      { params: { code } }
    );

    if (response.status === 200) {
      currencys.push(response.data);
    }
  } catch (err) {
    console.error(err);
  }

  return Object.assign({}, ...currencys);
};

(async () => {
  //   const currencys = await getAPIs();
  const currency = await getCurrency("ARS");
  console.log(currency);

  // for (const [index, API] of APIs.entries()) {
  //     console.log(`Index: ${index} -|- Code: ${API.code} -|- Name: ${API.name}`)
  // }
})();
