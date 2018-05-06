"use strict";

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as favicon from "serve-favicon";


// Api Routes
import { indexRoutes } from "./routes/index";


export class Server {
  public app: express.Application;

  public static bootstrap(): Server {
    return new Server;
  }

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
    this.catchErrors();
  }

  private middlewares(): void {
    // this.app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  private catchErrors(): void {
    // catch 404 and forward to error handler
    this.app.use((req: any, res: any, next: any) => {
      const err: any = new Error("Not Found");
      err.status = 404;

      next(err);
    });

    // error handler
    this.app.use((err: any, req: any, res: any, next: any) => {
      const statusCode = err.status || 500;

      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(statusCode);
      res.send("Server Error", statusCode);
    });
  }

  private routes(): void {
    this.app.use("/", indexRoutes);
  }
}