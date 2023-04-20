import axios, { HttpStatusCode } from 'axios';
import { errorCode, httpMethods, messageKeys } from '../constant';

const { ECONNABORTED } = errorCode;
const { axiosSomethingWentWrong, axiosRequestTimeout } = messageKeys;
const { BAD_GATEWAY, NOT_FOUND, INTERNAL_SERVER_ERROR, REQUEST_TIMEOUT } = HttpStatusCode;

const apiController = async (endPoint, body, headers = null, method = httpMethods.post) => {
    const config = {
        method: method.toLowerCase()
    };

    setConfig(config, endPoint, body, headers, method);

    return new Promise((resolve, reject) => {
        axios(config)
            .then(res => resolve(res || null))
            .catch(err => {
                if (err?.response) {
                    if ([BAD_GATEWAY, NOT_FOUND].includes(err.response?.status)) {
                        reject({
                            statusCode: err.response?.status || INTERNAL_SERVER_ERROR,
                            message: axiosSomethingWentWrong
                        });
                    }
                    else if (err.response?.data) {
                        const { statusCode = null, statusMessage = null } = err.response.data;
                        reject({
                            statusCode: statusCode || INTERNAL_SERVER_ERROR,
                            message: statusMessage || axiosSomethingWentWrong
                        });
                    }
                    resolve(err);
                }
                else if (err.code === ECONNABORTED)
                    reject({ statusCode: REQUEST_TIMEOUT, message: axiosRequestTimeout });
                reject({ statusCode: INTERNAL_SERVER_ERROR, message: axiosSomethingWentWrong });
            });
    });
};

const setConfig = (config, endPoint, body, headers, method) => {
    if (endPoint) config.url = endPoint;
    if (headers) config.headers = headers;
    if (body && method.toLowerCase() === httpMethods.get?.toLowerCase()) config.params = body;
    else if (body && method.toLowerCase() === httpMethods.post?.toLowerCase()) config.data = body;
    else config.data = body;
    return config;
};

export default apiController;
