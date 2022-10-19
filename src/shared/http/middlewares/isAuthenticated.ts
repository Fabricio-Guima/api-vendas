import authConfig from "@config/auth";
import AppError from "@shared/errors/AppError";
import { Response, NextFunction } from "express";
import { Request } from "express";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}
export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token is missing.");
  }
  //bearer
  const [, token] = authHeader.split(" ");

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodedToken as ITokenPayload;

    //sobscrever o request adicionando o user
    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError("Invalid JWT Token.");
  }
}
