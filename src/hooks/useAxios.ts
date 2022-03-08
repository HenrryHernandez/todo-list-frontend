import { useEffect } from "react";

import { axiosInstance } from "../api/apiInstance";

export const useAxios = () => {
  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config: any) => {
        const accessToken = localStorage.getItem("accessToken") || "";

        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const config = error?.config;
        const response = error?.response;

        if (response?.status === 403) {
          console.log("logout");
        }

        config.__retryCount = config.__retryCount || 0;

        const MAX_TRIES = 3;
        if (config.__retryCount >= MAX_TRIES) return Promise.reject(error);

        config.__retryCount++;

        const backoff: any = new Promise((resolve: any) => {
          setTimeout(() => {
            resolve();
          }, 1);
        });

        await backoff;

        return axiosInstance(config);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return axiosInstance;
};
