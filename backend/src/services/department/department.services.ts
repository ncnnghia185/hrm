import { Department } from "../../models/department/department.model";
import { CreateDepartmentDTO } from "../../types/department/department.dto";

const checkDepartmentByName = async (name: string) => {
    return await Department.findOne({ where: { name } });
}

const createNewDepartment = async (data: CreateDepartmentDTO) => {
    return await Department.create(data);
}

const selectAllDepartments = async (page: number, limit: number) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await Department.findAndCountAll({
        attributes: ["id", "name", "description"],
        limit: limit,
        offset: offset,
    });
    return {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit),
        data: rows
    };
}

const getDetailDepartment = async (id: string) => {
    return await Department.findByPk(id, { attributes: ["id", "name", "description"] });
}

const updateDepartment = async (id: string, data: CreateDepartmentDTO) => {
    return await Department.update(data, { where: { id } });
}

const deleteDepartment = async (id: string) => {
    return await Department.destroy({ where: { id } });
}

export const DepartmentServices = {
    checkDepartmentByName,
    createNewDepartment,
    selectAllDepartments,
    getDetailDepartment,
    updateDepartment,
    deleteDepartment,
}