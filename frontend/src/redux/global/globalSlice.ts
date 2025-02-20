import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CollapseSidebarState {
    isCollapsed: boolean;
}

const initialState: CollapseSidebarState = {
    isCollapsed: true,
};

const collapseSidebarSlice = createSlice({
    name: "collapseSidebar",
    initialState,
    reducers: {
        toggleCollapseSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed;
        },
    },
})

export const { toggleCollapseSidebar } = collapseSidebarSlice.actions;

export default collapseSidebarSlice.reducer;