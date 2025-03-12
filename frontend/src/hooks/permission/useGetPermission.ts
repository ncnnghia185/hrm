import { getPermissionTree } from "@/services/permission";
import { GetPermissionTreeResponse, PermissionTreeData } from "@/types/apiResponse/permission";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useGetPermissions() {
    const [loading, setLoading] = useState<boolean>(false)
    const [mainPermission, setMainPermission] = useState<PermissionTreeData | undefined>(undefined)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(3);

    // Fetch all main permissions
    useEffect(() => {
        const fetchAllPermissionsTree = async () => {
            setLoading(true)
            try {
                const response: GetPermissionTreeResponse = await getPermissionTree(currentPage, pageSize)
                if (response.success === true && response.errCode === 0) {
                    setMainPermission(response.data)
                } else {
                    toast.error(response.message)
                }
            } catch (error) {
                toast.error("Đã có lỗi xảy ra. Vui lòng thử lại")
            } finally {
                setLoading(false)
            }
        }
        fetchAllPermissionsTree()

    }, [currentPage, pageSize])

    return {
        loading,
        mainPermission,
        setCurrentPage,
        setPageSize,
    }
} 