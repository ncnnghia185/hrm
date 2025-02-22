import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { RolePermission } from '../role/role_permission.model';

@Table({
    tableName: 'permissions',
})
export class Permission extends Model<Permission> {
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
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    created_at!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    updated_at!: Date;

    @HasMany(() => RolePermission)
    rolePermissions!: RolePermission[];
}