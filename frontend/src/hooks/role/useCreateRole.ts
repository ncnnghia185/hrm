"use client";
import { getPermissionTree } from "@/services/permission";
import { createRole } from "@/services/role";
import { GetPermissionTreeResponse, PermissionNode } from "@/types/apiResponse/permission";
import { CreateRoleResponse } from "@/types/apiResponse/role";
import { CreateRole } from "@/types/fetchAPI/role";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export const useCreateRole = () => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingPermission, setLoadingPermission] = useState<boolean>(false)
    const [permissionTree, setPermissionTree] = useState<PermissionNode[]>([])
    const [selectedPermissions, setSelectedPermissions] = useState<{ [key: string]: boolean }>({});
    useEffect(() => {
        const fetchPermissionTree = async () => {
            setLoadingPermission(true)
            try {
                const response: GetPermissionTreeResponse = await getPermissionTree()
                if (response.success === true && response.errCode === 0) {
                    setPermissionTree(response.data.permissionTree)
                } else {
                    toast.error(response.message)
                }
            } catch (error) {
                toast.error("Đã có lỗi xảy ra. Vui lòng thử lại")
            } finally {
                setLoadingPermission(false)
            }
        }
        fetchPermissionTree()
    }, [])
    // Schema validation cho Role
    const roleInforSchema = Yup.object().shape({
        name: Yup.string().required("Tên vai trò là bắt buộc."),
        description: Yup.string()
    });

    // Schema validation cho Permissions
    const permissionInforSchema = Yup.object().shape({
        permissions: Yup.array().min(1, "Vui lòng chọn ít nhất một quyền"),
    });

    const togglePermission = (id: string) => {
        setSelectedPermissions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Submit create role
    const handleCreateRole = async (values: { formA: CreateRole; formB: { permissions: string[] } }) => {
        const combinedData = {
            roleInfor: values.formA,
            permissions: values.formB.permissions,
        };
        setLoading(true)
        try {
            const response: CreateRoleResponse = await createRole(combinedData)
            if (response.errCode !== 0) {
                toast.error(response.message)
            } else {
                toast.success("Tạo mới vai trò thành công!");
                router.push("/cau-hinh/phan-quyen-tai-khoan")
            }
        } catch (error) {
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại.")
        } finally {
            setLoading(false)
        }
    };

    return {
        roleInforSchema,
        permissionInforSchema,
        loading,
        handleCreateRole,
        loadingPermission,
        permissionTree,
        selectedPermissions,
        togglePermission
    };
};
