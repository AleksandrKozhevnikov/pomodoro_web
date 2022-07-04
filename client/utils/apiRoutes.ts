const MAIN_API_ROUTE = 'http://localhost:4000'


// users
export const REGISTRATION_API_ROUTE = `${MAIN_API_ROUTE}/auth/registration`
export const LOGIN_API_ROUTE = `${MAIN_API_ROUTE}/auth/login`
export const REGDATA_CHECK_API_ROUTE = `${MAIN_API_ROUTE}/auth/checkRegData`
export const CHECK_TOKEN_VALID_API_ROUTE = `${MAIN_API_ROUTE}/auth/checkToken`
export const USER_BY_ID_API_ROUTE = (id: number) => `${MAIN_API_ROUTE}/users/${id}`
export const CHANGE_USER_VISIBILITY_API_ROUTE = (id: number) => `${MAIN_API_ROUTE}/users/changeVisibility/${id}`