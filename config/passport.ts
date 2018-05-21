import * as passportGoogleAuth from "passport-google-oauth";
import * as passport from "passport";

import * as config from "./config";

const googleKeys = config.default.google;
const GoogleStrategy = passportGoogleAuth.OAuth2Strategy;


export function initializeGoogleStrategy(passport: passport.PassportStatic) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    done(null, id);
  });

  passport.use(new GoogleStrategy({
      clientID: googleKeys.clientID,
      clientSecret: googleKeys.clientSecret,
      callbackURL: googleKeys.callbackUrl,
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => done(null, profile));
    }
  ));
}
