import { Database, Strategy } from "../shared/interfaces/-index";
import { googleCredentials } from "./strategy";

const databaseCredentials = require("./database");


class Index {
  
  /**
   * @description Returns Database Configuration
   * @returns {DatabaseConfig}
   */
  public getDbConfig(): Database {
    return databaseCredentials;
  }
  
  
  /**
   * @description Returns Google Credentials
   * @returns {StrategyCredentials}
   */
  public getGoogleCredentials(): Strategy {
    return googleCredentials;
  }
  
}

export const config = new Index();