import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestStatus } from '../../constant';
import { getAllPost, getPostById } from './postAPI';

const { idle, success, failed } = requestStatus;

const initialState = {
    posts: [],
    status: idle,
    error: null
};

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (params) => {
        const res = await getAllPost(params);
        return res;
    }
);

export const getPost = createAsyncThunk(
    'posts/getPost',
    async (id) => {
        const res = await getPostById(id);
        return res;
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = idle;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = success;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = failed;
                state.getPostsError = action?.error || {}
            })
            .addCase(getPost.pending, (state, action) => {
                state.status = idle;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.status = success;
                state.posts = action?.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.status = failed;
                state.getPostError = action?.error || {}
            });
    }
});

const { reducer } = postSlice;

export const selectPost = (state) => state.post;

export default reducer;
