import express from 'express';
const app = express();

import currencys from '../currencys.json';
import PATH from '../paths.json';

const { PORT } = process.env;

app.get("/", (req, res) => {
    res.send('Currencys API');
})

app.get(PATH.CURRENCYS, (req, res) => {
    res.send(currencys);
})

app.listen(PORT, () => {
    console.log(`Tester app listening on port https://1eliee-3000.preview.csb.app/${PORT}`);
});