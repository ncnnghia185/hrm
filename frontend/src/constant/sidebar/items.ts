import { SidebarItemType } from "@/types/common/sidebar";
import {
    MdDashboard, MdPeople, MdWork, MdAccessTime, MdMoney, MdOutlineAssignment,
    MdSchool, MdFolder, MdSettings, MdHelp
} from "react-icons/md";
import { FaRegCalendarCheck, FaRegChartBar, FaUsersCog } from "react-icons/fa";

const sidebarItems: SidebarItemType[] = [
    {
        name: "Dashboard",
        icon: MdDashboard
    },
    {
        name: "Nhân sự",
        icon: MdPeople,
        children: [
            { name: "Danh sách nhân viên" },
            { name: "Hồ sơ cá nhân" },
            { name: "Phòng ban & chức vụ" },
            { name: "Hợp đồng lao động" },
            { name: "Lương & phúc lợi" }
        ]
    },
    {
        name: "Tuyển dụng",
        icon: MdWork,
        children: [
            { name: "Vị trí tuyển dụng" },
            { name: "Ứng viên đã ứng tuyển" },
            { name: "Trạng thái phỏng vấn" },
            { name: "Đánh giá ứng viên" }
        ]
    },
    {
        name: "Chấm công",
        icon: MdAccessTime,
        children: [
            { name: "Bảng chấm công" },
            { name: "Lịch sử làm thêm giờ (OT)" },
            { name: "Xin nghỉ phép" },
            { name: "Lịch làm việc" },
            { name: "Lịch nghỉ & ngày lễ", icon: FaRegCalendarCheck }
        ]
    },
    {
        name: "Lương & Phúc lợi",
        icon: MdMoney,
        children: [
            { name: "Bảng lương tháng" },
            { name: "Thưởng, phụ cấp" },
            { name: "Truy vấn & điều chỉnh lương" },
            { name: "Bảo hiểm & Phúc lợi" }
        ]
    },
    {
        name: "Đánh giá & Hiệu suất",
        icon: FaRegChartBar,
        children: [
            { name: "Đánh giá định kỳ" },
            { name: "KPI & OKR" },
            { name: "Phản hồi từ quản lý" }
        ]
    },
    {
        name: "Đào tạo & Phát triển",
        icon: MdSchool,
        children: [
            { name: "Khóa học nội bộ" },
            { name: "Chứng chỉ & chứng nhận" },
            { name: "Lộ trình phát triển nhân sự" }
        ]
    },
    {
        name: "Tài liệu & Biểu mẫu",
        icon: MdFolder,
        children: [
            { name: "Chính sách công ty" },
            { name: "Quy trình nội bộ" },
            { name: "Mẫu đơn từ" }
        ]
    },
    {
        name: "Cấu hình & Cài đặt",
        icon: MdSettings,
        children: [
            { name: "Quản lý tài khoản & quyền hạn" },
            { name: "Cấu hình công ty" },
            { name: "Thông báo & email" }
        ]
    },
    {
        name: "Hỗ trợ & Liên hệ",
        icon: MdHelp,
        children: [
            { name: "Hướng dẫn sử dụng" },
            { name: "Liên hệ bộ phận hỗ trợ" }
        ]
    }
];

export default sidebarItems;