import { useState } from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

export const useConfirmAccountEmail = (onSuccess: (data: { email: string }) => void) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    // Schema validation 
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email không đúng định dạng").required("Email là bắt buộc"),
    });

    // Handle submit form
    const handleSubmit = async (
        values: { email: string },
        { setSubmitting }: FormikHelpers<{ email: string }>
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập gọi API
        setIsSubmitted(true);
        onSuccess(values);
        setSubmitting(false);
    };

    return { isSubmitted, validationSchema, handleSubmit };
};




