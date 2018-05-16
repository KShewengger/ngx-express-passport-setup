"use strict";

import { Router } from "express";

import { Passport } from "../../server";
import * as authApi from "./auth-api";

const router: Router = Router();
const frontEndOriginUrl = process.env.FRONTEND_URL;


router.get("/google", Passport.authenticate("google", { scope: [ "profile", "email" ] }));

router.get("/google/callback", Passport.authenticate("google", {
  successRedirect: `${frontEndOriginUrl}/initialize`,
  failureRedirect: "/"
}));

router.get("/user", authApi.getUserProfile);

router.get("/logout", authApi.logout);


export const authRoutes: Router = router;