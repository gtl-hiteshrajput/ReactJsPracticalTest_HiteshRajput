import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Pagination, PaginationItem } from '@mui/material';

import FCard from '../../components/FCard';
import { requestStatus } from '../../constant';
import { getPosts, selectPost } from './postSlice';
import ErrorPage from '../../components/ErrorPage';
import { setLoaderComponent } from '../../utils/handler';

const { success } = requestStatus;

const Posts = () => {
    const dispatch = useDispatch();
    const { posts: postData = {}, status, getPostsError } = useSelector(selectPost);

    const { total, posts = [] } = postData;

    const [perPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [offset, setOffset] = useState(0);
    const [Loader, setLoader] = useState(null);


    useEffect(() => {
        dispatch(getPosts({ skip: offset, limit: perPage }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset]);

    useEffect(() => {
        if (postData && total) {
            setPageCount(Math.ceil(total / perPage));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postData]);

    useEffect(() => {
        if (status) {
            setLoader(setLoaderComponent(status));
        }
    }, [status]);

    const handlePageClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
        setOffset(((page - 1) * perPage));
    };

    if (getPostsError && Object.keys(getPostsError)?.length > 0) {
        const errorMessage = getPostsError?.message;
        return <><ErrorPage error={errorMessage} /></>;
    }

    return (
        <>
            <Grid container
                spacing={2}
                direction="column"
                alignItems="center"
                justify="center">

                {Loader !== null && Loader}

                <Grid item xs={12}>
                    {
                        (status === success && posts?.length > 0) &&
                        posts.map((post) => (
                            <FCard key={post?.id} post={post} />
                        ))
                    }
                    {
                        status === success && posts?.length === 0 && ('No data found')
                    }
                </Grid>
                {status === success && posts?.length > 0 &&
                    <Grid item xs={12}>
                        <Pagination
                            page={currentPage}
                            count={pageCount}
                            onChange={(e, page) => handlePageClick(e, page)}
                            renderItem={(item) => {
                                return (
                                    <PaginationItem
                                        {...item}
                                    />
                                )
                            }}
                        />
                    </Grid>
                }
            </Grid>
        </>
    )
};

export default Posts;
