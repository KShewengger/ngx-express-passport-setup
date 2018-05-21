import { Table, Column, Model, DataType, IsEmail, PrimaryKey, IsUUID } from "sequelize-typescript";


@Table({
  tableName: "account",
  underscored: true
})
export class Account extends Model<Account> {

  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @IsUUID(4)
  @Column(DataType.UUID)
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
