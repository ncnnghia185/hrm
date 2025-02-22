import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Account } from './account.model';

@Table({
    tableName: 'refresh_token',
})
export class RefreshToken extends Model<RefreshToken> {
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
    token!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    expires_at!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    created_at!: Date;

    @BelongsTo(() => Account)
    account!: Account;
}