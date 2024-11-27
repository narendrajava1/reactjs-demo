import {Await, useLoaderData} from "react-router";
import {Suspense} from "react";

export const Posts = () => {
    const posts = useLoaderData();

    return (

        <Suspense fallback={<p style={{textAlign: "center", color: "red"}}>Loading posts...</p>}>
            <Await resolve={posts}
                   errorElement={<p style={{textAlign: "center", color: "red"}}>Something went wrong </p>}>

                {
                    (loadposts) => loadposts.map(post => (
                        <div key={post.title}>
                            <h3>{post.title}</h3>
                        </div>
                    ))}
            </Await>
        </Suspense>
    )
}