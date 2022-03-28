/* eslint-disable consistent-return */
import { axios } from "@app/services/auth";
import { DateTime } from "luxon";
import format from "date-fns/format";

export const showTime = (time: Date | number) => {
    let datetime;
    if (time instanceof Date) {
        datetime = DateTime.fromJSDate(time);
    } else {
        datetime = DateTime.fromSeconds(time);
    }
    return datetime?.toRelative();
};

export const toFormatTime = (time: Date | number, format: string) => {
    let datetime: any;
    if (time instanceof Date) {
        datetime = DateTime.fromJSDate(time);
    } else {
        datetime = DateTime.fromSeconds(time);
    }
    return datetime?.toFormat(format);
};

export const formatTime = (time: Date | number | string) => {
    const DATE_FORMAT_WITH_DASH = "HH:mm:ss - dd-MM-yyyy";
    const date = new Date(time);
    return format(date, DATE_FORMAT_WITH_DASH);
};
export const formatTimeByDay = (time: Date | number | string) => {
    const DATE_FORMAT_WITH_DASH = "dd-MM-yyyy";
    const date = new Date(time);
    return format(date, DATE_FORMAT_WITH_DASH);
};

export const shortAddress = (address: string) => {
    if (!address) return "";
    if (address.length > 14) {
        return `${address.substr(0, 8)}...${address.substr(-6)}`;
    }
    return address;
};

// function manager list uses and roles
export const getListUsers = async (
    page: string = "1",
    pageSize: string = "10",
    sortBy: string = "createdAt%3Aasc"
) => {
    const url = `users/list?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}`;
    try {
        const response = await axios.get(url);
        return response.data.docs;
    } catch (error: any) {
        throw new Error(error.message);

    }
};

export const getUserById = async (id: string = '') => {
    const url = `users/${id}`
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const getRoles = async (
    page: string = "1",
    pageSize: string = "10",
    sortBy: string = "createdAt%3Aasc"
) => {
    const url = `roles?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}`;
    try {
        const response = await axios.get(url);
        return response.data.docs;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getRoleUserById = async (id: string = '') => {
    const url = `roles/${id}`
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error: any) {
        throw new Error(error.message);
    }
}
export const getListPlayer = async (page: string = '1', pageSize: string = '10', sortBy: string = 'createdAt%3Aasc') => {
    const url = `player?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}`
    try {
        const response = await axios.get(url);
        return response.data.docs;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const getPlayerById = async (id: string = '') => {
    const url = `player/${id}`
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        console.log(
            "🚀 ~ file: helpers.ts ~ line 52 ~ getListUsers ~ error",
            error
        );
    }
}


export const getPlayerStoryMode = async (address?: string, page?: number, pageSize?: number, startDate?: string, endDate?: string, keyword?: string) => {
    try {
        const response = await axios.get(`/player/${address}/game/story-mode?page=${1}&pageSize=${10}&startDate=${'2021-12-24T10%3A15%3A26.658Z'}&endDate=${'2022-07-24T10:15:26.658Z'}&keyword=${keyword}`)
        return response.data
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const getDataHeroes = async (address?: string, page: number = 1, pageSize: number = 10) => {
    try {
        const response = await axios.get(`/player/${address}/game/nfts?page=${page}&pageSize=${pageSize}`)
        return response.data
    } catch (error: any) {
        throw new Error(error.message);
    }
}
export interface UserI {
    fullName: string;
    email: string;
    password: string;
    roles: string[];
    phoneNumber: string;
    note: string;
}
export const createNewUser = async (user: UserI) => {
    const url = `users/create`
    const response = await axios.post(url, user);
    return response.data;
}
