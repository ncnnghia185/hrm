import { Request, Response } from "express";
import { PermissionServices } from "../../services/permission/permission.services";
import { responseHandler } from "../../utils/response_handler";
import { AppError } from "../../utils/custom_error";
import { getCache, setCache } from "../../utils/cache_data";

const CACHE_PREFIX = "permissions";
const CACHE_VERSION_KEY = `${CACHE_PREFIX}:version`;
const TTL = 3600; // 1 hour

// Helper to get current cache version
const getCacheVersion = async (): Promise<number> => {
    return (await getCache(CACHE_VERSION_KEY)) || 0;
};

// Helper to increment cache version on write
const incrementCacheVersion = async (): Promise<void> => {
    const version = await getCacheVersion();
    await setCache(CACHE_VERSION_KEY, version + 1, TTL);
};

// Helper to check if permission exists
const checkPermissionExists = async (id: string) => {
    const version = await getCacheVersion();
    const cacheKey = `${CACHE_PREFIX}:v${version}:id:${id}`;
    const cachedData = await getCache(cacheKey);
    if (cachedData) return cachedData;

    const permission = await PermissionServices.selectPermissionById(id);
    if (permission) await setCache(cacheKey, permission, TTL);
    return permission || null;
};

// Create new parent permission
const createNewParentPermission = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.body;
        if (!id || !name) {
            return responseHandler(res, false, 400, 2, "Thiếu các thông tin bắt buộc", null);
        }
        await PermissionServices.createParentPermission(req.body);
        await incrementCacheVersion();
        responseHandler(res, true, 201, 0, "Tạo mới nhóm quyền thành công", null);
    } catch (error) {
        if (error instanceof AppError) {
            return responseHandler(res, false, error.statusCode, error.errCode, error.message, null);
        }
        responseHandler(res, false, 500, 1, "Lỗi server", null);
    }
};

// Create new child permission
const createNewChildPermission = async (req: Request, res: Response) => {
    try {
        const { parent_id, permissions } = req.body;
        if (!parent_id || !Array.isArray(permissions) || permissions.length === 0) {
            return responseHandler(res, false, 400, 2, "Thiếu dữ liệu bắt buộc", null);
        }
        await PermissionServices.createChildrenPermission(parent_id, permissions);
        await incrementCacheVersion();
        responseHandler(res, true, 201, 0, "Tạo mới quyền hạn thành công", null);
    } catch (error) {
        if (error instanceof AppError) {
            return responseHandler(res, false, error.statusCode, error.errCode, error.message, null);
        }
        responseHandler(res, false, 500, 1, "Lỗi server", null);
    }
};

// Get all permissions
const getAllPermissions = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 3;
        const version = await getCacheVersion();
        const cacheKey = `${CACHE_PREFIX}:v${version}:all_page${page}_limit${limit}`;

        const cachedData = await getCache(cacheKey);
        if (cachedData) {
            return responseHandler(res, true, 200, 0, "Lấy các nhóm quyền thành công", cachedData);
        }

        const { data, total, totalPages } = await PermissionServices.selectAllPermissions(page, limit);
        const responseData = {
            permissions: data,
            pagination: {
                total,
                totalPages,
                currentPage: page,
                pageSize: limit,
            }

        };
        await setCache(cacheKey, responseData, TTL);
        responseHandler(res, true, 200, 0, "Lấy các nhóm quyền thành công", responseData);
    } catch (error) {
        console.error(error);
        responseHandler(res, false, 500, 1, "Lỗi server", null);
    }
};

// Get permission by ID
const getPermissionById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const permission = await checkPermissionExists(id);
        if (!permission) {
            return responseHandler(res, false, 404, 2, "Không tìm thấy quyền này", null);
        }
        responseHandler(res, true, 200, 0, "Lấy thông tin quyền thành công", permission);
    } catch (error) {
        console.error(error);
        responseHandler(res, false, 500, 1, "Lỗi server", null);
    }
};

// Get permission tree
const getPermissionTree = async (req: Request, res: Response) => {
    try {
        const version = await getCacheVersion();
        const cacheKey = `${CACHE_PREFIX}:v${version}:tree`;
        const cachedData = await getCache(cacheKey);
        if (cachedData) {
            return responseHandler(res, true, 200, 0, "Get permission tree", cachedData);
        }

        const permissions = await PermissionServices.selectPermissionTree();
        await setCache(cacheKey, permissions, TTL);
        responseHandler(res, true, 200, 0, "Get permission tree successfully", permissions);
    } catch (error) {
        console.error(error);
        responseHandler(res, false, 500, 1, "Internal server error", null);
    }
};

// Get child permissions
const getChildPermission = async (req: Request, res: Response) => {
    try {
        const { parent_id } = req.params;
        const version = await getCacheVersion();
        const cacheKey = `${CACHE_PREFIX}:v${version}:children:${parent_id}`;
        const cachedData = await getCache(cacheKey);
        if (cachedData) {
            return responseHandler(res, true, 200, 0, "Lấy các quyền thành công", cachedData);
        }

        const permissions = await PermissionServices.selectChildrenPermissions(parent_id);
        await setCache(cacheKey, permissions, TTL);
        responseHandler(res, true, 200, 0, "Lấy các quyền thành công", permissions);
    } catch (error) {
        console.error(error);
        responseHandler(res, false, 500, 1, "Lỗi server", null);
    }
};

// Search permissions
const searchPermission = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const { query } = req.body;
        const version = await getCacheVersion();
        const cacheKey = `${CACHE_PREFIX}:v${version}:search:${query}`;
        const cachedData = await getCache(cacheKey);
        if (cachedData) {
            return responseHandler(res, true, 200, 0, "Tìm thành công", cachedData);
        }

        const permissions = await PermissionServices.searchPermissionsByName(query);
        await setCache(cacheKey, permissions, TTL);
        responseHandler(res, true, 200, 0, "Tìm quyền thành công", permissions);
    } catch (error) {
        console.error(error);
        responseHandler(res, false, 500, 1, "Lỗi server", null);
    }
};

// Update permission
const updatePermission = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const permission = await checkPermissionExists(id);
        if (!permission) {
            return responseHandler(res, false, 404, 2, "Không tìm thấy quyền này", null);
        }
        const { name, description } = req.body;
        if (!name && !description) {
            return responseHandler(res, false, 400, 3, "Không có thông tin cập nhật", null);
        }
        await PermissionServices.updatePermission(id, req.body);
        await incrementCacheVersion();
        responseHandler(res, true, 200, 0, "Cập nhật quyền thành công", null);
    } catch (error) {
        console.error(error);
        responseHandler(res, false, 500, 1, "Lỗi server", null);
    }
};

// Delete permission
const deletePermission = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const permission = await checkPermissionExists(id);
        if (!permission) {
            return responseHandler(res, false, 404, 2, "Không tìm thấy quyền này", null);
        }
        await PermissionServices.deletePermission(id);
        await incrementCacheVersion();
        responseHandler(res, true, 200, 0, "Xóa quyền thành công", null);
    } catch (error) {
        console.error(error);
        responseHandler(res, false, 500, 1, "Lỗi server", null);
    }
};

export const permissionController = {
    createNewParentPermission,
    createNewChildPermission,
    getAllPermissions,
    getPermissionById,
    getPermissionTree,
    getChildPermission,
    searchPermission,
    updatePermission,
    deletePermission,
};