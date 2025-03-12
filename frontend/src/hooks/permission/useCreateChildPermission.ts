import { createNewChildPermission, getMainPermissionInfo } from "@/services/permission";
import { CreateChildPermissionData } from "@/types/fetchAPI/permission";
import { CreateChildPermissionResponse, GetMainPermissionInfoResponse, PermissionInfo } from "@/types/apiResponse/permission";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useCreateChildPermission = (permission_id: string) => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false);
    const [mainPermissionInfo, setMainPermissionInfo] = useState<PermissionInfo>()
    useEffect(() => {
        const fetchDetailsParentPermission = async () => {
            const response: GetMainPermissionInfoResponse = await getMainPermissionInfo(permission_id)
            if (response.success !== true) {
                toast.error("Lấy thông tin nhóm quyền thất bại")
            } else {
                setMainPermissionInfo(response.data.mainPermission)
            }
        }
        if (permission_id !== "") {
            fetchDetailsParentPermission()
        }
    }, [permission_id])
    const ChildPermissionSchema = Yup.object().shape({
        parent_id: Yup.string().required("Mã quyền cha là bắt buộc"),
        permissions: Yup.array().of(Yup.object().shape({
            id: Yup.string().required("Mã quyền là bắt buộc"),
            name: Yup.string().required("Tên quyền là bắt buộc"),
            description: Yup.string(),
        }))
    })

    const handleSubmitChildPermission = async (values: { parent_id: string, permissions: CreateChildPermissionData[] }) => {
        setLoading(true);
        try {
            // Call API
            const response: CreateChildPermissionResponse = await createNewChildPermission(values.parent_id, values.permissions)
            if (response.success === false && response.errCode !== 0) {
                toast.error(response.message)
            } else {
                toast.success("Thêm mới quyền thành công!");
                router.push("/cau-hinh/danh-sach-quyen-han")
            }
        } catch (error) {
            toast.error("Có lỗi xảy ra khi tạo quyền");
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        ChildPermissionSchema,
        handleSubmitChildPermission,
        mainPermissionInfo
    }
}