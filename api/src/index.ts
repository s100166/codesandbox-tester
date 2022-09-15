import express from 'express';
import currencysRoute from './routes/currencys';
const app = express();

const { API_URL, PORT } = process.env;

app.use(currencysRoute);

app.listen(PORT, () => {
    console.log(`Tester app listening on port ${API_URL}/${PORT}`);
});