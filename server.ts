"use strict";

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as favicon from "serve-favicon";
import * as passport from "passport";
import { sequelize } from "./models/-index";

// Passport Configuration
import { initializeGoogleStrategy } from "./config/passport";

initializeGoogleStrategy(passport);

export const Passport = passport;
const cors = require("cors");
const session = require("express-session");

require("dotenv").config();

// Api Routes
import { indexRoutes } from "./routes/index";
import { authRoutes } from "./routes/auth/-index";

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
    this.checkDbConnection();
  }

  private middlewares(): void {
    // this.app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

    this.app.use(cors({ credentials: true, origin: true }));

    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "public")));

    this.app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
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
      res.status(statusCode).send("Server Error");
    });
  }

  private checkDbConnection() {
    sequelize.authenticate()
      .then(() => console.log("Database connection is set."))
      .catch(err => console.error("Unable to connect to the database", err));
  }

  private routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/auth", authRoutes);
  }
}