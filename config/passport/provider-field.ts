import * as snakeCase from "snakecase-keys";

import { getProviderId } from "./common";


/**
 * @description Returns Google User Fields Format
 *
 * @param {Any} user
 * @returns {any}
 */
export async function googleUserFields(user: any): Promise<any> {
  const providerId = await getProviderId(user.provider);
  
  const filterUser = {
    id        : user.id,
    firstName : user.name.givenName,
    lastName  : user.name.familyName,
    email     : user.emails[ 0 ].value,
    gender    : user.gender,
    providerId: providerId
  };
  
  const snakeCaseUser = snakeCase(filterUser);
  
  return snakeCaseUser;
}