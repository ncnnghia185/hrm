import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { Employee } from '../employee/employee.model';
import { EmployeeContract } from './employee_contract.model';

export enum ContractType {
    PROBATION = 1,   // Thử việc
    SIX_MONTHS = 2,  // Hợp đồng 6 tháng
    ONE_YEAR = 3,    // Hợp đồng 1 năm
    PERMANENT = 4,   // Hợp đồng dài hạn
    FREELANCE = 5,   // Hợp đồng freelance
    INTERNSHIP = 6   // Thực tập
}

export enum ContractStatus {
    ACTIVE = 1,    // Còn hiệu lực
    EXPIRED = 2,   // Hết hạn
    TERMINATED = 3 // Đã chấm dứt
}

@Table({
    tableName: 'contract_templates',
    timestamps: true
})
export class ContractTemplate extends Model<ContractTemplate> {
    @Column({
        type: DataType.STRING(255),
        primaryKey: true,
        allowNull: false,
    })
    id!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        comment: 'Tên loại hợp đồng (Ví dụ: Hợp đồng thử việc, Hợp đồng chính thức)',
    })
    contract_type_name!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        comment: 'Thời hạn hợp đồng (tháng), NULL nếu không xác định',
    })
    duration!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
        comment: 'Mô tả chi tiết về loại hợp đồng',
    })
    description!: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: true,
        comment: 'Lương mặc định của hợp đồng (nếu có)',
    })
    default_salary!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
        comment: 'Các khoản phụ cấp mặc định (nếu có)',
    })
    default_allowances!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
        comment: 'Đường dẫn file mẫu hợp đồng',
    })
    contract_file_url!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: ContractStatus.ACTIVE,
        comment: 'Trạng thái mẫu hợp đồng: 1 = Hoạt động, 2 = Không hoạt động',
    })
    status!: ContractStatus;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        comment: 'Số ngày trước khi hết hạn sẽ gửi thông báo',
    })
    notice_period_days!: number;

    @HasMany(() => EmployeeContract)
    employeeContracts!: EmployeeContract[];
}
