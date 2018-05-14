import { Request, Response, NextFunction } from "express";

const frontEndOriginUrl = process.env.FRONTEND_URL;


export function getUserProfile(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    const userResponse = req.user;

    const user = {
      id: userResponse.id,
      firstName: userResponse.name.givenName,
      lastName: userResponse.name.familyName,
      email: userResponse.emails[ 0 ].value,
      gender: userResponse.gender,
      provider: userResponse.provider
    };

    res.json(user);
  }
  else res.redirect(frontEndOriginUrl);
}


export function logout(req: Request, res: Response, next: NextFunction) {
  req.logOut();
  res.json(1);
}