import { IconType } from "react-icons";
export interface SidebarItemType {
    name: string;
    icon: IconType;
    children?: {
        name: string;
        icon?: IconType;
    }[]
}