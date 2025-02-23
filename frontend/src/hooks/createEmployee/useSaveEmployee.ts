"use client"
import { useState } from "react";

export const useSaveEmployee = () => {
    const [personalInfoData, setPersonalInfoData] = useState({})
    const [contractInfoData, setContractInfoData] = useState({});
    const [loading, setLoading] = useState(false);

    const handlePersonalDataChange = (data: any) => {
        setPersonalInfoData(data);
    };

    const handleContractDataChange = (data: any) => {
        setContractInfoData(data);
    };

    const submitEmployeeData = async () => {
        setLoading(true);
        try {
            const payload = {
                ...personalInfoData,
                ...contractInfoData,
            };
            const response = await fetch("/api/employees", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error("Lỗi khi gửi dữ liệu");
            console.log("Tạo nhân viên thành công!");
        } catch (error) {
            console.error("Lỗi:", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        handlePersonalDataChange,
        handleContractDataChange,
        submitEmployeeData,
        loading,
    };
}