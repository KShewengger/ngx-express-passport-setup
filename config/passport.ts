import * as passportGoogleAuth from "passport-google-oauth";
import * as passport from "passport";

import { keys } from "./keys";

const googleKeys = keys.google;
const GoogleStrategy = passportGoogleAuth.OAuth2Strategy;

export function initializeGoogleStrategy(passport: passport.PassportStatic) {

  passport.serializeUser(function (user, done) {
    console.log(user);
    done(null, user);
  });

  passport.deserializeUser(function (id, done) {
    console.log(id);
    done(null, id);
  });

  passport.use(new GoogleStrategy({
      clientID: googleKeys.clientID,
      clientSecret: googleKeys.clientSecret,
      callbackURL: googleKeys.callbackUrl
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        console.log(profile);

        return done(null, profile);
      });
    }
  ));
}