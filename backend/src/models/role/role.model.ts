import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../configs/database.config";


interface RoleAttributes {
    role_id: number;
    role_name: string;
    description?: string;
    created_at: Date;
}

class Role extends Model<RoleAttributes> implements RoleAttributes {
    public role_id!: number;
    public role_name!: string;
    public description!: string | undefined;
    public created_at!: Date;
}

Role.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'role',
        timestamps: false,
    }
);

export default Role;