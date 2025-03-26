"use client"
import React from 'react'
import AllPositionsComponent from './listAllPositions';
import Pagination from '@/components/common/pagination';
import { useGetAllPositions } from '@/hooks/position/useGetAllPositions';
import { PropagateLoader } from 'react-spinners';
import NoDataComponent from '@/components/common/nodata';

const ListAllPositions = () => {
    const { loading, allPositionsInfor, paginations, setCurrentPage, setPageSize } = useGetAllPositions()
    if (loading || !allPositionsInfor || !paginations) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <PropagateLoader size={13} color="#2ed573" />
            </div>
        );
    }

    if (allPositionsInfor.length === 0) { return (<NoDataComponent />) }
    return (
        <div className="w-full h-full flex flex-col mt-2">
            <div className="w-full flex-1 flex flex-col gap-1 items-center">
                <AllPositionsComponent />
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

export default ListAllPositions