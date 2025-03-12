import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { Account } from '../account/account.model';
import { Department } from '../department/department.model';
import { Position } from '../position/position.model';
import { Contract } from '../contract/contract.model';

@Table({
    tableName: 'employee',
    timestamps: true
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
        allowNull: true,
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

    @ForeignKey(() => Account)
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    account_id!: string;

    @ForeignKey(() => Department)
    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    department_id!: string;

    @ForeignKey(() => Position)
    @Column({
        type: DataType.STRING(255),
        allowNull: true,
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
