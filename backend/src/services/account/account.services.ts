import sequelize from "../../configs/database.config";
import { Account } from "../../models/account/account.model";
import { Employee } from "../../models/employee/employee.model";
import { AccountRole } from "../../models/role/account_roles.model";
import { CreateAccountDTO, UpdateAccountDTO } from "../../types/account/account.dto";

const checkExistedAccount = async (id: string, email: string) => {
    return await Account.findOne({
        where: {
            id,
            email
        }
    });
}

const createAccount = async (id: string, email: string, password: string, full_name: string, roleId: string) => {
    console.log("crete account created")
    // const transaction = await sequelize.transaction();
    // try {
    //     // 1. Tạo tài khoản
    //     const account = await Account.create(
    //         { id, 
    //           email,
    //           password },
    //         { transaction } 
    //     );

    //     // 2. Tạo employee cho tài khoản này
    //     const employee = await Employee.build({ id: account.id });
    //     await employee.save();

    //     // 3. Gán role cho tài khoản
    //     await AccountRole.create(
    //         { account_id: id, role_id: roleId },
    //         { transaction }
    //     );

    //     // 4. Commit transaction nếu tất cả thành công
    //     await transaction.commit();

    //     return account;
    // } catch (error) {
    //     // Nếu có lỗi, rollback toàn bộ
    //     await transaction.rollback();
    //     throw error;
    // }
}

const getAllAccounts = async () => {
    return await Account.findAll();
}

const getAccountById = async (id: string) => {
    return await Account.findByPk(id);
}

const updateAccount = async (id: string, data: UpdateAccountDTO) => {
    return await Account.update(data, {
        where: {
            id
        }
    });
}

const deleteAccount = async (id: string) => {
    return await Account.destroy({
        where: {
            id
        }
    });
}

export const AccountServices = {
    checkExistedAccount,
    createAccount,
    getAllAccounts,
    getAccountById,
    updateAccount,
    deleteAccount,
}