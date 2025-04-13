"use client"
import SaveButton from "@/components/common/button/saveButton";
import { useCreateContract } from "@/hooks/contract/useCreateContract";
import { formatCurrency, unformatCurrency } from "@/utils/formatCurrency";
import { generateId } from "@/utils/generateUUID";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from 'react'

const CreateContractForm = () => {
    const { loading, ContractSchema, handleSubmitContract } = useCreateContract()
    const [contractId, setContractId] = useState<string>("")
    useEffect(() => {
        setContractId(generateId("MLHĐ"));
    }, [])
    return (
        <Formik
            initialValues={{
                id: contractId,
                contract_type_name: "",
                duration: 0,
                description: "",
                default_salary: 0,
                default_allowances: "",
                contract_file_url: "",
                status: 0,
                notice_period_days: 0
            }}
            validationSchema={ContractSchema}
            onSubmit={handleSubmitContract}
            enableReinitialize={true}
        >
            {({ handleSubmit, setFieldValue }) => (
                <Form className="w-full h-full flex flex-col gap-2 py-1">
                    <div className="flex flex-col">
                        <label className="block text-sm xl:text-base text-color font-medium">
                            Loại hợp đồng<span className="text-red-500">*</span>
                        </label>
                        <Field
                            type="text"
                            name="contract_type_name"
                            placeholder="Nhập loại hợp đồng ..."
                            className="mt-1 px-4 py-2 w-full h-9 xl:w-1/2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic"
                        />
                        <ErrorMessage
                            name="contract_type_name"
                            component="div"
                            className="text-red-500 text-sm"
                        />
                    </div>

                    <div className="w-full flex gap-3 h-[85px] xl:h-16">
                        <div className="w-1/3 flex flex-col gap-1 h-full">
                            <label className="h-9 xl:h-5 text-sm xl:text-base text-color font-medium">
                                Thời hạn hợp đồng (tháng)
                            </label>
                            <Field
                                type="text"
                                name="duration"
                                className="mt-1 px-4 py-2 w-full h-9 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color"
                            />
                        </div>

                        <div className="w-1/3 flex flex-col gap-1 h-full">
                            <label className="h-9 xl:h-5 text-sm xl:text-base text-color font-medium">
                                Lương mặc định (nếu có)
                            </label>
                            <Field name="default_salary">
                                {({ field, form }: any) => (
                                    <input
                                        type="text"
                                        {...field}
                                        value={formatCurrency(field.value)}
                                        onChange={(e) => {
                                            const raw = unformatCurrency(e.target.value);
                                            form.setFieldValue("default_salary", raw);
                                        }}
                                        className="mt-1 px-4 py-2 w-full h-9 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color"
                                    />
                                )}
                            </Field>
                        </div>

                        <div className="w-1/3 flex flex-col gap-1 h-full">
                            <label className="h-9 xl:h-5 text-sm xl:text-base text-color font-medium">
                                Phụ cấp (nếu có)
                            </label>
                            <Field
                                type="text"
                                name="default_allowances"
                                className="mt-1 px-4 py-2 w-full h-9 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color"
                            />
                        </div>

                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="block text-sm xl:text-base text-color font-medium">
                            File mẫu hợp đồng
                        </label>
                        <input
                            type="file"
                            accept=".docx"
                            onChange={(event) => {
                                const file = event.currentTarget.files?.[0];
                                setFieldValue("contract_file", file);
                            }}
                            className="px-4 py-2 w-full h-12 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 bg-color text-[#95a5a6] placeholder:italic"
                        />


                    </div>

                    <div>
                        <label className="block text-sm xl:text-base text-color font-medium">
                            Mô tả hợp đồng
                        </label>
                        <Field
                            as="textarea"
                            name="description"
                            placeholder="Nhập mô tả hợp đồng..."
                            className="mt-1 px-4 py-2 w-full h-20 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic no-scrollbar"
                        />
                    </div>
                    <div className="w-full flex items-center justify-end xl:pr-5">
                        <SaveButton loading={loading} onClick={handleSubmit} />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default CreateContractForm