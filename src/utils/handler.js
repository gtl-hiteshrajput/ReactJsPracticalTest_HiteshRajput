import FLoader from '../components/FLoader';
import { requestStatus } from '../constant';

const { idle, loading, success } = requestStatus;

export const setFilterInUrl = (url, filters = {}) => {
    const { skip = 0, limit = 5 } = filters;

    return `${url}?limit=${limit}&skip=${skip}`;
};

export const setLoaderComponent = (status) => {
    if ([idle, loading].includes(status)) {
        return <FLoader />;
    }
    else if (status === success) {
        return (<></>);
    }
};