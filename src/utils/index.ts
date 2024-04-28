import routesConfig from "../config/routes.config";

export const createURL = (route: string, params: { [key: string]: string }): string => {
    if (!route || Object.keys(params).length === 0) {
        console.error('Route or params not provided. Redirecting to home');
        return routesConfig.home;
    }
    let updatedURL = route;
    Object.entries(params).forEach(([key, value]) => {
        updatedURL = updatedURL.replace(`:${key}`, String(value));
    });
    return updatedURL;
};
