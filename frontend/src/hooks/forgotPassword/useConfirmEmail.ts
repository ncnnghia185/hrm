import { useState } from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { SendForgotPasswordEmailResponse } from "@/types/apiResponse/auth";
import { AuthServices } from "@/services/auth";

export const useConfirmAccountEmail = (onSuccess: (data: { email: string }) => void) => {
    const [loadingSendEmail, setLoadingSendEmail] = useState<boolean>(false)

    // Schema validation 
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email không đúng định dạng").required("Email là bắt buộc"),
    });

    // Handle submit form
    const handleSendForgotPasswordEmail = async (values: { email: string }) => {
        setLoadingSendEmail(true)
        try {
            const response: SendForgotPasswordEmailResponse = await AuthServices.sendMailForgotPassword(values.email)
            if (response.success === true && response.errCode === 0) {
                onSuccess(values);
                toast.success("Mã xác thực đã được gửi tới email")
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại")
        } finally {
            setLoadingSendEmail(false)
        }
    }
    return { validationSchema, handleSendForgotPasswordEmail, loadingSendEmail };
};




