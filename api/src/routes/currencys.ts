import express from "express";
import currencys from '../../currencys.json';
import PATH from "../../paths.json";

const router = express.Router();

router.get("/", (req, res) => {
    res.send('Currencys API');
});

router.get(PATH.CURRENCYS.LIST, (req, res) => {
    res.status(200).send(currencys);
});

router.get(PATH.CURRENCYS.GET, (req, res) => {
    const data: any[] = [];
    const { code } = req.query;
    
    for (const currency of currencys) {
        if (currency.code === code) {
            data.push(currency);
            break;
        }
    }
    
    if (data && !data.length) {
        return res.status(404).json({ status: res.statusCode, message: "Provided code not found" });
    }
    
    return res.status(200).json({ status: res.statusCode, data: Object.assign({}, ...data) });
});

export default router;