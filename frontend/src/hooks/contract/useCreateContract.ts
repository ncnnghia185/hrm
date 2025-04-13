import { createContract } from "@/services/contract";
import { CreateContractResponse } from "@/types/apiResponse/contract";
import { CreateContractData } from "@/types/fetchAPI/contract";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "nextjs-toploader/app";
export const useCreateContract = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const ContractSchema = Yup.object().shape({
        id: Yup.string().required("Mã loại hợp đồng là bắt buộc"),
        contract_type_name: Yup.string().required("Loại hợp đồng là bắt buộc"),
        duration: Yup.number(),
        description: Yup.string().trim(),
        default_salary: Yup.string().trim(),
        default_allowances: Yup.string().trim(),
        contract_file_url: Yup.string().trim(),
        status: Yup.number(),
        notice_period_days: Yup.number(),
    })
    const handleSubmitContract = async (values: CreateContractData) => {
        setLoading(true);
        try {
            const response: CreateContractResponse = await createContract(values)
            if (!response.success && response.errCode === 1001) {
                toast.error(response.message)
            } else {
                toast.success("Thêm mới loại hợp đồng thành công");
                router.push("/nhan-vien/quan-ly-loai-hop-dong")
            }
        } catch (error) {
            toast.error("Thêm mới loại hợp đồng thất bại");
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        ContractSchema,
        handleSubmitContract,
    }
}