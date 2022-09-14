import express from "express";
const app = express();

import currencys from "./currencys.json";

app.get("/currencys", (req, res) => {
    res.send(currencys);
})

app.listen(process.env.PORT, () => {
    console.log(`Tester app listening on port https://1eliee-3000.preview.csb.app/${process.env.PORT}`);
})