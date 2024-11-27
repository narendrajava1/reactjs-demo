// Define an async thunk for fetching posts
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json(); // The fetched data is the payload
});