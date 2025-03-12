import { AuthServices } from "@/services/auth";
import { LoginAccountResponse } from "@/types/apiResponse/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useLogin = (refreshTokenId: string) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [accountData, setAccountData] = useState<{ id: string; email: string; role: string[] } | null>(null);
    const router = useRouter()
    // Schema validation 
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
    const handleSubmit = async (
        values: { email: string; password: string }
    ) => {
        setLoading(true);
        try {
            const loginData = {
                ...values,
                refreshTokenId: refreshTokenId
            }
            const response: LoginAccountResponse = await AuthServices.loginAccount(loginData)
            if (!response.success) {
                toast.error(response.message)
                return
            }
            if (response.success === true) {
                const { accessToken, refreshToken, userData } = response.data
                Cookies.set("accessToken", accessToken, {
                    expires: 1 / 24,
                    sameSite: "Strict",
                });
                Cookies.set("refreshToken", refreshToken, {
                    expires: 2,
                    sameSite: "Strict",
                });
                localStorage.setItem("accountData", JSON.stringify(userData));
                toast.success("Đăng nhập thành công")
                router.push("/trang-chu")
            }
        } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserData = localStorage.getItem("accountData");
            if (storedUserData) {
                setAccountData(JSON.parse(storedUserData));
            }
        }
    }, []);
    return {
        showPassword,
        togglePassword,
        LoginSchema,
        handleSubmit,
        loading,
        accountData
    };
};
