"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useUpdatePermission } from "@/hooks/permission/useUpdatePermission"
import { PropagateLoader } from "react-spinners";
import { CiEdit } from "react-icons/ci";
import UpdateButton from "@/components/common/button/updateButton";
import UpdateMainPermissionForm from "./updateMainPermissionForm";
import UpdateChildPermissionForm from "./updateChildPermissionForm";

const UpdatePermission = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { loading } = useUpdatePermission(id ? id : "")
  if (loading) return (<div className="w-full h-full flex items-center justify-center"><PropagateLoader size={13} color="#2ed573" /></div>)
  return (
    <div className="flex-1 w-full h-full flex flex-col gap-1">
      <div className="w-full flex-1 md:h-1/4 flex flex-col border border-color rounded-md px-2 py-1">
        <div className="flex-1 flex flex-col">
          <div className="w-full h-8 flex items-center">
            <span className="text-sm md:text-base font-medium text-color">Thông tin nhóm quyền</span>
          </div>
          <div className="flex-1">
            <UpdateMainPermissionForm id={id ? id : ""} />
          </div>
        </div>
      </div>
      <div className="flex-[2] flex flex-col border border-color rounded-md px-2 py-1 overflow-y-auto no-scrollbar">
        <div className="w-full h-8 flex items-center mb-2">
          <span className="text-sm md:text-base font-medium text-color">Thông tin phân quyền</span>
        </div>
        <div className="flex-1">
          <UpdateChildPermissionForm id={id ? id : ""} />
        </div>
      </div>
    </div>
  );
};

export default UpdatePermission;
