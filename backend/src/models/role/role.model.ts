import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { AccountRole } from './account_roles.model';
import { RolePermission } from './role_permission.model';

@Table({
    tableName: 'roles',
})
export class Role extends Model<Role> {
    @Column({
        type: DataType.STRING(255),
        primaryKey: true,
        allowNull: false,
    })
    id!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    description!: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
        defaultValue: DataType.NOW,
    })
    created_at!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    updated_at!: Date;

    @HasMany(() => AccountRole)
    accountRoles!: AccountRole[];

    @HasMany(() => RolePermission)
    rolePermissions!: RolePermission[];
}