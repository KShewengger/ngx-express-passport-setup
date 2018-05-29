import * as passport from "passport";

import { Account } from "../../models/Account";

import { Strategy } from "../-index";


/**
 * @description Initializes Google Strategy with the credentials passed.
 *
 * @param {passport.PassportStatic} passport
 */
export function initializeStrategies(passport: passport.PassportStatic): void {
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id: string, done: Function) => {
    await Account
    .findById(id)
    .then(account => done(null, account))
    .catch(err => console.error(err));
  });
  
  Strategy.initializeGoogleStrategy(passport);
  Strategy.initializeTwitterStrategy(passport);
  Strategy.initializeFacebookStrategy(passport);
}
