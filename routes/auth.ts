"use strict";

import { Router, } from "express";
import { Passport } from "../server";

const router: Router = Router();


router.get("/google", Passport.authenticate("google", {scope: [ "profile", "email" ]}));

router.get("/google/callback", Passport.authenticate("google", {
  successRedirect: "/",
  failureRedirect: "/"
}));


export const authRoutes: Router = router;