import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Account } from './account.model';

@Table({
    tableName: 'failed_login',
})
export class FailedLogin extends Model<FailedLogin> {
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
        type: DataType.INTEGER,
        allowNull: false,
    })
    count_attempts!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    attempted_at!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    created_at!: Date;

    @BelongsTo(() => Account)
    account!: Account;
}