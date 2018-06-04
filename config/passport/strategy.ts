import * as passport from "passport";
import * as passportGoogleAuth from "passport-google-oauth";
import * as passportTwitter from "passport-twitter";
import * as passportFacebook from "passport-facebook";
import * as passportLocal from "passport-local";

import { Credential, DbQuery } from "../-index";

const GoogleStrategy   = passportGoogleAuth.OAuth2Strategy;
const TwitterStrategy  = passportTwitter.Strategy;
const FacebookStrategy = passportFacebook.Strategy;
const LocalStrategy    = passportLocal.Strategy;

const google   = Credential.googleCredentials;
const twitter  = Credential.twitterCredentials;
const facebook = Credential.facebookCredentials;


/**
 * @description Google Strategy Setup
 * @param {passport.PassportStatic} passport
 */
export function initializeGoogleStrategy(passport: passport.PassportStatic): void {
  passport.use(new GoogleStrategy(
    {
      clientID      : google.clientID,
      clientSecret  : google.clientSecret,
      callbackURL   : google.callbackUrl,
    },
    (accessToken: string, refreshToken: string, profile: any, done: Function) => processUser(profile, done)));
}


/**
 * @description Google Strategy Setup
 * @param {passport.PassportStatic} passport
 */
export function initializeTwitterStrategy(passport: passport.PassportStatic): void {
  
  passport.use(new TwitterStrategy({
    consumerKey   : twitter.consumerKey,
    consumerSecret: twitter.consumerSecret,
    callbackURL   : twitter.callbackUrl,
    includeEmail  : true,
  },(accessToken: string, refreshToken: string, profile: any, done: Function) => processUser(profile, done)));
}


/**
 * @description Facebook Strategy Setup
 * @param {passport.PassportStatic} passport
 */
export function initializeFacebookStrategy(passport: passport.PassportStatic): void {
  
  passport.use(new FacebookStrategy({
      clientID      : facebook.clientID,
      clientSecret  : facebook.clientSecret,
      callbackURL   : facebook.callbackUrl,
      profileFields : facebook.profileFields
    },(accessToken: string, refreshToken: string, profile: any, done: Function) => processUser(profile, done)));
}


/**
 * @description Local Strategy Setup
 * @param {passport.PassportStatic} passport
 */
export function initializeLocalStrategy(passport: passport.PassportStatic): void {
  
  passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
  }, (email: string, password: string, done: Function) => processUser({email, password}, done, true)));
}


/**
 * @description Processing User before authentication.
 *
 * @param {Any} profile
 * @param {Function} done
 * @returns {Any}
 */
function processUser(profile: any, done: Function, isLocal?: boolean): any {
  return process.nextTick(async () => {
    if (isLocal) await DbQuery.findUserByEmailPassword(profile, done);
    else await DbQuery.findOrCreateUser(profile, done);
  });
}



