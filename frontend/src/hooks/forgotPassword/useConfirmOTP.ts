import { useState } from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { AuthServices } from "@/services/auth";
import { ConfirmOTPResponse } from "@/types/apiResponse/auth";

export const useConfirmOTP = (email: string, onSuccess: (data: { otp: string }) => void) => {
    const [loadingConfirmOtp, setLoadingConfirmOtp] = useState<boolean>(false);
    // Schema validation 
    const validationSchema = Yup.object().shape({
        otp: Yup.string().required("Mã OTP là bắt buộc"),
    });
    // Handle submit form
    const handleConfirmOtp = async (
        values: { otp: string },
    ) => {
        setLoadingConfirmOtp(true)
        try {
            const response: ConfirmOTPResponse = await AuthServices.confirmOtpForgotPassword(email, values.otp)
            if (response.success === true && response.errCode === 0) {
                onSuccess(values);
                toast.success("Xác thực mã thành công !")
            } else {
                toast.error(response.message)
                return;
            }
        } catch (error) {
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại")
        } finally {
            setLoadingConfirmOtp(false)
        }


    };

    return { loadingConfirmOtp, validationSchema, handleConfirmOtp };
}