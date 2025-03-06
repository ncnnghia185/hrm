import { Table, Column, Model, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { AccountRole } from './account_roles.model';
import { RolePermission } from './role_permission.model';
import { Permission } from '../permission/permission.model';

@Table({
    tableName: 'roles',
    timestamps: true
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
        unique: true
    })
    name!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    description!: string;

    @HasMany(() => AccountRole)
    accountRoles!: AccountRole[];

    @HasMany(() => RolePermission)
    rolePermissions!: RolePermission[];
    @BelongsToMany(() => Permission, () => RolePermission)
    permissions!: Permission[];
}