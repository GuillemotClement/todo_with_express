import { Response, Request } from "express";
export class HomepageController{
  static render(req: Request, res: Response){
    res.render('homepage');
  }
}