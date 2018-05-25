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
 * @description Passport Google Callback - After login from gmail, if successful it will redirect back to your app. If not, redirects to /
 */
router.get("/google/callback", Passport.authenticate("google", {
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