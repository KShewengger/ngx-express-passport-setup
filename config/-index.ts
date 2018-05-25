import { DatabaseCredential, databaseCrendentials } from "./database";
import { StrategyCredential, googleCredentials } from "./strategy-credentials";


class Index {
  
  /**
   * @description Returns Database Configuration
   * @returns {DatabaseConfig}
   */
  public getDbConfig(): DatabaseCredential {
    return databaseCrendentials;
  }
  
  
  /**
   * @description Returns Google Credentials
   * @returns {StrategyCredentials}
   */
  public getGoogleCredentials(): StrategyCredential {
    return googleCredentials;
  }
  
}


export const config = new Index();