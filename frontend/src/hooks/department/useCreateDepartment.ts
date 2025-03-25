import { createDepartment } from "@/services/department";
import { CreateDepartmentResponse } from "@/types/apiResponse/department";
import { CreateDepartmentData } from "@/types/fetchAPI/department";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
export const useCreateDepartment = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const DepartmentSchema = Yup.object().shape({
        id: Yup.string().required("Mã phòng ban là bắt buộc"),
        name: Yup.string().required("Tên phòng ban là bắt buộc"),
        description: Yup.string(),
    })
    const handleSubmitDepartment = async (values: CreateDepartmentData) => {
        setLoading(true);
        try {
            const response: CreateDepartmentResponse = await createDepartment(values)
            if (!response.success && response.errCode === 1001) {
                toast.error(response.message)
            } else {
                toast.success("Thêm mới phòng ban thành công");
                router.push("/nhan-vien/quan-ly-phong-ban")
            }
        } catch (error) {
            toast.error("Có lỗi xảy ra khi tạo quyền");
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        DepartmentSchema,
        handleSubmitDepartment
    }
}