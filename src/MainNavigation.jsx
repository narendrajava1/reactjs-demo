import {NavLink} from "react-router-dom";

export const MainNavigation = () => {
    return (
        <>
            <ul>
                <li><NavLink to={"/posts"}>posts</NavLink></li>
                <li>albums</li>
                <li>photos</li>
            </ul>
        </>
    )
}