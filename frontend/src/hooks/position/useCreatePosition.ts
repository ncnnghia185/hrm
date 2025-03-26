import { createPosition } from "@/services/position";
import { CreatePositionResponse } from "@/types/apiResponse/position";
import { CreatePositionData } from "@/types/fetchAPI/position";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { ItemSelectType } from "@/types/common/select";
export const useCreatePosition = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [isOpenSelection, setIsOpenSelection] = useState<boolean>(false);
    const [selectedDepartment, setSelectedDepartment] = useState<ItemSelectType[]>([])
    const handleSelectDepartment = (item: ItemSelectType, setFieldValue: (field: string, value: any) => void) => {
        setSelectedDepartment([item]);
        setFieldValue("department_id", item.id)
        setIsOpenSelection(false);
    };
    const clearDepartmentSelection = (setFieldValue: (field: string, value: any) => void) => {
        setSelectedDepartment([]);
        setFieldValue("department_id", "")
    };
    const toggleDropdown = () => setIsOpenSelection(!isOpenSelection)
    const PositionSchema = Yup.object().shape({
        id: Yup.string().required("Mã chức vụ là bắt buộc"),
        name: Yup.string().required("Tên chức vụ là bắt buộc"),
        description: Yup.string(),
        department_id: Yup.string().required("Phòng ban là bắt buộc")
    })
    const handleSubmitPosition = async (values: CreatePositionData) => {
        setLoading(true);
        try {
            const response: CreatePositionResponse = await createPosition(values)
            if (!response.success && response.errCode === 1001) {
                toast.error(response.message)
            } else {
                toast.success("Thêm mới chức vụ thành công");
                router.push("/nhan-vien/quan-ly-chuc-vu")
            }
        } catch (error) {
            toast.error("Thêm mới chức vụ thất bại");
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        PositionSchema,
        handleSubmitPosition,
        selectedDepartment,
        handleSelectDepartment,
        clearDepartmentSelection,
        toggleDropdown,
        isOpenSelection
    }
}