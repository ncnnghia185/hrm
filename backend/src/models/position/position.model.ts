import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Employee } from '../employee/employee.model';
import { Department } from '../department/department.model';

@Table({
    tableName: 'position',
    timestamps: true
})
export class Position extends Model<Position> {
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

    @ForeignKey(() => Department)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    departmentId!: string;

    @BelongsTo(() => Department)
    department!: Department;

    @HasMany(() => Employee)
    employees!: Employee[];
}