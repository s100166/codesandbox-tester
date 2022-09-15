import express from "express";
import currencys from '../../currencys.json';
import PATH from "../../paths.json";

const router = express.Router();

router.get("/", (req, res) => {
    res.send('Currencys API');
})

router.get(PATH.CURRENCYS, (req, res) => {
    res.status(200).send(currencys);
})

export default router;