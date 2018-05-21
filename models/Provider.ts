import { Table, Column, Model, ForeignKey, DataType, PrimaryKey, IsUUID } from "sequelize-typescript";
import { Account } from "./Account";

@Table({
  tableName: "provider",
  underscored: true
})
export class Provider extends Model<Provider> {
  
  @IsUUID(4)
  @PrimaryKey
  @ForeignKey(() => Account)
  @Column(DataType.UUID)
  id: string;
  
  @Column(DataType.STRING)
  name: string;
}