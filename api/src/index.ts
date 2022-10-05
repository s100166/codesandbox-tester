import express from "express";
import currencysRoute from "./routes/currencys";
import logger from "./utils/logger";

const app = express();

const { API_URL, PORT } = process.env;

app.use(express.json());

logger.info("Starting routes...");
const startTime = performance.now();
app.use(currencysRoute);
const endTime = performance.now();
logger.info(`Routes started (${(endTime - startTime).toFixed(2)}ms)`);

app.listen(PORT, () => {
  logger.info(`Tester app listening on port ${API_URL}/${PORT}`);
  console.info(`Tester app listening on port ${API_URL}/${PORT}`);
});
