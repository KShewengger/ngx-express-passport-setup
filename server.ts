"use strict";

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as favicon from "serve-favicon";
import * as passport from "passport";

import * as strategy from "./config/passport";
import { sequelize } from "./models/-index";

export const Passport = passport;

const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv").config();

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
    this.initializeStrategies();
    this.routes();
    this.catchErrors();
    this.checkDbConnection();
  }
  
  /**
   * Middlewares
   */
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
  
  /**
   * Error Handlers
   */
  private catchErrors(): void {
    this.app.use((req: any, res: any, next: any) => {
      const err: any = new Error("Not Found");
      err.status = 404;

      next(err);
    });

    this.app.use((err: any, req: any, res: any, next: any) => {
      const statusCode = err.status || 500;

      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      res.status(statusCode).send("Server Error");
    });
  }
  
  /**
   * Initialize Passport Strategies
   */
  private initializeStrategies(): void {
    strategy.initializeGoogleStrategy(passport);
  }
  
  /**
   * Authenticate DB Connection
   */
  private checkDbConnection(): void {
    sequelize.authenticate()
      .then(() => console.log("Database connection is set."))
      .catch(err => console.error("Unable to connect to the database", err));
  }
  
  /**
   * Assign API Routes
   */
  private routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/auth", authRoutes);
  }
}