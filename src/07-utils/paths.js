
export const formatUrl = (url, params = {}) => url.replace(/:([a-z_0-9]+)/ig, (_, paramName) => params[paramName]);
