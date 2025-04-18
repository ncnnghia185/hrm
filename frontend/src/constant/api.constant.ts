const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL

// AUTHENTICATION API ROUTES
const LOGIN_ACCOUNT = `${BASE_URL}/account/login-account`
const LOGOUT_ACCOUNT = `${BASE_URL}/account/logout-account`
const SEND_EMAIL_FORGOT_PASSWORD = `${BASE_URL}/account//send-reset-password-email`
const CONFIRM_OTP_ROUTE = `${BASE_URL}/account/confirm-otp`
const FORGOT_PASSWORD_ROUTE = `${BASE_URL}/account/forgot-password`
const REFRESHTOKEN_ROUTE = `${BASE_URL}/account/refresh-token`

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
const GET_ALL_ROLES_ROUTE = `${BASE_URL}/roles/all-roles`
const GET_DETAIL_ROLE_ROUTE = (id: string) => `${BASE_URL}/roles/detail-role/${id}`
const UPDATE_ROLE_ROUTE = (id: string) => `${BASE_URL}/roles/update-role/${id}`
const ASSIGN_USER_ROLE_ROUTE = (id: string) => `${BASE_URL}/roles/update-role/${id}`
const REMOVE_PERMISSION_ROLE_ROUTE = (roleId: string, permissionId: string) => `${BASE_URL}/roles/remove-permissions/${roleId}/${permissionId}`

// DEPARTMENT API ROUTES
const CREATE_DEPARTMENT_ROUTE = `${BASE_URL}/departments/create-department`
const GET_ALL_DEPARTMENTS_ROUTE = `${BASE_URL}/departments/all-departments`

// POSITION API ROUTES
const CREATE_POSITION_ROUTE = `${BASE_URL}/positions/create-position`
const GET_ALL_POSITIONS_ROUTE = `${BASE_URL}/positions/all-positions`

// CONTRACT API ROUTES
const CREATE_CONTRACT_ROUTE = `${BASE_URL}/contracts/create-contract`
const GET_ALL_CONTRACTS_ROUTE = `${BASE_URL}/contracts/all-contracts`
const GET_DETAIL_CONTRACT_ROUTE = (id: string) => `${BASE_URL}/contracts/detail-contract/${id}`
const UPDATE_CONTRACT_ROUTE = (id: string) => `${BASE_URL}/contracts/update-contract/${id}`
const UPDATE_CONTRACT_STATUS_ROUTE = (id: string) => `${BASE_URL}/contracts/update-contract-status/${id}`
const DELETE_CONTRACT_ROUTE = (id: string) => `${BASE_URL}/contracts/delete-contract/${id}`
const GET_CONTRACT_BY_EMPLOYEE_ROUTE = (employeeId: string) => `${BASE_URL}/contracts/contract-of-employee/${employeeId}`
export const ROUTES = {
    // base url
    BASE_URL,
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
    // account routes
    LOGIN_ACCOUNT,
    LOGOUT_ACCOUNT,
    SEND_EMAIL_FORGOT_PASSWORD,
    CONFIRM_OTP_ROUTE,
    FORGOT_PASSWORD_ROUTE,
    REFRESHTOKEN_ROUTE,
    // role routes
    CREATE_ROLE_ROUTE,
    GET_ALL_ROLES_ROUTE,
    GET_DETAIL_ROLE_ROUTE,
    UPDATE_ROLE_ROUTE,
    ASSIGN_USER_ROLE_ROUTE,
    REMOVE_PERMISSION_ROLE_ROUTE,
    // department routes
    CREATE_DEPARTMENT_ROUTE,
    GET_ALL_DEPARTMENTS_ROUTE,
    // position routes
    CREATE_POSITION_ROUTE,
    GET_ALL_POSITIONS_ROUTE,
    // contract routes
    CREATE_CONTRACT_ROUTE,
    GET_ALL_CONTRACTS_ROUTE,
    GET_DETAIL_CONTRACT_ROUTE,
    UPDATE_CONTRACT_ROUTE,
    UPDATE_CONTRACT_STATUS_ROUTE,
    DELETE_CONTRACT_ROUTE,
    GET_CONTRACT_BY_EMPLOYEE_ROUTE,
}