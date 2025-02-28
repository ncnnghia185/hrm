import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Role } from './role.model';
import { Permission } from '../permission/permission.model';

@Table({
    tableName: 'role_permission',
    timestamps: true
})
export class RolePermission extends Model<RolePermission> {
    @Column({
        type: DataType.STRING(255),
        primaryKey: true,
        allowNull: false,
    })
    id!: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    role_id!: string;

    @ForeignKey(() => Permission)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    permission_id!: string;

    @BelongsTo(() => Role)
    role!: Role;

    @BelongsTo(() => Permission)
    permission!: Permission;
}