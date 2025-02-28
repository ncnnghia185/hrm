import { createMainPermission } from "@/services/permission";
import { CreateMainPermissionResponse } from "@/types/apiResponse/permission";
import { CreateMainPermission } from "@/types/fetchAPI/permission";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
export const useCreateMainPermission = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const MainPermissionSchema = Yup.object().shape({
        id: Yup.string().required("Mã quyền là bắt buộc"),
        name: Yup.string().required("Tên quyền là bắt buộc"),
        description: Yup.string(),
    })
    const handleSubmitPermission = async (values: CreateMainPermission) => {
        setLoading(true);
        try {
            // Call API
            const response: CreateMainPermissionResponse = await createMainPermission(values)
            if (!response.success && response.errCode === 1001) {
                toast.error(response.message)
            } else {
                toast.success("Thêm mới quyền chính thành công");
            }
        } catch (error) {
            toast.error("Có lỗi xảy ra khi tạo quyền");
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        MainPermissionSchema,
        handleSubmitPermission
    }
}