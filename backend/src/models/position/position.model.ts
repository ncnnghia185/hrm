import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Employee } from '../employee/employee.model';

@Table({
    tableName: 'position',
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

    @HasMany(() => Employee)
    employees!: Employee[];
}