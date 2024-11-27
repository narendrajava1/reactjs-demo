import {useDispatch, useSelector, useStore} from "react-redux";
import {fetchPosts} from "./FetchPosts";
import {useEffect, useState} from "react";

export const TestLoader = async () => {
    const dispatch = useDispatch();
    const {posts, loading, error} = useSelector(state => state.posts);
    useEffect(() => {
        dispatch(fetchPosts());// // Dispatch the thunk on component mount
    }, [dispatch])
    return (
        {
            "posts": posts,
            "loading": loading,
            "error": error
        }
    )
}