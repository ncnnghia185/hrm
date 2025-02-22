import { useState } from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

export const useConfirmOTP = (onSuccess: (data: { otp: string }) => void) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    // Schema validation 
    const validationSchema = Yup.object().shape({
        otp: Yup.string().required("Mã OTP là bắt buộc"),
    });
    // Handle submit form
    const handleSubmit = async (
        values: { otp: string },
        { setSubmitting }: FormikHelpers<{ otp: string }>
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitted(true);
        onSuccess(values);
        setSubmitting(false);
    };

    return { isSubmitted, validationSchema, handleSubmit };
}