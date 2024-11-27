import {apiClient} from "./apiClient";

export const AxiosTestLoader = async () => {
    await apiClient.get("/data").then(res=>res.data)
        .catch(error=> error);
}