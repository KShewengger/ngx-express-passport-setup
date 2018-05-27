import { Account } from "../../models/Account";
import { Provider } from "../../models/Provider";

import { ProviderField } from "../-index";


/**
 * @description Get Provider Id (Google, Twitter, LinkedIn, Local)
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
 * @description Creates new user.
 *
 * @param user
 * @param done
 * @returns {Promise<any>}
 */
export async function createUser(user: any, type: number, done: Function): Promise<any> {
  const newAccount = await ProviderField.googleUserFields(user);
  
  return await Account
  .create(newAccount)
  .then(account => done(null, account))
  .catch(err => console.error(err));
}


