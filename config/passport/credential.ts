import { Credential } from "../../shared/interfaces/-index";


/**
 * @description Google Credentials
 * @type {{clientID: string; clientSecret: string; callbackUrl: string}}
 */
export const googleCredentials: Credential.CommonCredential = {
  clientID    : process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackUrl : process.env.GOOGLE_CALLBACK_URL
};


/**
 * @description Twitter Credentials
 * @type {{consumerKey: string; consumerSecret: string; callbackUrl: string}}
 */
export const twitterCredentials: Credential.TwitterCredential = {
  consumerKey    : process.env.TWITTER_CONSUMER_KEY,
  consumerSecret : process.env.TWITTER_CONSUMER_SECRET,
  callbackUrl    : process.env.TWITTER_CALLBACK_URL
};


/**
 * @description Facebook Credentials
 * @type {{clientID: string; clientSecret: string; callbackUrl: string; profileUrl: string; profileFields: string}}
 */
export const facebookCredentials: Credential.FacebookCredential = {
  clientID      : process.env.FACEBOOK_CLIENT_ID,
  clientSecret  : process.env.FACEBOOK_CLIENT_SECRET,
  callbackUrl   : process.env.FACEBOOK_CALLBACK_URL,
  profileFields : ["id", "first_name", "last_name", "gender", "email"]
};