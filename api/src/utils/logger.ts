import winston from "winston";

const format = winston.format.printf(({ level, message, label }) => {
    const capitalize = () => `${level.charAt(0).toUpperCase()}${level.slice(1)}`;
    
    return `[${capitalize()}](${label}): ${message}`;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({ label: 'API' }),
    winston.format.prettyPrint(),
    format
  ),
  transports: [
      new winston.transports.File({ level: "error", filename: 'api/log/error.log' }),
      new winston.transports.File({ filename: 'api/log/tester.log' })
  ]
});

export default logger;