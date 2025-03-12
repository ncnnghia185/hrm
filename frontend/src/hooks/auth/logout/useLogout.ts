import { AuthServices } from "@/services/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { LogoutAccountResponse } from "@/types/apiResponse/auth";
export const useLogout = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const refreshToken = String(Cookies.get("refreshToken"))
    const handleLogoutAccount = async () => {
        setLoading(true)
        try {
            const response: LogoutAccountResponse = await AuthServices.logoutAccount(refreshToken)
            if (response.success === true && response.errCode === 0) {
                Cookies.remove("accessToken")
                Cookies.remove("refreshToken")
                router.push("/dang-nhap")
                toast.success("Đăng xuất thành công!")
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại")
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        handleLogoutAccount
    }
}