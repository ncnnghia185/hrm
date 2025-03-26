"use client"
import SaveButton from "@/components/common/button/saveButton";
import SelectComponent from "@/components/common/select";
import { useCreateDepartment } from "@/hooks/department/useCreateDepartment";
import { useGetAllDepartments } from "@/hooks/department/useGetAllDepartments";
import { useCreatePosition } from "@/hooks/position/useCreatePosition";
import { generateId } from "@/utils/generateUUID";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from 'react'

const CreatePositionForm = () => {
    const { loading, PositionSchema, handleSubmitPosition, selectedDepartment, handleSelectDepartment, clearDepartmentSelection, toggleDropdown, isOpenSelection } = useCreatePosition()
    const { allDepartmentsInfor } = useGetAllDepartments()
    const [positionId, setPositionId] = useState<string>("")
    useEffect(() => {
        setPositionId(generateId("MCV"));
    }, [])
    return (
        <Formik
            initialValues={{
                id: positionId,
                name: "",
                description: "",
                department_id: ""
            }}
            validationSchema={PositionSchema}
            onSubmit={handleSubmitPosition}
            enableReinitialize={true}
        >
            {({ handleSubmit, setFieldValue }) => (
                <Form className="w-full h-full flex flex-col gap-2 py-1">
                    <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:justify-between">
                        <div>
                            <label className="block text-sm xl:text-base text-color font-medium">
                                Tên chức vụ<span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="text"
                                name="name"
                                className="mt-1 px-4 py-2 w-full h-9 lg:w-72 xl:w-96 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="w-full lg:w-64 xl:w-80">
                            {/* <label className="block text-sm xl:text-base text-color font-medium">
                                Chọn phòng ban<span className="text-red-500">*</span>
                            </label> */}
                            <SelectComponent
                                label={<span>Chọn phòng ban</span>}
                                items={allDepartmentsInfor}
                                selectedItems={selectedDepartment}
                                toggleDropdown={toggleDropdown}
                                isOpen={isOpenSelection}
                                selectItem={(item) => handleSelectDepartment(item, setFieldValue)}
                                clearSelection={() => clearDepartmentSelection(setFieldValue)}
                                multiple={false}
                            />
                            <Field
                                type="hidden"
                                name="department_id"
                                value={selectedDepartment[0]?.id || ""}
                            />

                            <ErrorMessage
                                name="department_id"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm xl:text-base text-color font-medium">
                            Mô tả chức vụ
                        </label>
                        <Field
                            as="textarea"
                            name="description"
                            placeholder="Nhập mô tả chức vụ..."
                            className="mt-1 px-4 py-2 w-full h-20 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic no-scrollbar"
                        />
                        <ErrorMessage
                            name="description"
                            component="div"
                            className="text-red-500 text-sm"
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

export default CreatePositionForm