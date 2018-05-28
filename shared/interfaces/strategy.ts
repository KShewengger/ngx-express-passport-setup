export interface CallbackUrl {
  callbackUrl: string;
}

export interface CommonStrategy extends CallbackUrl {
  clientID: string;
  clientSecret: string;
}

export interface TwitterStrategy extends CallbackUrl {
  consumerKey: string;
  consumerSecret: string;
}