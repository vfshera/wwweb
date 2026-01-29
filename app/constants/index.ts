/**
 * The path to the signin page
 */
export const SIGNIN_PATH = "/signin";

/**
 * The path to the register page
 */
export const SIGNUP_PATH = "/signup";

/**
 * The path to the dashboard page
 */
export const DASHBOARD_PATH = "/dashboard";

/**
 * Where to redirect the user if they are not authenticated
 */
export const UNAUTHENTICATED_REDIRECT = SIGNIN_PATH;

/**
 * Where to redirect the user after they are successfully authenticated
 */
export const AUTHENTICATED_REDIRECT = DASHBOARD_PATH;

/**
 * Where to redirect the user after they sign out
 */
export const SIGNOUT_REDIRECT = "/";

/**
 * The query parameter to store the path to redirect to
 */
export const REDIRECT_PATH_PARAM = "redirectTo";
