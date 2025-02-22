import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { Account } from '../account/account.model';
import { Department } from '../department/department.model';
import { Position } from '../position/position.model';
import { Contract } from '../contract/contract.model';

@Table({
    tableName: 'employee',
})
export class Employee extends Model<Employee> {
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
    full_name!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    email!: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    date_of_birth!: Date;

    @Column({
        type: DataType.STRING(50),
        allowNull: true,
    })
    gender!: string;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    created_at!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    updated_at!: Date;

    @ForeignKey(() => Account)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    account_id!: string;

    @ForeignKey(() => Department)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    department_id!: string;

    @ForeignKey(() => Position)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    position_id!: string;

    @BelongsTo(() => Account)
    account!: Account;

    @BelongsTo(() => Department)
    department!: Department;

    @BelongsTo(() => Position)
    position!: Position;

    @HasOne(() => Contract)
    contract!: Contract;
}
