import React from 'react'
import CreatePositionForm from './createPositionForm'

type Props = {}

const CreatePositionInfo = (props: Props) => {
    return (
        <div className='flex-1 flex flex-col gap-3'>
            <div className="w-full h-auto px-3 flex flex-col mt-3">
                <span className="text-base lg:text-lg font-medium text-color">
                    Tạo mới chức vụ
                </span>
                <span className="text-sm lg:text-base text-[#95a5a6] dark:text-[#ecf0f1]">
                    Thông tin tổng quan của chức vụ trong hệ thống công ty
                </span>
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex flex-col px-3 border border-color shadow-sm py-1 gap-1 rounded-sm bg-[#F9FAFB] dark:bg-[#111827]">
                    <div className="flex-1 mt-2">
                        <CreatePositionForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePositionInfo