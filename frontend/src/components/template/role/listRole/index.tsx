"use client"
import Pagination from '@/components/common/pagination'
import { useGetAllRoles } from '@/hooks/role/useGetAllRoles'
import React from 'react'
import { PropagateLoader } from 'react-spinners'
import TableAllRoles from './tableRoles'

const ListAllRoles = () => {
    const { loading, allRolesInfor, paginations, setCurrentPage, setPageSize } = useGetAllRoles()
    if (loading || !allRolesInfor || !paginations) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <PropagateLoader size={13} color="#2ed573" />
            </div>
        );
    }
    return (
        <div className='w-full h-full flex flex-col mt-2'>
            <div className="w-full h-full flex-1 flex flex-col gap-1">
                <TableAllRoles />
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

export default ListAllRoles