export interface CallbackUrl {
  callbackUrl: string;
}

export interface CommonCredential extends CallbackUrl {
  clientID: string;
  clientSecret: string;
}

export interface TwitterCredential extends CallbackUrl {
  consumerKey: string;
  consumerSecret: string;
}

export interface FacebookCredential extends CommonCredential {
  profileFields: string[];
}