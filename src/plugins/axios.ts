/* eslint-disable dot-notation */
/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export const createService = (
    baseURL?: string,
    contentType: string = 'application/json',
): AxiosInstance => {
    return interceptAuth(baseConfig(baseURL, contentType));
};

export const downloadFileService = (
    baseURL?: string,
    contentType: string = 'application/json',
): AxiosInstance => {
    const config: AxiosRequestConfig = baseConfig(baseURL, contentType);
    config.responseType = 'blob';
    return interceptAuth(config);
};

const baseConfig = (
    baseURL?: string,
    contentType: string = 'application/json',
) => {
    return {
        baseURL: baseURL,
        headers: {
            'Accept-Language': 'en-US',
            'Content-Type': contentType,
        },
    };
};

const interceptAuth = (config: AxiosRequestConfig) => {
    const instance = axios.create(config);
    instance.interceptors.request.use(
        (config: any) => {

            const token = localStorage.getItem('token')

            if (token) {
                config.headers['Authorization'] = `bearer ${token}`;
            }


            return config;
        },
        (error) => {
            Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
    );
    return instance;
};
