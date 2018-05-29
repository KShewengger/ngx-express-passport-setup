"use strict";

import { Router } from "express";

import { Passport } from "../../server";
import * as authApi from "./auth-api";

const router: Router = Router();
const frontEndOriginUrl = process.env.FRONTEND_URL;


/**
 * @api {get} /google
 * @description Passport Google Authentication - Holds the redirection from your app to gmail login page.
 */
router.get("/google", Passport.authenticate("google", { scope: [ "profile", "email" ] }));


/**
 * @api {get} /google/callback
 * @description Handles the callback after google has authenticated the user.
 */
router.get("/google/callback", Passport.authenticate("google", {
  successRedirect: `${frontEndOriginUrl}/initialize`,
  failureRedirect: "/"
}));


/**
 * @api {get} /twitter
 * @description Passport Twitter Authentication - Holds the redirection from your app to twitter login page.
 */
router.get("/twitter", Passport.authenticate("twitter"));


/**
 * @api {get} /twitter/callback
 * @description Handles the callback after google has authenticated the user.
 */
router.get("/twitter/callback", Passport.authenticate("twitter", {
  successRedirect: `${frontEndOriginUrl}/initialize`,
  failureRedirect: "/"
}));


/**
 * @api {get} /facebook
 * @description Passport Facebook Authentication - Holds the redirection from your app to twitter login page.
 */
router.get("/facebook", Passport.authenticate("facebook", {
  scope : ["public_profile", "email", "user_gender"]
}));


/**
 * @api {get} /facebook/callback
 * @description Handles the callback after facebook has authenticated the user.
 */
router.get("/facebook/callback", Passport.authenticate("facebook", {
  successRedirect: `${frontEndOriginUrl}/initialize`,
  failureRedirect: "/"
}));


/**
 * @api {get} /user
 * @description Get user's information.
 */
router.get("/user", authApi.getUser);


/**
 * @api {get} /logout
 * @description Log Out User.
 */
router.get("/logout", authApi.logout);


export const authRoutes: Router = router;