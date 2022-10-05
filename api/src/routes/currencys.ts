import { Request, Response, Router } from "express";
import currencys from "../../currencys.json";
import PATH from "../../paths.json";
import logger from "../utils/logger";
import path from "path";
import _ from "lodash";
import { Currency } from "../../typings";
import { generateAccessToken, authenticateToken } from "../utils/access_token";

const router: Router = Router();

logger.info("Starting router...");
router.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/access_token", (req: Request, res: Response) => {
  const { username, password } = req.body;

  const param = {
    username,
    password,
  };

  const accessToken = generateAccessToken(param);

  res.status(200).json({ status: res.statusCode, accessToken });
});

router.get(
  PATH.CURRENCYS.LIST,
  authenticateToken,
  (req: Request, res: Response) => {
    res.status(200).json(currencys);
  }
);

router.get(PATH.CURRENCYS.GET, (req: Request, res: Response) => {
  const { code, name } = req.query;

  const data = _.reduce(
    currencys,
    (acc: Currency | null, currency: Currency) => {
      if (!_.isUndefined(code) && !_.isUndefined(name)) {
        return currency.code === code && currency.name === name
          ? currency
          : acc;
      } else if (!_.isUndefined(code)) {
        return currency.code === code ? currency : acc;
      } else if (!_.isUndefined(name)) {
        return currency.name === name ? currency : acc;
      }

      return acc;
    },
    null
  );

  if (_.isNil(data)) {
    return res.status(404).json({
      status: res.statusCode,
      message: "Provided query not found",
    });
  }

  return res.status(200).json({ status: res.statusCode, data: data });
});
logger.info("Router started");

export default router;
