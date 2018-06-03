import * as snakeCase from "snakecase-keys";

import { Account } from "../../models/Account";
import { Provider } from "../../models/Provider";

import { Interface, Enum } from "../../shared/-index";


/**
 * @description Fetches Strategy Id (Google, Twitter, LinkedIn, Local)
 *
 * @param {String} provider
 * @returns {Promise<any>}
 */
export async function getProviderId(provider: string): Promise<any> {
  return await Provider
  .findOne({ where: { name: provider } })
  .then(provider => provider.id)
  .catch(err => console.error(err));
}


/**
 * @description Returns selected user fields from a provider's response.
 *
 * @param {Any} user
 * @returns {any}
 */
export async function filterUserFields(user: any): Promise<any> {
  const userFields = await getUserFieldsByProvider(user.provider, user);
  const transformFields = snakeCase(userFields);
  
  return transformFields;
}


/**
 * @description Get User Fields by the supplied provider e.g Google, Twitter, Facebook
 *
 * @param {string} provider
 * @param user
 * @returns {Promise<any>}
 */
async function getUserFieldsByProvider(provider: string, user: any): Promise<any> {
  const providerId = await getProviderId(provider);
  
  const id: string    = user.id;
  const email: string = user.email;
  
  let firstName: string;
  let lastName: string;
  let gender: string = "";
  
  if (providerId === Enum.Strategy.Twitter){
    const names = user.displayName.split(" ");
    
    lastName  = names.pop();
    firstName = names.join(" ");
  }
  else {
    firstName = user.name.givenName;
    lastName  = user.name.familyName;
    gender    = user.gender;
  }
  
  const userFields: Interface.User = { id, email, firstName, lastName, gender, providerId };
  
  return userFields;
}


/**
 * @description Creates new user.
 *
 * @param user
 * @param done
 * @returns {Promise<any>}
 */
export async function createUser(user: any, done: Function): Promise<any> {
  const newAccount = await filterUserFields(user);
  
  return await Account
  .create(newAccount)
  .then(account => done(null, account))
  .catch(err => done(err));
}


/**
 * @description Finds User: if user already exists, it will create new user. If not, it will return its already registered data.
 *
 * @param {Any} user
 * @param {Function} done
 * @returns {Promise<any>}
 */
export async function findOrCreateUser(user: any, done: Function): Promise<any> {
  user.email = user.emails[0].value;
  
  return await Account
  .findOne({ where: {email: user.email} })
  .then(async account => account ? done(null, account) : await createUser(user, done))
  .catch(err => done(err));
}


/**
 * @description Find User by Email and Password: If account found, return its info. If not, will return an error.
 *
 * @param {string} email
 * @param {string} password
 * @param {Function} done
 * @returns {Promise<void>}
 */
export async function findUserByEmailPassword({email, password}, done: Function): Promise<void> {
  return await Account
  .findOne({ where: { email } })
  .then(account => {
    if (account && account.password) {
      const encryptedPassword = account.password.replace(/\s/g,"");
      const isValidPassword = Account.validateUserPassword(password, encryptedPassword);
      
      if (!isValidPassword) return done(null, false, { message: "invalidPassword" });
    }
    
    return account ? done(null, account) : done(null, false, { message: "invalidUser" });
  })
  .catch(err => done(err));
}

