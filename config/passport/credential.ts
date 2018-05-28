import { CommonStrategy, TwitterStrategy } from "../../shared/interfaces/-index";


/**
 * @description Google Credentials
 * @type {{clientID: string; clientSecret: string; callbackUrl: string}}
 */
export const googleCredentials: CommonStrategy = {
  clientID    : process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackUrl : process.env.GOOGLE_CALLBACK_URL
};


/**
 * @description Twitter Credentials
 * @type {{consumerKey: string; consumerSecret: string; callbackUrl: string}}
 */
export const twitterCredentials: TwitterStrategy = {
  consumerKey    : process.env.TWITTER_CONSUMER_KEY,
  consumerSecret : process.env.TWITTER_CONSUMER_SECRET,
  callbackUrl    : process.env.TWITTER_CALLBACK_URL
};