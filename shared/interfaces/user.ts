export interface User {
  id: string;
  providerId: number;
  firstName: string;
  lastName: string;
  email?: string;
  gender?: string;
}