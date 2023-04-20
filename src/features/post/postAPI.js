import { httpMethods } from '../../constant';
import { setFilterInUrl } from '../../utils/handler';

import apiEndpoints from '../../newrworkCall/apiEndPoints';
import apiController from '../../newrworkCall/apiController';

const { get } = httpMethods;
const { GetPosts, GetUser } = apiEndpoints;

export const getAllPost = async (params = {}) => {

    const postEndPoints = setFilterInUrl(GetPosts, params);

    return new Promise((resolve, reject) => {
        apiController(postEndPoints, null, null, get)
            .then(res => {
                resolve(res?.data || [])
            })
            .catch(err => reject(err));
    });
};

export const getPostById = async (id) => {

    const postEndPoints = `${GetPosts}/${id}`;

    return new Promise((resolve, reject) => {
        apiController(postEndPoints, null, null, get)
            .then(async (res) => {
                console.log('res', res);
                const { data: { userId = null } = {} } = res;
                if (userId) {
                    const userInfo = await getUserById(userId);
                    res.data.user = userInfo;
                }
                resolve(res?.data || [])
            })
            .catch(err => reject(err));
    });
};

export const getUserById = async (id) => {
    const userEndPoints = `${GetUser}/${id}`;

    return new Promise((resolve, reject) => {
        apiController(userEndPoints, null, null, get)
            .then(res => {
                resolve(res?.data || [])
            })
            .catch(err => reject(err));
    });
};