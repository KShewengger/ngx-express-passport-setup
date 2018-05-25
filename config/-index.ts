import { DatabaseConfig, databaseConfig } from "./database";
import { StrategyCredentials, googleCredentials } from "./strategy-credentials";


class Index {
  
  /**
   * @description Returns Database Configuration
   * @returns {DatabaseConfig}
   */
  public getDbConfig(): DatabaseConfig {
    return databaseConfig;
  }
  
  
  /**
   * @description Returns Google Credentials
   * @returns {StrategyCredentials}
   */
  public getGoogleCredentials(): StrategyCredentials {
    return googleCredentials;
  }
  
}


export const config = new Index();