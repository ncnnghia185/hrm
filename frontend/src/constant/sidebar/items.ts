import { SidebarItemType } from "@/types/common/sidebar";
import {
    MdDashboard, MdPeople, MdWork, MdAccessTime, MdMoney, MdOutlineAssignment,
    MdSchool, MdFolder, MdSettings, MdHelp
} from "react-icons/md";
import { FaRegCalendarCheck, FaRegChartBar, FaUsersCog } from "react-icons/fa";

const sidebarItems: SidebarItemType[] = [
    {
        name: "Dashboard",
        icon: MdDashboard,
        path: "/trang-chu"
    },
    {
        name: "Nhân sự",
        icon: MdPeople,
        children: [
            { name: "Danh sách nhân viên", path: "/nhan-vien/danh-sach-nhan-vien" },
            { name: "Hồ sơ cá nhân", path: "#" },
            { name: "Quản lý phòng ban", path: "/nhan-vien/quan-ly-phong-ban" },
            { name: "Quản lý chức vụ", path: "/nhan-vien/quan-ly-chuc-vu" },
            { name: "Phân loại hợp đồng", path: "/nhan-vien/quan-ly-loai-hop-dong" },
            { name: "Lương & phúc lợi", path: "#" }
        ]
    },
    {
        name: "Tuyển dụng",
        icon: MdWork,
        children: [
            { name: "Vị trí tuyển dụng", path: "#" },
            { name: "Ứng viên đã ứng tuyển", path: "#" },
            { name: "Trạng thái phỏng vấn", path: "#" },
            { name: "Đánh giá ứng viên", path: "#" }
        ]
    },
    {
        name: "Chấm công",
        icon: MdAccessTime,
        children: [
            { name: "Bảng chấm công", path: "#" },
            { name: "Lịch sử làm thêm giờ (OT)", path: "#" },
            { name: "Xin nghỉ phép", path: "#" },
            { name: "Lịch làm việc", path: "#" },
            { name: "Lịch nghỉ & ngày lễ", icon: FaRegCalendarCheck, path: "#" }
        ]
    },
    {
        name: "Lương & Phúc lợi",
        icon: MdMoney,
        children: [
            { name: "Bảng lương tháng", path: "#" },
            { name: "Thưởng, phụ cấp", path: "#" },
            { name: "Truy vấn & điều chỉnh lương", path: "#" },
            { name: "Bảo hiểm & Phúc lợi", path: "#" }
        ]
    },
    {
        name: "Đánh giá & Hiệu suất",
        icon: FaRegChartBar,
        children: [
            { name: "Đánh giá định kỳ", path: "#" },
            { name: "KPI & OKR", path: "#" },
            { name: "Phản hồi từ quản lý", path: "#" }
        ]
    },
    {
        name: "Đào tạo & Phát triển",
        icon: MdSchool,
        children: [
            { name: "Khóa học nội bộ", path: "#" },
            { name: "Chứng chỉ & chứng nhận", path: "#" },
            { name: "Lộ trình phát triển nhân sự", path: "#" }
        ]
    },
    {
        name: "Tài liệu & Biểu mẫu",
        icon: MdFolder,
        children: [
            { name: "Chính sách công ty", path: "#" },
            { name: "Quy trình nội bộ", path: "#" },
            { name: "Mẫu đơn từ", path: "#" }
        ]
    },
    {
        name: "Cấu hình & Cài đặt",
        icon: MdSettings,
        children: [
            { name: "Danh sách quyền hạn", path: "/cau-hinh/danh-sach-quyen-han" },
            { name: "Quản lý tài khoản & quyền hạn", path: "/cau-hinh/phan-quyen-tai-khoan" },
            { name: "Cấu hình công ty", path: "#" },
            { name: "Thông báo & email", path: "#" }
        ]
    },
    {
        name: "Hỗ trợ & Liên hệ",
        icon: MdHelp,
        children: [
            { name: "Hướng dẫn sử dụng", path: "/ho-tro/huong-dan-su-dung" },
            { name: "Liên hệ bộ phận hỗ trợ", path: "/ho-tro/lien-he-ho-tro" }
        ]
    }
];

export default sidebarItems;