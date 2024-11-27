// components/Home.jsx
import React, { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

function HomeContent({ data }) {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
}

function Home() {
    const loaderData = useLoaderData();

    return (
        <Suspense fallback={<p>Loading data...</p>}>
            <Await resolve={loaderData}>
                {(data) => <HomeContent data={data} />}
            </Await>
        </Suspense>
    );
}

export default Home;
