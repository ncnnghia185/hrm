import { useState } from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

export const useLogin = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Schema validation với Yup
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email không đúng định dạng")
            .required("Email là bắt buộc"),
        password: Yup.string().required("Mật khẩu là bắt buộc"),
    });

    // Toggle show/hide password
    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    // Handle submit form
    const handleSubmit = (
        values: { email: string; password: string },
        { setSubmitting }: FormikHelpers<{ email: string; password: string }>
    ) => {
        console.log("Form Data:", values);
        setSubmitting(false);
    };

    return {
        showPassword,
        togglePassword,
        LoginSchema,
        handleSubmit,
    };
};
