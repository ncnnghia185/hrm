import { Department } from "../../models";
import { Position } from "../../models/position/position.model";
import { CreatePositionDTO } from "../../types/position/position.dto";

const checkPositionByName = async (name: string) => {
    return await Position.findOne({ where: { name } });
}

const createNewPosition = async (data: CreatePositionDTO) => {
    return await Position.create(data);
}

const selectAllPositions = async (page: number, limit: number) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await Position.findAndCountAll({
        attributes: ["id", "name", "description"],
        include: [{
            model: Department,
            attributes: ['id', 'name', 'description']
        }],
        limit: limit,
        offset: offset,
        order: [['createdAt', 'DESC']]
    });
    return {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit),
        data: rows
    };
}

const getDetailPosition = async (id: string) => {
    return await Position.findByPk(id, { attributes: ["id", "name", "description"] });
}

const updatePosition = async (id: string, data: CreatePositionDTO) => {
    return await Position.update(data, { where: { id } });
}

const deletePosition = async (id: string) => {
    return await Position.destroy({ where: { id } });
}

export const PositionServices = {
    checkPositionByName,
    createNewPosition,
    selectAllPositions,
    getDetailPosition,
    updatePosition,
    deletePosition,
}