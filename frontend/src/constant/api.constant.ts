const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL

// AUTHENTICATION API ROUTES
const LOGIN_ACCOUNT = `${BASE_URL}/account/login-account`
const LOGOUT_ACCOUNT = `${BASE_URL}/account/logout-account`
const SEND_EMAIL_FORGOT_PASSWORD = `${BASE_URL}/account//send-reset-password-email`
const CONFIRM_OTP_ROUTE = `${BASE_URL}/account/confirm-otp`
const FORGOT_PASSWORD_ROUTE = `${BASE_URL}/account/forgot-password`

// PERMISSION API ROUTES
const CREATE_PERMISSION_ROUTE = `${BASE_URL}/permissions/create-permission`
const CREATE_CHILD_PERMISSION_ROUTE = `${BASE_URL}/permissions/create-child-permission`
const GET_MAIN_PERMISSION_ROUTE = `${BASE_URL}/permissions/all-permissions`
const GET_MAIN_PERMISSION_INFO_ROUTE = (id: string) => `${BASE_URL}/permissions/permission-info/${id}`
const GET_PERMISSION_TREE_ROUTE = `${BASE_URL}/permissions/permission-tree`
const GET_CHILD_PERMISSION_ROUTE = (id: string) => `${BASE_URL}/permissions/child-permission/${id}`
const SEARCH_PERMISSION_ROUTE = `${BASE_URL}/permissions/search-permission`
const UPDATE_PERMISSION_ROUTE = (id: string) => `${BASE_URL}/permissions/update-permission/${id}`
const UPDATE_CHILD_PERMISSION_ROUTE = (id: string) => `${BASE_URL}/permissions/update-child-permission/${id}`
const DELETE_PERMISSION_ROUTE = (id: string) => `${BASE_URL}/permissions/delete-permission/${id}`

// ROLE API ROUTES
const CREATE_ROLE_ROUTE = `${BASE_URL}/roles/create-role`
export const ROUTES = {
    // permission routes
    CREATE_PERMISSION_ROUTE,
    CREATE_CHILD_PERMISSION_ROUTE,
    GET_MAIN_PERMISSION_ROUTE,
    GET_PERMISSION_TREE_ROUTE,
    GET_CHILD_PERMISSION_ROUTE,
    SEARCH_PERMISSION_ROUTE,
    UPDATE_PERMISSION_ROUTE,
    UPDATE_CHILD_PERMISSION_ROUTE,
    DELETE_PERMISSION_ROUTE,
    GET_MAIN_PERMISSION_INFO_ROUTE,
    CREATE_ROLE_ROUTE,
    // account rotes
    LOGIN_ACCOUNT,
    LOGOUT_ACCOUNT,
    SEND_EMAIL_FORGOT_PASSWORD,
    CONFIRM_OTP_ROUTE,
    FORGOT_PASSWORD_ROUTE
}