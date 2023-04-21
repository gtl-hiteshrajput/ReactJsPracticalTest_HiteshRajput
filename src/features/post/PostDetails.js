import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Divider, Grid, Modal } from '@mui/material';

import { requestStatus } from '../../constant';
import { getPost, selectPost } from './postSlice';
import { setLoaderComponent } from '../../utils/handler';
import FButton from '../../components/FButton';
import FTypography from '../../components/FTypography';
import FCardDetail from '../../components/FCard/FCardDetail';
import ErrorPage from '../../components/ErrorPage';

const { success } = requestStatus;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PostDetails = () => {
    const { id = null } = useParams();

    const dispatch = useDispatch();
    const { posts: post = {}, status, getPostError } = useSelector(selectPost);

    const navigation = useNavigate();

    const [Loader, setLoader] = useState(null);
    const [modelOpen, setModelOpen] = useState(false);


    useEffect(() => {
        if (id) dispatch(getPost(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { firstName, lastName, bloodGroup, image, email, phone, username } = post?.user || {};

    useEffect(() => {
        if (status) {
            setLoader(setLoaderComponent(status));
        }
    }, [status]);

    const onProfileClick = () => setModelOpen(true);
    const handleClose = () => setModelOpen(false);

    if (getPostError && Object.keys(getPostError).length > 0) {
        const errorMessage = getPostError?.message;
        return <><ErrorPage error={errorMessage} /></>;
    }

    return (
        <>
            <Grid container
                spacing={2}>

                {Loader !== null && Loader}
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                            {
                                (status === success && post !== null) &&
                                <FCardDetail key={post?.id} post={post} onProfileClick={onProfileClick} />
                            }
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <FButton
                                variant='contained'
                                type='submit'
                                size='large'
                                text='Back to List'
                                sx={{ backgroundColor: '#1976d2' }}
                                onClick={() => navigation('/')} />
                        </Grid>
                    </Grid>
                </Grid>

                <Modal
                    open={modelOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box display="flex"
                            justifyContent="center"
                            alignItems="center">
                            <img src={image} width={200} height={200} alt='' />
                        </Box>
                        FullName: <FTypography typographyProps={{ variant: 'h6', sx: { fontWeight: 'bold' } }} body={firstName + ' ' + lastName} />
                        BloodGroup: <FTypography typographyProps={{ variant: 'h6', color: "text.secondary" }} body={bloodGroup} />
                        <Divider />
                        Email: <FTypography typographyProps={{ variant: 'h6', color: "text.secondary" }} body={email} />
                        <Divider />
                        UserName: <FTypography typographyProps={{ variant: 'body2', color: "text.secondary" }} body={username} />
                        <Divider />
                        Mobile: <FTypography typographyProps={{ variant: 'body2', color: "text.secondary" }} body={phone} />
                        <Divider />
                        <FButton
                            variant='contained'
                            type='submit'
                            sx={{ float: 'right', marginTop: '20px' }}
                            size='large'
                            text='Close'
                            onClick={handleClose} />
                    </Box>
                </Modal>
            </Grid>
        </>
    );
};

export default PostDetails;