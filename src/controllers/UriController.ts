import { Request, Response } from "express";



class UriController {


  static shorten = async (req: Request, res: Response) => {
    res.render('shorten')
  };

  

 
}
export default UriController;
