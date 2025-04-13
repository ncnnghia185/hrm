"use client"
import CustomTag from "@/components/common/tag";
import { useGetDetailContract } from "@/hooks/contract/useGetContract";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import { useParams } from "next/navigation";
import React from "react";
import { PropagateLoader } from "react-spinners";

const DetailContract = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const { contractInfor, getContractStatusLabel } = useGetDetailContract(id || "");
    if (!contractInfor) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <PropagateLoader size={13} color="#2ed573" />
            </div>
        )
    }
    return (
        <div className="flex-1 w-full h-full flex flex-col gap-1">
            <div className="w-full flex-1 flex flex-col border border-color rounded-md px-4 py-1">
                <div className="flex-1 flex flex-col">
                    <div className="w-full h-8 flex items-center">
                        <span className="text-sm md:text-base font-medium text-color">
                            Thông tin loại hợp đồng
                        </span>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-1 lg:gap-3 lg:justify-between">
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Loại hợp đồng
                                </label>
                                <div className="mt-1 px-4 py-1 w-full h-9 lg:w-96 xl:flex-1 border border-[#D1D5DB] rounded-md bg-color text-[#2d3436]">
                                    {contractInfor?.contract_type_name}
                                </div>
                            </div>
                            <div className="w-full flex gap-3 h-[85px] xl:h-16">
                                <div className="w-1/3 lg:w-[384px] flex flex-col gap-1 h-full">
                                    <label className="h-9 xl:h-5 text-sm xl:text-base text-color font-medium">
                                        Thời hạn hợp đồng (tháng)
                                    </label>
                                    <div className="mt-1 px-4 py-2 w-full h-9 border border-[#D1D5DB] rounded-md bg-color text-[#2d3436]">
                                        {contractInfor.duration || ""}
                                    </div>
                                </div>

                                <div className="w-1/3 lg:w-[384px] flex flex-col gap-1 h-full">
                                    <label className="h-9 xl:h-5 text-sm xl:text-base text-color font-medium">
                                        Lương mặc định
                                    </label>
                                    <div className="mt-1 px-4 py-2 w-full h-9 border border-[#D1D5DB] rounded-md bg-color text-[#2d3436]">
                                        {formatCurrency(contractInfor.default_salary) + " ₫"}
                                    </div>
                                </div>

                                <div className="w-1/3 lg:w-[384px] flex flex-col gap-1 h-full">
                                    <label className="h-9 xl:h-5 text-sm xl:text-base text-color font-medium">
                                        Phụ cấp
                                    </label>
                                    <div className="mt-1 px-4 py-2 w-full h-9 border border-[#D1D5DB] rounded-md bg-color text-[#2d3436]">
                                        {contractInfor.default_allowances || ""}
                                    </div>
                                </div>

                            </div>
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Ngày tạo
                                </label>
                                <div className="mt-1 px-4 py-1 w-full h-9 lg:w-96 xl:flex-1 border border-[#D1D5DB] rounded-md bg-color text-[#2d3436]">
                                    {formatDate(contractInfor.createdAt)}
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Cập nhật gần nhất
                                </label>
                                <div className="mt-1 px-4 py-1 w-full h-9 lg:w-96 xl:flex-1 border border-[#D1D5DB] rounded-md bg-color text-[#2d3436]">
                                    {formatDate(contractInfor.updatedAt)}
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Mô tả
                                </label>
                                <textarea
                                    value={contractInfor.description}
                                    readOnly
                                    className="mt-1 px-4 py-2 w-full h-20 lg:w-96 xl:flex-1 border border-[#D1D5DB] rounded-md bg-color text-[#2d3436] resize-none"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Trạng thái
                                </label>
                                <div className="mt-1 py-1 w-full h-9 lg:w-96 xl:flex-1 rounded-md bg-color text-[#2d3436]">
                                    <CustomTag text={getContractStatusLabel(contractInfor.status)} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailContract;
