"use client";
import Pagination from "@/components/common/pagination";
import { useGetPermissions } from "@/hooks/permission/useGetPermission";
import React from "react";
import { PropagateLoader, BarLoader } from "react-spinners";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import Link from "next/link";
const ListAllPermission = () => {
  const {
    loading,
    loadingChildPermission,
    mainPermission,
    showChildPermissions,
    childPermissions,
    toggleChildPermission,
    setCurrentPage,
    setPageSize,
  } = useGetPermissions();
  if (loading || !mainPermission) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <PropagateLoader size={13} color="#2ed573" />
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col mt-2">
      <div className="w-full flex-1 flex flex-col gap-3">
        {mainPermission.permissions.map((perm) => (
          <div
            key={perm.id}
            className={`w-full ${
              showChildPermissions[perm.id] ? "h-auto min-h-36 gap-3" : "h-auto"
            } py-2 px-4 border border-color rounded-md flex flex-col`}
          >
            <div
              className={`${
                showChildPermissions[perm.id] ? "h-[40%]" : "h-full"
              } w-full flex`}
            >
              <div className="h-full w-[5%] flex items-start pt-3">
                {showChildPermissions[perm.id] ? (
                  <FaAnglesUp
                    className="text-color text-sm cursor-pointer"
                    onClick={() => toggleChildPermission(perm.id)}
                  />
                ) : (
                  <FaAnglesDown
                    className="text-color text-sm cursor-pointer"
                    onClick={() => toggleChildPermission(perm.id)}
                  />
                )}
              </div>
              <div className="h-full w-[95%] xl:w-[95%] flex flex-col">
                <div className="w-full h-1/2 flex items-center justify-between">
                  <div>
                    <span className="text-sm md:text-base font-semibold text-color">
                      Tên nhóm quyền :{" "}
                    </span>{" "}
                    <span className="text-sm md:text-base text-color">
                      {perm.name}
                    </span>
                  </div>
                  <div className="hidden lg:flex">
                    <span className="text-sm md:text-base font-semibold text-color">
                      Ngày tạo :{" "}
                    </span>{" "}
                    <span className="text-sm md:text-base text-color">
                      {perm.createdAt}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-sm md:text-base font-semibold text-color">
                    Mô tả :{" "}
                  </span>{" "}
                  <span
                    className={`${
                      perm.description ? "text-color" : "italic text-[#bdc3c7]"
                    } text-sm md:text-base`}
                  >
                    {perm.description ? perm.description : "Không có thông tin"}
                  </span>
                </div>
              </div>
            </div>

            {showChildPermissions[perm.id] &&
              childPermissions[perm.id] !== undefined && (
                <div className="w-full flex flex-col px-5 mt-1">
                  <div className="w-full h-[1px] border-t-[1px] border-color"></div>

                  <div className="w-full flex-1 flex flex-col mt-2">
                    {loadingChildPermission ? (
                      <div className="flex justify-center items-center">
                        <BarLoader height={3} width={120} color="#26de81" />
                      </div>
                    ) : childPermissions[perm.id] &&
                      childPermissions[perm.id].length > 0 ? (
                      childPermissions[perm.id].map((child) => (
                        <div
                          key={child.id}
                          className="w-full p-2 px-1 md:px-2 lg:px-4 flex flex-col justify-between"
                        >
                          <span className="text-sm md:text-base font-medium text-color">
                            {child.name}
                          </span>
                          <div className="w-full flex items-center gap-1">
                            <span className="text-sm md:text-base font-medium text-color">
                              Mô tả :
                            </span>
                            <span className="text-sm md:text-base text-color">
                              {child.description}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-[#bdc3c7] p-2 px-1 md:px-2 lg:px-4 italic">
                        Không có thông tin
                      </div>
                    )}
                  </div>
                </div>
              )}
            <div className="w-full flex items-center justify-end gap-2 lg:gap-5 xl:gap-8">
              <Link
                href={`/cau-hinh/danh-sach-quyen-han/cap-nhat-quyen-han/${perm.id}`}
              >
                <FiEdit className="w-5 h-5 text-[#3498db] dark:text-[#74b9ff] font-semibold cursor-pointer" />
              </Link>

              <BsTrash className="w-5 h-5 text-[#e74c3c] dark:text-[#ff7675] font-semibold cursor-pointer" />
            </div>
          </div>
        ))}
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
        />{" "}
      </div>
    </div>
  );
};

export default ListAllPermission;
