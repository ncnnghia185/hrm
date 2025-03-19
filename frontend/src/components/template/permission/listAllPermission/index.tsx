"use client";
import Pagination from "@/components/common/pagination";
import { useGetPermissions } from "@/hooks/permission/useGetPermission";
import React from "react";
import { PropagateLoader } from "react-spinners";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { VscDiffAdded } from "react-icons/vsc";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
const ListAllPermission = () => {
  const { loading, mainPermission, setCurrentPage, setPageSize } =
    useGetPermissions();
  if (loading || !mainPermission) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <PropagateLoader size={13} color="#2ed573" />
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col mt-2">
      <div className="w-full flex-1 flex flex-col gap-1">
        <div className="grid grid-cols-2 w-full rounded-t-xl border border-color bg-color">
          <div className="p-3 flex items-center justify-center border-r">
            <span className="text-color font-medium text-sm md:text-base">
              Nhóm quyền
            </span>
          </div>
          <div className="p-3 flex items-center justify-center">
            <span className="text-color font-medium text-sm md:text-base">
              Phân quyền
            </span>
          </div>
        </div>
        <div className="border border-color rounded-b-xl">
          {mainPermission.permissionTree &&
            mainPermission.permissionTree.map((perm) => (
              <div key={perm.id} className="grid grid-cols-2 w-full border-b">
                <div className="p-3 border-r min-h-[60px] flex flex-col justify-center">
                  <p className="text-sm md:text-base font-medium text-color">
                    {perm.name}
                  </p>
                  <p className="text-sm md:text-base text-color">
                    {perm.description || "Không có thông tin"}
                  </p>
                </div>

                <div className="p-3 min-h-[60px] flex flex-col justify-between">
                  {perm.children.length > 0 ? (
                    <div className="flex flex-col">
                      {perm.children.map((child) => (
                        <div key={child.id}>
                          <span className="text-sm lg:text-base text-color font-medium">
                            {child.name}
                          </span>

                          <span className="hidden md:inline text-color lg:text-base text-sm">
                            {" "}
                            - {child.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400 italic">
                      Không có phân quyền
                    </span>
                  )}

                  {/* Button chỉ hiển thị cho quyền cha */}
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <Link
                      href={`/cau-hinh/danh-sach-quyen-han/chi-tiet-quyen-han/${perm.id}`}
                    >
                      <IoEyeOutline className="w-5 h-5 text-color cursor-pointer mt-1" />
                    </Link>
                    <Link
                      href={`/cau-hinh/danh-sach-quyen-han/them-quyen-con/${perm.id}`}
                    >
                      <VscDiffAdded className="w-5 h-5 text-[#27ae60] cursor-pointer mt-1" />
                    </Link>
                    <Link
                      href={`/cau-hinh/danh-sach-quyen-han/cap-nhat-quyen-han/${perm.id}`}
                    >
                      <FiEdit className="w-5 h-5 text-[#3498db] cursor-pointer" />
                    </Link>
                    <BsTrash className="w-5 h-5 text-[#e74c3c] cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full h-16 mt-1 px-5 flex items-center mb-2">
        <Pagination
          selectItemPerPage={[3, 4, 5]}
          totalItems={mainPermission.pagination.total}
          totalPages={mainPermission.pagination.totalPages}
          currentPage={mainPermission.pagination.currentPage}
          pageSize={mainPermission.pagination.pageSize}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
};

export default ListAllPermission;
