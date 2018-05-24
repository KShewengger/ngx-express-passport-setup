import { Table, Column, Model, ForeignKey, DataType, IsEmail, PrimaryKey, IsUUID } from "sequelize-typescript";
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
}