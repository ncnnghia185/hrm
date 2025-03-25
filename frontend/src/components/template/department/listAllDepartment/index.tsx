"use client"
import Pagination from '@/components/common/pagination'
import React from 'react'
import AllDepartmentsComponent from './listAllDepartment'
import { useGetAllDepartments } from '@/hooks/department/useGetAllDepartments'
import { PropagateLoader } from 'react-spinners'

const ListAllDepartments = () => {
    const { loading, allDepartmentsInfor, paginations, setCurrentPage, setPageSize } = useGetAllDepartments()
    if (loading || !allDepartmentsInfor || !paginations) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <PropagateLoader size={13} color="#2ed573" />
            </div>
        );
    }
    return (
        <div className="w-full h-full flex flex-col mt-2">
            <div className="w-full flex-1 flex flex-col gap-1">
                <AllDepartmentsComponent />
            </div>
            <div className="w-full h-16 mt-1 px-5 flex items-center mb-2">
                <Pagination
                    selectItemPerPage={[10, 20, 50]}
                    totalItems={paginations.total}
                    totalPages={paginations.totalPages}
                    currentPage={paginations.currentPage}
                    pageSize={paginations.pageSize}
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
    )
}

export default ListAllDepartments