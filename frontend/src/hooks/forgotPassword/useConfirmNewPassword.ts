import { useState } from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ForgotPasswordResponse } from "@/types/apiResponse/auth";
import { AuthServices } from "@/services/auth";


// Custom hook xử lý logic đặt lại mật khẩu
export const useConfirmNewPassword = (email: string, otp: string, onSuccess: (data: { password: string }) => void) => {
    const router = useRouter()
    const [loadingForgotPassword, setLoadingForgotPassword] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const validationSchema = Yup.object().shape({
        password: Yup.string().required("Mật khẩu là bắt buộc").min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
        confirmPassword: Yup.string()
            .required("Xác nhận mật khẩu là bắt buộc")
            .oneOf([Yup.ref("password")], "Mật khẩu không khớp"),
    });

    // Xử lý submit form
    const handleForgotPassword = async (
        values: { password: string; }
    ) => {
        setLoadingForgotPassword(true)
        try {
            const response: ForgotPasswordResponse = await AuthServices.forgotPassword(email, otp, values.password)
            if (response.success === true && response.errCode === 0) {
                router.push("/dang-nhap")
                toast.success("Đặt lại mật khẩu thành công!")
            } else {
                toast.error(response.message)
                return;
            }

        } catch (error) {
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại")
        } finally {
            setLoadingForgotPassword(false)
        }

    };

    return {
        loadingForgotPassword,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        validationSchema,
        handleForgotPassword,
    };
};