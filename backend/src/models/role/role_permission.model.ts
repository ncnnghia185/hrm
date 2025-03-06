import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import { Role } from './role.model';
import { Permission } from '../permission/permission.model';

@Table({
    tableName: 'role_permission',
    timestamps: true
})
export class RolePermission extends Model<RolePermission> {

    @ForeignKey(() => Role)
    @PrimaryKey
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    role_id!: string;

    @ForeignKey(() => Permission)
    @PrimaryKey
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