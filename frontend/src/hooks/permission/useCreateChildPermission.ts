import { createNewChildPermission } from "@/services/permission";
import { CreateChildPermissionData } from "@/types/fetchAPI/permission";
import { CreateChildPermissionResponse } from "@/types/apiResponse/permission";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useCreateChildPermission = () => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false);
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
        handleSubmitChildPermission
    }
}