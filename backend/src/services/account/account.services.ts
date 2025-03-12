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

const createAccount = async (id: string, email: string, password: string, employeeId: string) => {

    const transaction = await sequelize.transaction();
    try {
        const account = await Account.create(
            {
                id,
                email,
                password
            } as any,
            { transaction, employeeId }
        );
        await transaction.commit();
        return account;
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
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