import * as passportGoogleAuth from "passport-google-oauth";
import * as passport from "passport";

import { config } from "./-index";

const google = config.getGoogleCredentials();
const GoogleStrategy = passportGoogleAuth.OAuth2Strategy;


export function initializeGoogleStrategy(passport: passport.PassportStatic) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((id, done) => {
    done(null, id);
  });
  
  passport.use(new GoogleStrategy(
  {
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: google.callbackUrl,
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  }
  ));
}
