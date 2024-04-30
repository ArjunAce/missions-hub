import routesConfig from "../config/routes.config";

export const createURL = (route: string, params: { [key: string]: string }): string => {
  if (!route || Object.keys(params).length === 0) {
    console.error("Route or params not provided. Redirecting to home");
    return routesConfig.home;
  }
  let updatedURL = route;
  Object.entries(params).forEach(([key, value]) => {
    updatedURL = updatedURL.replace(`:${key}`, String(value));
  });
  return updatedURL;
};

type ParamsValue = string | number | boolean | Params | ParamsValue[];

interface Params {
  [key: string]: ParamsValue;
}

export const encodeParams = (params: Params): string => {
  const encodeValue = (value: ParamsValue, keyPrefix: string = ""): string => {
    if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        return value.map((item, index) => encodeValue(item, `${keyPrefix}[${index}]`)).join("&");
      } else {
        return Object.keys(value)
          .map(key => encodeValue(value[key], `${keyPrefix}[${encodeURIComponent(key)}]`))
          .join("&");
      }
    } else {
      return `${encodeURIComponent(keyPrefix)}=${encodeURIComponent(value.toString())}`;
    }
  };

  return (
    "?" +
    Object.keys(params)
      .map(key => encodeValue(params[key], key))
      .join("&")
  );
};

export const decodeParams = (queryString: string): Params => {
  const decodeValue = (value: string): ParamsValue => {
    try {
      return JSON.parse(value);
    } catch (error) {
      return decodeURIComponent(value);
    }
  };

  const params: Params = {};

  if (!queryString) return params;

  const queryStringWithoutQuestionMark = queryString.startsWith("?") ? queryString.slice(1) : queryString;
  const keyValuePairs = queryStringWithoutQuestionMark.split("&");

  keyValuePairs.forEach(pair => {
    const [key, value] = pair.split("=");
    const decodedKey = decodeURIComponent(key);

    if (decodedKey.includes("[")) {
      const keys = decodedKey.split(/\[|\]/).filter(Boolean);
      let obj = params;
      keys.slice(0, -1).forEach(key => {
        obj = obj[key] = obj[key] || (keys[keys.length - 1] === "" ? [] : {});
      });
      const lastKey = keys[keys.length - 1];
      obj[lastKey] = decodeValue(value);
    } else {
      params[decodedKey] = decodeValue(value);
    }
  });

  return params;
};

export const getURLParams = (queryParams: URLSearchParams) => {
  const urlParams: { [key: string]: any } = {};
  for (const [key, value] of queryParams.entries()) {
    urlParams[key] = value;
  }
  return urlParams;
};
