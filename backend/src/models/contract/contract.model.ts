import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Employee } from '../employee/employee.model';

@Table({
    tableName: 'contract',
})
export class Contract extends Model<Contract> {
    @Column({
        type: DataType.STRING(255),
        primaryKey: true,
        allowNull: false,
    })
    id!: string;

    @ForeignKey(() => Employee)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    employee_id!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    start_date!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    end_date!: Date;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    contract!: string;

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

    @BelongsTo(() => Employee)
    employee!: Employee;
}