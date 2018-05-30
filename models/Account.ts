import { Table, Column, Model, ForeignKey, DataType, IsEmail, Length, PrimaryKey, BeforeCreate } from "sequelize-typescript";
import * as bcrypt from "bcrypt";

import { Provider } from "./Provider";


@Table({
  tableName: "account",
  underscored: true
})
export class Account extends Model<Account> {
  
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;
  
  @ForeignKey(() => Provider)
  @Column(DataType.INTEGER)
  provider_id: string;
  
  
  @Column(DataType.STRING)
  first_name: string;
  
  @Column(DataType.STRING)
  last_name: string;
  
  @IsEmail
  @Column(DataType.STRING)
  email: string;
  
  @Column(DataType.STRING)
  gender: string;
  
  @Length({min: 5})
  @Column(DataType.CHAR(76))
  password: string;
  
  @BeforeCreate
  static encryptPassword(instance: Account) {
    if (instance.password) return bcrypt.hashSync(instance.password, bcrypt.genSaltSync(8));
  }
  
  get isValidPassword(): boolean {
    return bcrypt.compareSync(this.getDataValue("password"), this.password);
  }
  
  set passwordToValidate(password: string) {
    this.setDataValue("password", password);
  }
}