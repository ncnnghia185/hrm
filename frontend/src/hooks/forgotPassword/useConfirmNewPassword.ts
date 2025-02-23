import { useState } from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";


// Custom hook xử lý logic đặt lại mật khẩu
export const useConfirmNewPassword = (onSuccess: (data: { password: string }) => void) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const validationSchema = Yup.object().shape({
        password: Yup.string().required("Mật khẩu là bắt buộc").min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
        confirmPassword: Yup.string()
            .required("Xác nhận mật khẩu là bắt buộc")
            .oneOf([Yup.ref("password")], "Mật khẩu không khớp"),
    });

    // Xử lý submit form
    const handleSubmit = async (
        values: { password: string; confirmPassword: string },
        { setSubmitting }: FormikHelpers<{ password: string; confirmPassword: string }>
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập gọi API
        setIsSubmitted(true);
        onSuccess({ password: values.password });
        setSubmitting(false);
    };

    return {
        isSubmitted,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        validationSchema,
        handleSubmit,
    };
};