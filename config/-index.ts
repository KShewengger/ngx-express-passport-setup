import { Database, Strategy } from "../shared/interfaces/-index";
import { databaseCrendentials } from "./database";
import { googleCredentials } from "./strategy";


class Index {
  
  /**
   * @description Returns Database Configuration
   * @returns {DatabaseConfig}
   */
  public getDbConfig(): Database {
    return databaseCrendentials;
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