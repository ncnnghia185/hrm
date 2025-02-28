import { getAllMainPermissions, getChildPermissions } from "@/services/permission";
import { GetAllMainPermissionResponse, GetChildPermissionsResponse, mainPermissionData, ChildPermissionData } from "@/types/apiResponse/permission";
import { Pagination } from "@/types/common/pagination";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type MainPermissionState = {
    permissions: mainPermissionData[];
    pagination: Pagination;
};

type ChildPermissionState = {
    [key: string]: ChildPermissionData[];
};
export function useGetPermissions() {
    const [loading, setLoading] = useState<boolean>(false)
    const [loadingChildPermission, setLoadingChildPermission] = useState<boolean>(false)
    const [mainPermission, setMainPermission] = useState<MainPermissionState>()
    const [childPermissions, setChildPermissions] = useState<ChildPermissionState>({});
    const [showChildPermissions, setShowChildPermissions] = useState<{ [key: string]: boolean }>({});
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(3);
    // Fetch all main permissions
    useEffect(() => {
        const fetchAllMainPermissions = async () => {
            setLoading(true)
            try {
                const response: GetAllMainPermissionResponse = await getAllMainPermissions(currentPage, pageSize)
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
        fetchAllMainPermissions()

    }, [currentPage, pageSize])

    // Fetch child permission of main permission
    const fetchChildPermissions = async (id: string) => {
        setLoadingChildPermission(true)
        try {
            const response: GetChildPermissionsResponse = await getChildPermissions(id)
            if (!response.success && response.errCode !== 0) {
                toast.error(response.message)
            }
            if (response.success && response.errCode === 0) {
                setChildPermissions(prev => ({
                    ...prev,
                    [id]: response.data.length > 0 ? response.data : []
                }))
            }
        } catch (error) {
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại.")
        } finally {
            setLoadingChildPermission(false)
        }
    }

    const toggleChildPermission = (parentId: string) => {
        setShowChildPermissions(prev => ({
            ...prev,
            [parentId]: !prev[parentId],
        }));

        if (!childPermissions[parentId]) {
            fetchChildPermissions(parentId);
        }
    };

    return {
        loading,
        loadingChildPermission,
        mainPermission,
        childPermissions,
        showChildPermissions,
        toggleChildPermission,
        setCurrentPage,
        setPageSize
    }
} 