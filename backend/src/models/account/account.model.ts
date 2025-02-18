import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../configs/database.config";


interface AccountAttributes {
    account_id: string;
    username: string;
    password_hash: string;
    email: string;
    first_name?: string;
    last_name?: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

interface AccountCreationAttributes extends Optional<AccountAttributes, 'account_id'> { }

class Account extends Model<AccountAttributes, AccountCreationAttributes> implements AccountAttributes {
    public account_id!: string;
    public username!: string;
    public password_hash!: string;
    public email!: string;
    public first_name!: string | undefined;
    public last_name!: string | undefined;
    public is_active!: boolean;
    public created_at!: Date;
    public updated_at!: Date;
}
Account.init(
    {
        account_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'Account',
        tableName: 'account',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
);

export default Account;