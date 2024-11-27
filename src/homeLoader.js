// loaders/homeLoader.js
import axios from "axios";

export async function homeLoader() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            if (res.status === 200) {
            console.log(res)
            }
        })

    return response.json();
}
