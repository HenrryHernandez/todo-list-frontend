import { useEffect } from "react";

import { axiosInstance } from "../api/apiInstance";

export const useAxios = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";

    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config: any) => {
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
        const MAX_TRIES = 3;
        const config = error?.config;

        config.__retryCount = config.__retryCount || 0;

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
