import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api.example.com",
    headers: {
        "Content-Type": "application/json"
    }
})

// Add a request interceptor
// Use the Axios request interceptor to attach the OAuth2 token to the Authorization header.
apiClient.interceptors.request.use((onRequestConfig) => {
        const token = localStorage.getItem('access_token');// Example: store token in localStorage
        if (token) {
            onRequestConfig.headers["Authorization"] = `Bearer ${token}`
        }
        return onRequestConfig;
    },
    (onRequestError) => {
        return Promise.reject(onRequestError);
    })

// In case the token expires, you can intercept 401 responses to refresh the token.
apiClient.interceptors.response.use((onResFulfilled) => {

        // Return the response if successful
        return onResFulfilled;
    }, async (error) => {
        if (error.response?.status === 401) {
            const originalRequest = error.config;
            // Avoid infinite loops
            if (!originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const refreshToken = localStorage.getItem('refresh_token'); // Retrieve the refresh token

                    const response = await axios.post('https://api.example.com/auth/refresh', {
                        refresh_token: refreshToken,
                    });

                    const newAccessToken = response.data.access_token;
                    localStorage.setItem('access_token', newAccessToken);
                    // Update the Authorization header
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    // Retry the original request
                    return apiClient(originalRequest);
                } catch (refreshError) {
                    // Handle refresh token failure (e.g., log out user)
                    console.error('Refresh token failed:', refreshError);
                    return Promise.reject(refreshError);
                }
            }
        }
    }
)


