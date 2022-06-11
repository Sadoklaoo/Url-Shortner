import { Request, Response, NextFunction } from "express";

class UriController {
  static shorten = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  static redirect = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};
}
export default UriController;
