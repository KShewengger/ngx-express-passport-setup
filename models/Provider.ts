import { Table, Column, Model, ForeignKey, DataType, PrimaryKey } from "sequelize-typescript";
import { Account } from "./Account";


@Table({
  tableName: "provider",
  underscored: true
})
export class Provider extends Model<Provider> {
  
  @PrimaryKey
  @ForeignKey(() => Account)
  @Column(DataType.INTEGER)
  id: number;
  
  @Column(DataType.STRING)
  name: string;
}