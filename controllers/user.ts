import { Request, Response } from "express";
import * as uuid from "uuid/v4";
import * as snakeCase from "snakecase-keys";

import { Account } from "../models/Account";

import { User } from "../shared/interfaces/-index";


/**
 * @api {post} /user
 * @description Save new user.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function saveUser(req: Request, res: Response): Promise<any> {
  let body: User = snakeCase(req.body);
  body.id = uuid();
  
  return await Account
  .findOne({ where: {email: body.email} })
  .then(async account => validateAndCreateUser(body, account, res))
  .catch(err => console.error(err));
}


/**
 * @description Validate user email and Create user - if found, send it's error message. If not, create user.
 *
 * @param {User} body
 * @param {Response} res
 *
 * @returns {Promise<void>}
 */
async function validateAndCreateUser(body: User, accountFound: any, res: Response): Promise<void> {
  if (accountFound) res.status(404).json({duplicate: "Email already exists"});
  else {
    await Account
    .create(body)
    .then(response => res.json(response))
    .catch(err => console.error(err));
  }
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
  else res.sendStatus(404);
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
