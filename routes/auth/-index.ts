"use strict";

import { Router } from "express";

import { Passport } from "../../server";
import * as authApi from "./auth-api";

const router: Router = Router();
const frontEndOriginUrl = process.env.FRONTEND_URL;

/**
 * @description Passport Google Authentication.
 */
router.get("/google", Passport.authenticate("google", { scope: [ "profile", "email" ] }));

/**
 * @description Passport Google Callback.
 */
router.get("/google/callback", Passport.authenticate("google", {
  successRedirect: `${frontEndOriginUrl}/initialize`,
  failureRedirect: "/"
}));

/**
 * @description Get user information.
 */
router.get("/user", authApi.getUser);

/**
 * @description Log Out User.
 */
router.get("/logout", authApi.logout);


export const authRoutes: Router = router;