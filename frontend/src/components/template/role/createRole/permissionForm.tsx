"use client";
import { useCreateRole } from "@/hooks/role/useCreateRole";
import { Field, ErrorMessage } from "formik";
import React from "react";
import { BarLoader } from "react-spinners";

const PermissionForm = () => {
  const {
    loadingPermission,
    permissionTree,
    togglePermission,
    selectedPermissions,
  } = useCreateRole();
  if (loadingPermission) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <BarLoader height={3} width={120} color="#26de81" />
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col">
      {permissionTree.map((category) => (
        <div key={category.id} className="mb-4">
          <div className="font-semibold text-lg border-b pb-1 mb-2">
            {category.name}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {category.children.map((child: { id: string; name: string }) => (
              <label key={child.id} className="flex items-center space-x-2">
                <Field
                  type="checkbox"
                  name="permissions"
                  value={child.id}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">{child.name}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PermissionForm;
