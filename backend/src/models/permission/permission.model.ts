import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { RolePermission } from '../role/role_permission.model';

@Table({
    tableName: 'permissions',
    timestamps: true
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
        unique: true
    })
    name!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    description!: string;

    @ForeignKey(() => Permission)
    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    parent_id!: string | null
    @BelongsTo(() => Permission, { foreignKey: 'parent_id', as: 'parent' })
    parent!: Permission;

    @HasMany(() => Permission, { foreignKey: 'parent_id', as: 'children' })
    children!: Permission[];

    @HasMany(() => RolePermission)
    rolePermissions!: RolePermission[];
}