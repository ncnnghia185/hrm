const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL

// AUTHENTICATION API ROUTES
const LOGIN_ACCOUNT = `${BASE_URL}/account/login-account`

// PERMISSION API ROUTES
const CREATE_PERMISSION_ROUTE = `${BASE_URL}/permissions/create-permission`
const CREATE_CHILD_PERMISSION_ROUTE = `${BASE_URL}/permissions/create-child-permission`
const GET_MAIN_PERMISSION_ROUTE = `${BASE_URL}/permissions/all-permissions`
const GET_PERMISSION_TREE_ROUTE = `${BASE_URL}/permissions/permission-tree`
const GET_CHILD_PERMISSION_ROUTE = (id: string) => `${BASE_URL}/permissions/child-permission/${id}`
const SEARCH_PERMISSION_ROUTE = `${BASE_URL}/permissions/search-permission`
const UPDATE_PERMISSION_ROUTE = (id: string) => `${BASE_URL}/permissions/update-permission/${id}`
const DELETE_PERMISSION_ROUTE = (id: string) => `${BASE_URL}/permissions/delete-permission/${id}`

// ROLE API ROUTES
const CREATE_ROLE_ROUTE = `${BASE_URL}/roles/create-role`
export const ROUTES = {
    LOGIN_ACCOUNT,
    CREATE_PERMISSION_ROUTE,
    CREATE_CHILD_PERMISSION_ROUTE,
    GET_MAIN_PERMISSION_ROUTE,
    GET_PERMISSION_TREE_ROUTE,
    GET_CHILD_PERMISSION_ROUTE,
    SEARCH_PERMISSION_ROUTE,
    UPDATE_PERMISSION_ROUTE,
    DELETE_PERMISSION_ROUTE,
    CREATE_ROLE_ROUTE
}