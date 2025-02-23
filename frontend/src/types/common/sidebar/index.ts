import { IconType } from "react-icons";
export type SidebarItemType = {
    name: string;
    icon: IconType;
    path?: string;
    children?: {
        name: string;
        icon?: IconType;
        path: string
    }[]
}