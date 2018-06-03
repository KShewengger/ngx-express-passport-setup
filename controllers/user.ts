import { Request, Response, NextFunction } from "express";
import * as uuid from "uuid/v4";
import * as snakeCase from "snakecase-keys";

import { Account } from "../models/Account";
import { User } from "../shared/interfaces/-index";
import { Passport } from "../server";


/**
 * @api {post} /user
 * @description Save new user.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function saveUser(req: Request, res: Response, next: NextFunction): Promise<any> {
  let body: User = snakeCase(req.body);
  body.id = uuid();
  
  return await Account
  .findOne({ where: {email: body.email} })
  .then(async account => validateAndCreateUser(body, account, res))
  .catch(err => next(err));
}


/**
 * @description Validate user email and Create user - if found, send it's error message. If not, create user.
 *
 * @param {User} body
 * @param {Response} res
 *
 * @returns {Promise<void>}
 */
async function validateAndCreateUser(body: User, accountFound: any, res: Response, next?: NextFunction): Promise<void> {
  if (accountFound) res.status(409).json({ message: "Email already exists" });
  else {
    await Account
    .create(body)
    .then(response => res.json(response))
    .catch(err => next(err));
  }
}


/**
 * @description Select and Filter user fields needed from req.user
 *
 * @param reqUser
 * @returns {any}
 */
function filterUserFieldsFromReqUser(reqUser: any): any {
  const { id, first_name: firstName, last_name: lastName, email, gender, provider_id: providerId } = reqUser;
  const user: User = { id, firstName, lastName, email, gender, providerId };
  
  return user;
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
    const user = filterUserFieldsFromReqUser(req.user);
    res.json(user);
  }
  else res.status(404).json({ message: "Account doesn't exists" });
}


/**
 * @api {post} /auth/login
 * @description Handles Local Authentication
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function login (req: Request, res: Response, next: NextFunction) {
  Passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(404).json(info.message);

    req.logIn(user, err => {
      if (err) next(err);
      else {
        const user = filterUserFieldsFromReqUser(req.user);
        res.status(200).json(user);
      }
    });
  })(req, res, next);
}


/**
 * @api {get} /user/logout
 * @description Log Out user.
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
export function logout(req: Request, res: Response): void {
  req.logout();
  res.json(1);
}
