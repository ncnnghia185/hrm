"use client";
import { useCreateChildPermission } from "@/hooks/permission/useCreateChildPermission";
import { useParams } from "next/navigation";
import React from "react";
import CreateChildPermission from "../childPermissionForm";

const CreateChildrenPermission = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { mainPermissionInfo } = useCreateChildPermission(id ? id : "");
  return (
    <div className="flex-1 flex flex-col w-full h-full gap-1">
      <div className="w-full h-1/4  flex flex-col p-2 gap-1 border border-color rounded-md">
        <div className="w-full h-auto px-2">
          <span className="text-base font-semibold text-color">
            Thông tin nhóm quyền
          </span>
        </div>
        <div>
          <div className="w-full flex gap-1">
            <span className="text-base font-medium text-color">
              Tên nhóm quyền :{" "}
            </span>
            <span className="text-base text-color">
              {mainPermissionInfo && mainPermissionInfo.name}
            </span>
          </div>
          <div className="w-full flex flex-col">
            <span className="text-base font-medium text-color">Mô tả : </span>

            {mainPermissionInfo && mainPermissionInfo.description ? (
              <span className="whitespace-pre-wrap text-color">
                {mainPermissionInfo.description}
              </span>
            ) : (
              <span className="block w-full p-2 text-color">
                Không có thông tin
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2 gap-1 border border-color rounded-md">
        <div className="w-full h-auto px-2">
          <span className="text-base font-semibold text-color">
            Thêm mới phân quyền
          </span>
        </div>
        <CreateChildPermission parent_id={id ? id : ""} />
      </div>
    </div>
  );
};

export default CreateChildrenPermission;
