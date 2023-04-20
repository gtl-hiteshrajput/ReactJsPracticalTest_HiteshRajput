import Posts from '../features/post/Posts';
import MainLayout from '../layouts/MainLayout';
import PostDetails from '../features/post/PostDetails';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Posts />
        },
        {
            path: '/home',
            element: <Posts />,
        },
        {
            path: '/post/:id',
            element: <PostDetails />,
        }
    ]
};

export default MainRoutes;