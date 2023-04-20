import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';

const AppRoute = () => {
    return useRoutes([MainRoutes]);
};

export default AppRoute;