import { Request, Response } from "express";



class UserController {
  static login = async (req: Request, res: Response) => {
    res.render('login')
  };

  

  


  static create = async (req: Request, res: Response) => {
    res.render('create_user')
  };

  

 
}
export default UserController;
