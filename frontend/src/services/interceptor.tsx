import axios from "axios";
import Cookies from "js-cookie";
import { ROUTES } from "@/constant/api.constant";
import { RefreshTokenResponse } from "@/types/apiResponse/auth";

const apiClient = axios.create({
    baseURL: ROUTES.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

// add token to request headers
apiClient.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get("access_token")
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

let isRefresh = false
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
};

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefresh) {
                return new Promise((resolve) => {
                    addRefreshSubscriber((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        resolve(apiClient(originalRequest));
                    });
                });
            }

            isRefresh = true;

            try {
                const refreshToken = Cookies.get("refreshToken");
                if (!refreshToken) {
                    return Promise.reject(error);
                }

                const response = await axios.post(ROUTES.REFRESHTOKEN_ROUTE, { refreshToken });
                const apiResponse: RefreshTokenResponse = response.data
                const newAccessToken = apiResponse.data;
                Cookies.set("accessToken", newAccessToken, { expires: 1 / 24 });

                apiClient.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                onRefreshed(newAccessToken);

                return apiClient(originalRequest);
            } catch (err) {
                return Promise.reject(err);
            } finally {
                isRefresh = false;
            }
        }
        return Promise.reject(error);
    }
);

export { apiClient };