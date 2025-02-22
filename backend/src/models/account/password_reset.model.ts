import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Account } from './account.model';

@Table({
    tableName: 'password_reset',
})
export class PasswordReset extends Model<PasswordReset> {
    @Column({
        type: DataType.STRING(255),
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

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    otp!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    expires_at!: Date;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    is_used!: boolean;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    created_at!: Date;

    @BelongsTo(() => Account)
    account!: Account;
}