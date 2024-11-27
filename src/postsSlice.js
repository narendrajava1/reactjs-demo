// Create a slice
import {fetchPosts} from "./FetchPosts";
import {createSlice} from "@reduxjs/toolkit";

 const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Reducers for synchronous actions (optional)
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload; // Data returned from the thunk
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default postsSlice.reducer;