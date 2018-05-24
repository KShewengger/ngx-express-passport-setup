import { Request, Response, NextFunction } from "express";

const frontEndOriginUrl = process.env.FRONTEND_URL;

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
export function getUserProfile(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    const { id, first_name: firstName, last_name: lastName, email, gender, provider_id: providerId } = req.user;
    const user = { id, firstName, lastName, email, gender, providerId };
  
    res.json(user);
  }
  else res.redirect(frontEndOriginUrl);
}

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
export function logout(req: Request, res: Response, next: NextFunction) {
  req.logOut();
  res.json(1);
}
