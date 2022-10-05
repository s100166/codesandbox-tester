import { Request, Response, NextFunction } from "express";
import _ from "lodash";
import jwt from "jsonwebtoken";

export const generateAccessToken = (params: any) => {
  return jwt.sign(params, process.env.TOKEN_SECRET as jwt.Secret, {
    expiresIn: "1m",
  });
};

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  const token = header && header.split(" ")[1];

  if (_.isNil(token)) {
    return res.status(401).json({
      status: res.statusCode,
      message: "Unauthorized",
    });
  }

  jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret, (err) => {
    if (err) {
      return res
        .status(403)
        .json({ status: res.statusCode, message: "Forbidden" });
    }

    next();
  });
};
