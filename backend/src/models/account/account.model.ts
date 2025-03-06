import { Table, Column, Model, DataType, HasOne, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Employee } from '../employee/employee.model';
import { AccountRole } from '../role/account_roles.model';
import { Role } from '../role/role.model';
import { PasswordReset } from './password_reset.model';
import { RefreshToken } from './refresh_token.model';
import { FailedLogin } from './failed_login.model';

@Table({
    tableName: 'account',
    timestamps: true
})
export class Account extends Model<Account> {
    @Column({
        type: DataType.STRING(255),
        primaryKey: true,
        allowNull: false,
    })
    id!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    is_locked!: boolean;

    @HasOne(() => Employee)
    employee!: Employee;

    @HasMany(() => PasswordReset)
    passwordResets!: PasswordReset[];

    @HasMany(() => RefreshToken)
    refreshTokens!: RefreshToken[];

    @HasMany(() => FailedLogin)
    failedLogins!: FailedLogin[];

    // 👇 Thêm quan hệ Many-to-Many để lấy `roles` trực tiếp
    @BelongsToMany(() => Role, () => AccountRole)
    roles!: Role[];
}
