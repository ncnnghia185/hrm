import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Employee } from '../employee/employee.model';

@Table({
    tableName: 'departments',
    timestamps: true
})
export class Department extends Model<Department> {
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

    @HasMany(() => Employee)
    employees!: Employee[];
}