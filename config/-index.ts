import { DatabaseConfig, databaseConfig } from "./database";
import { StrategyCredentials, googleCredentials } from "./strategy-credentials";

class Index {
  
  public getDbConfig(): DatabaseConfig {
    return databaseConfig;
  }
  
  public getGoogleCredentials(): StrategyCredentials {
    return googleCredentials;
  }
  
}

export const config = new Index();