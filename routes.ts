export const routes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  home: '/',
  settings: '/settings',
};

/**
 * An array of routes that are accessible to the public
 * These  routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [routes.home];

/**
 * An array of routes that are use for authentication
 * These  routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [routes.auth.login, routes.auth.register];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

export const DEFAULT_LOGIN_REDIRECT = routes.settings;
export const DEFAULT_REGISTER_REDIRECT = routes.settings;
