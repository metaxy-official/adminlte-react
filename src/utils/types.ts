export interface DataManagerUserProp {
    key: number | string;
    name: string;
    creator: string;
    createdDate: string;
}
export interface DataListUserProp {
    key: number | string;
    name: string;
    email: string;
    role: string;
    dateActived: string;
    status: boolean;
}
export interface DataListItemGoldProp {
    key: number | string;
    name: string;
    email: string;
    role: string;
    dateActived: string;
    percent: string;
    totalGold: string,
    status: boolean,
}
export interface DataHeaderInfo {
    name: string;
    address: string;
    nation: string;
    role: string;
}
export interface DataBasicInfo {
    name: string;
    address: string;
    nation: string;
    role: string;
}