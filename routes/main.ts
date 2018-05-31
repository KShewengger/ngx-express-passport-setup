import { Router, Request, Response } from "express";

const router: Router = Router();


/**
 * @api {get} /
 * @description Renders Express Main Page
 *
 * @param {Request} req
 * @param {Response} res
 */
router.get("/", (req: Request, res: Response) => res.send("Welcome to Express"));

export const mainRoute: Router = router;