import axios from "axios";
// import {defer} from "react-router";

// export const PostLoader =  async () => {
 export const postPromise = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts", {
            timeout: 5000, headers: {
                "Content-Type": "application/json"
            }
        }
    ).then(res => {
            console.log(res);
            // setTimeout(()=>{
            return res.data;

            // },4000)

        }
    ).catch(error=>{throw new Error(error);})
}
// return defer({
//     posts: postPromise
// })
// }