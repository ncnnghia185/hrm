import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Employee } from '../employee/employee.model';
import { ContractTemplate } from './contract_templates.model';

export enum ContractType {
    PROBATION = 1,   // Thử việc
    SIX_MONTHS = 2,  // Hợp đồng 6 tháng
    ONE_YEAR = 3,    // Hợp đồng 1 năm
    PERMANENT = 4,   // Hợp đồng dài hạn
    FREELANCE = 5,   // Hợp đồng freelance
    INTERNSHIP = 6   // Thực tập
}

/** Trạng thái hợp đồng */
export enum ContractStatus {
    ACTIVE = 1,    // Còn hiệu lực
    EXPIRED = 2,   // Hết hạn
    TERMINATED = 3 // Đã chấm dứt
}

@Table({
    tableName: 'employee_contracts',
    timestamps: true
})
export class EmployeeContract extends Model<EmployeeContract> {
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
        comment: 'Mã nhân viên liên kết với hợp đồng',
    })
    employee_id!: string;

    @ForeignKey(() => ContractTemplate)
    @Column({
        type: DataType.STRING(255),
        allowNull: true,
        comment: 'Mã mẫu hợp đồng (có thể NULL nếu hợp đồng không dựa trên mẫu)',
    })
    contract_template_id!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        comment: 'Ngày bắt đầu hợp đồng',
    })
    start_date!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
        comment: 'Ngày kết thúc hợp đồng (nếu có)',
    })
    end_date!: Date;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        comment: 'Chức danh theo hợp đồng',
    })
    position!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        comment: 'Phòng ban làm việc',
    })
    department!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        comment: 'Địa điểm làm việc',
    })
    work_location!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
        comment: 'Thời gian làm việc theo hợp đồng',
    })
    working_schedule!: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
        comment: 'Mức lương chính thức của nhân viên',
    })
    salary!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
        comment: 'Các khoản phụ cấp của hợp đồng này',
    })
    allowances!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
        comment: 'Đường dẫn file hợp đồng đã ký',
    })
    contract_file_url!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: ContractStatus.ACTIVE,
        comment: 'Trạng thái hợp đồng: 1 = Còn hiệu lực, 2 = Hết hạn, 3 = Đã chấm dứt',
    })
    status!: ContractStatus;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        comment: 'Ngày ký hợp đồng',
    })
    sign_date!: Date;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        comment: 'Người ký hợp đồng (Giám đốc, Trưởng phòng HR, v.v.)',
    })
    signed_by!: string;

    @BelongsTo(() => Employee)
    employee!: Employee;

    @BelongsTo(() => ContractTemplate)
    contractTemplate!: ContractTemplate;
}
