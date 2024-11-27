import {useLoaderData} from "react-router";

export const AxiosTest = () => {
    const data=useLoaderData();
    return (
        <>
            <h3>{data}</h3>
        </>
    )
}