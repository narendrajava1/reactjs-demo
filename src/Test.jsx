import {useLoaderData} from "react-router";
import {useEffect, useState} from "react";

export const Test = () => {

    const {posts, loading, error} = useLoaderData();


    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error:: {error}</h2>
    return (
        <div>
            <h2>posts</h2>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}