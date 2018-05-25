"use strict";

import { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();


/**
 * @api {get} /
 * @description Renders Express Home Page
 *
 * @param {Request} req
 * @param {Response} res
 */
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express");
});


export const indexRoute: Router = router;