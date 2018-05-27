import * as passportGoogleAuth from "passport-google-oauth";
import * as passport from "passport";

import { Credential, Common } from "../-index";
import { Account } from "../../models/Account";
import { Provider } from "../../shared/enums/provider";

const GoogleStrategy = passportGoogleAuth.OAuth2Strategy;

const google = Credential.googleCredentials;


/**
 * @description Google Strategy Setup
 * @param {passport.PassportStatic} passport
 */
export function initializeGoogleStrategy(passport: passport.PassportStatic): void {
  passport.use(new GoogleStrategy(
    {
      clientID: google.clientID,
      clientSecret: google.clientSecret,
      callbackURL: google.callbackUrl,
    },
    (accessToken: string, refreshToken: string, profile: any, done: Function) => {
      process.nextTick(async () => {
        return await Account
        .findById(profile.id)
        .then(async account => account ? done(null, account) : await Common.createUser(profile, Provider.Google, done))
        .catch(err => console.error(err));
      });
    }
  ));
}


