"use client";
import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "@/components/common/select";
import useSelect from "@/hooks/shared/useSelectItem";
const positionMockData = [
  { id: "1", name: "Nhân viên" },
  { id: "2", name: "Trưởng phòng" },
  { id: "3", name: "Giám đốc" },
];

const departmentMockData = [
  { id: "1", name: "Nhân sự" },
  { id: "2", name: "Kỹ thuật" },
  { id: "3", name: "Kinh doanh" },
];

const roleMockData = [
  { id: "1", name: "Nhân viên" },
  { id: "2", name: "HR" },
  { id: "3", name: "Trưởng phòng" },
];

const validationSchema = Yup.object({
  position: Yup.object().required("Vui lòng chọn chức vụ"),
  department: Yup.object().required("Vui lòng chọn phòng ban"),
  role: Yup.object().required("Vui lòng chọn vai trò"),
});

const PositionInfoForm = () => {
  return (
    <Formik
      initialValues={{
        position: null,
        department: null,
        role: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Dữ liệu gửi đi:", values);
      }}
    >
      {({ setFieldValue, values }) => {
        const positionSelect = useSelect(false);
        const departmentSelect = useSelect(false);
        const roleSelect = useSelect(false);

        return (
          <Form className="px-3 rounded-md w-full flex items-center justify-between">
            <div
              className="flex flex-col w-1/3"
              ref={positionSelect.dropdownRef}
            >
              <Select
                label={
                  <span className="text-color">
                    Chọn chức vụ <span className="text-red-500">*</span>
                  </span>
                }
                items={positionMockData}
                selectedItems={values.position ? [values.position] : []}
                isOpen={positionSelect.isOpen}
                toggleDropdown={positionSelect.toggleDropdown}
                selectItem={(item) => {
                  setFieldValue("position", item);
                  positionSelect.toggleDropdown();
                }}
                clearSelection={() => setFieldValue("position", null)}
                multiple={false}
              />
              <ErrorMessage
                name="position"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div
              className="flex flex-col w-1/3 ml-3"
              ref={departmentSelect.dropdownRef}
            >
              <Select
                label={
                  <span className="text-color">
                    Chọn phòng ban <span className="text-red-500">*</span>
                  </span>
                }
                items={departmentMockData}
                selectedItems={values.department ? [values.department] : []}
                isOpen={departmentSelect.isOpen}
                toggleDropdown={departmentSelect.toggleDropdown}
                selectItem={(item) => {
                  setFieldValue("department", item);
                  departmentSelect.toggleDropdown();
                }}
                clearSelection={() => setFieldValue("department", null)}
                multiple={false}
              />
              <ErrorMessage
                name="department"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div
              className="flex flex-col w-1/3 ml-3"
              ref={roleSelect.dropdownRef}
            >
              <Select
                label={
                  <span className="text-color">
                    Chọn vai trò <span className="text-red-500">*</span>
                  </span>
                }
                items={roleMockData}
                selectedItems={values.role ? [values.role] : []}
                isOpen={roleSelect.isOpen}
                toggleDropdown={roleSelect.toggleDropdown}
                selectItem={(item) => {
                  setFieldValue("role", item);
                  roleSelect.toggleDropdown();
                }}
                clearSelection={() => setFieldValue("role", null)}
                multiple={false}
              />
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PositionInfoForm;
