import * as snakeCase from "snakecase-keys";

import { Account } from "../../models/Account";
import { Provider } from "../../models/Provider";

import { User } from "../../shared/interfaces/user";


/**
 * @description Fetches Provider Id (Google, Twitter, LinkedIn, Local)
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

async function getUserFieldsByProvider(provider: string, user: any): Promise<any> {
  const providerId = await getProviderId(provider);
  const id: string = user.id;
  
  let userFields: User;
  
  
  if (provider === "google") {
    userFields = {
      id,
      providerId,
      firstName : user.name.givenName,
      lastName  : user.name.familyName,
      email     : user.emails[ 0 ].value,
      gender    : user.gender,
    };
  }
  else {
    const names = user.displayName.split(" ");
    const lastName = names.pop();
    const firstName = names.join(" ");
    
    userFields = {
      id,
      firstName,
      lastName,
      providerId,
      email     : "",
      gender    : "",
    };
  }
  
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
  .catch(err => console.error(err));
}


/**
 * @description Finds User: if user already exists, it will create new user. If not, it will return its already registered data.
 *
 * @param {Any} user
 * @param {Function} done
 * @returns {Promise<any>}
 */
export async function findAndCreateUser(user: any, done: Function): Promise<any> {
  return await Account
  .findById(user.id)
  .then(async account => account ? done(null, account) : await createUser(user, done))
  .catch(err => console.error(err));
}

