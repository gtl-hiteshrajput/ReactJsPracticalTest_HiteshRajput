import Posts from '../features/post/Posts';
import MainLayout from '../layouts/MainLayout';
import PostDetails from '../features/post/PostDetails';
import NotFound from '../components/PageNotFound/NotFound';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Posts />
        },
        {
            path: '/post/:id',
            element: <PostDetails />,
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
};

export default MainRoutes;