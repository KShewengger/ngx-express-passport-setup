import { Request, Response } from "express";

import { User } from "../shared/interfaces/-index";

const frontEndOriginUrl = process.env.FRONTEND_URL;



/**
 * @api {post} /user
 * @description Save new user.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function saveUser(req: Request, res: Response): Promise<void> {

}


/**
 * @api {get} /user
 * @description Get user's information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export function getUser(req: Request, res: Response): void {
  if (req.isAuthenticated()) {
    const { id, first_name: firstName, last_name: lastName, email, gender, provider_id: providerId } = req.user;
    const user: User = { id, firstName, lastName, email, gender, providerId };
    
    res.json(user);
  }
  else res.redirect(frontEndOriginUrl);
}


/**
 * @api {get} /user/logout
 * @description Log Out user.
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
export function logout(req: Request, res: Response): void {
  req.logOut();
  res.json(1);
}
