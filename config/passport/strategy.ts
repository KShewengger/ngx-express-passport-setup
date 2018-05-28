import * as passportGoogleAuth from "passport-google-oauth";
import * as passportTwitter from "passport-twitter";
import * as passport from "passport";

import { Credential, Common } from "../-index";

const GoogleStrategy  = passportGoogleAuth.OAuth2Strategy;
const TwitterStrategy = passportTwitter.Strategy;

const google  = Credential.googleCredentials;
const twitter = Credential.twitterCredentials;


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
    (accessToken: string, refreshToken: string, profile: any, done: Function) => {
      process.nextTick(async () => await Common.findAndCreateUser(profile, done));
    }
  ));
}


/**
 * @description Google Strategy Setup
 * @param {passport.PassportStatic} passport
 */
export function initializeTwitterStrategy(passport: passport.PassportStatic): void {
  
  passport.use(new TwitterStrategy({
    consumerKey   : twitter.consumerKey,
    consumerSecret: twitter.consumerSecret,
    callbackURL   : twitter.callbackUrl
  },(accessToken: string, refreshToken: string, profile: any, done: Function) => {
      process.nextTick(async () => await Common.findAndCreateUser(profile, done));
    }
  ));
}



