import { Router } from "express";
import * as userApi from "../controllers/user";

const router: Router = Router();


/**
 * @api {post} /user
 * @description Get user's information.
 */
router.post("/", userApi.saveUser);


/**
 * @api {get} /user
 * @description Get user's information.
 */
router.get("/", userApi.getUser);


/**
 * @api {get} /logout
 * @description Log Out User.
 */
router.get("/logout", userApi.logout);


export const userRoutes: Router = router;