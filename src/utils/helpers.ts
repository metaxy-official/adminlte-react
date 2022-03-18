/* eslint-disable consistent-return */
import axios from "axios";

export const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));

export const calculateWindowSize = (windowWidth: number) => {
  if (windowWidth >= 1200) {
    return 'lg';
  }
  if (windowWidth >= 992) {
    return 'md';
  }
  if (windowWidth >= 768) {
    return 'sm';
  }
  return 'xs';
};

export const setWindowClass = (classList: string) => {
  const window: HTMLElement | null =
    document && document.getElementById('root');
  if (window) {
    // @ts-ignore
    window.classList = classList;
  }
};
export const addWindowClass = (classList: string) => {
  const window: HTMLElement | null =
    document && document.getElementById('root');
  if (window) {
    // @ts-ignore
    window.classList.add(classList);
  }
};

export const removeWindowClass = (classList: string) => {
  const window: HTMLElement | null =
    document && document.getElementById('root');
  if (window) {
    // @ts-ignore
    window.classList.remove(classList);
  }
};


export const getListUsers = async (page: string = '1', pageSize: string = '10', sortBy: string = 'createdAt%3Aasc') => {
  console.log("🚀 ~ file: helpers.ts ~ line 48 ~ getListUsers ~ page", page, pageSize, sortBy);
  const url = `/users/list?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}`
  // const url = 'https://api-cms.metaxy.game/users/list?page=1&pageSize=10&sortBy=createdAt%3Aasc'
  try {
    const response = await axios.get(url);
    return response
  } catch (error) {
    console.log("🚀 ~ file: helpers.ts ~ line 52 ~ getListUsers ~ error", error)

  }
}