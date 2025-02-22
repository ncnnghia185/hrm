import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Account } from '../account/account.model';
import { Role } from './role.model';

@Table({
    tableName: 'account_role',
})
export class AccountRole extends Model<AccountRole> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    })
    id!: string;

    @ForeignKey(() => Account)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    account_id!: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    role_id!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    created_at!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    updated_at!: Date;

    @BelongsTo(() => Account)
    account!: Account;

    @BelongsTo(() => Role)
    role!: Role;
}