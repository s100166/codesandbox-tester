import winston from "winston";

const format = winston.format.printf(({ level, message, label }) => {
    const capitalize = () => `${level.charAt(0).toUpperCase()}${level.slice(1)}`;
    
    return `[${capitalize()}](${label}): ${message}`;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({ label: 'Client' }),
    winston.format.prettyPrint(),
    format
  ),
  transports: [
      new winston.transports.File({ level: "error", filename: 'client/log/error.log' }),
      new winston.transports.File({ filename: 'client/log/tester.log' })
  ]
});

export default logger;