import * as passportGoogleAuth from "passport-google-oauth";
import * as passport from "passport";

import { config } from "./-index";
import { Account } from "../models/Account";
import { Provider } from "../models/Provider";
import { Func } from "continuation-local-storage";

const google = config.getGoogleCredentials();
const GoogleStrategy = passportGoogleAuth.OAuth2Strategy;

/**
 *
 * @param {passport.PassportStatic} passport
 */
export function initializeGoogleStrategy(passport: passport.PassportStatic) {
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
 *
 * @param {string} provider
 * @returns {Promise<any>}
 */
async function fetchProviderId(provider: string): Promise<any> {
  return await Provider
  .findOne({ where: { name: provider } })
  .then(provider => provider.id)
  .catch(err => console.error(err));
}

/**
 *
 * @param user
 * @returns {any}
 */
async function initializeNewUserAccount(user: any): Promise<any> {
  const providerId = await fetchProviderId(user.provider);
  
  return {
    id: user.id,
    first_name: user.name.givenName,
    last_name: user.name.familyName,
    email: user.emails[ 0 ].value,
    gender: user.gender,
    provider_id: providerId
  };
}