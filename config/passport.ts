import * as passportGoogleAuth from "passport-google-oauth";
import * as passport from "passport";

import { config } from "./-index";
import { Account } from "../models/Account";
import { Provider } from "../models/Provider";

const google = config.getGoogleCredentials();
const GoogleStrategy = passportGoogleAuth.OAuth2Strategy;


/**
 * @description Initializes Google Strategy with the credentials passed.
 *
 * @param {passport.PassportStatic} passport
 */
export function initializeGoogleStrategy(passport: passport.PassportStatic): void {
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id: string, done: Function) => {
    await Account
    .findById(id)
    .then(account => done(null, account))
    .catch(err => console.error(err));
  });
  
  passport.use(new GoogleStrategy(
  {
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: google.callbackUrl,
  },
  (accessToken, refreshToken, profile: any, done: Function) => {
    process.nextTick(async () => {
      return await Account
      .findById(profile.id)
      .then(async account => account ? done(null, account) : await createUser(profile, done))
      .catch(err => console.error(err));
    });
  }
  ));
}


/**
 * @description Creates new user.
 *
 * @param user
 * @param done
 * @returns {Promise<any>}
 */
async function createUser(user: any, done: Function): Promise<any> {
  const newAccount = await initializeNewUserAccount(user);
  
  return await Account
  .create(newAccount)
  .then(account => done(null, account))
  .catch(err => console.error(err));
}


/**
 * @description Get Provider Id (Google, Twitter, LinkedIn, Local)
 *
 * @param {String} provider
 * @returns {Promise<any>}
 */
async function getProviderId(provider: string): Promise<any> {
  return await Provider
  .findOne({ where: { name: provider } })
  .then(provider => provider.id)
  .catch(err => console.error(err));
}


/**
 * @description Initializes User Account with the given set of object.
 *
 * @param {Any} user
 * @returns {any}
 */
async function initializeNewUserAccount(user: any): Promise<any> {
  const providerId = await getProviderId(user.provider);
  
  return {
    id: user.id,
    first_name: user.name.givenName,
    last_name: user.name.familyName,
    email: user.emails[ 0 ].value,
    gender: user.gender,
    provider_id: providerId
  };
}