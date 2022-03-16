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
}
export interface DataListBugProp {
    id: string;
    type: string;
    brief: string;
    address: string;
    nameInGame: string;
    datePublished: string;
    status: boolean;
}
export interface DataHeaderInfo {
    name: string;
    email: string;
    role: string;
    dateActived: string;
    percent: string;
    totalGold: string,
    status: boolean,
}
export interface DataBasicInfo {
    timeActive: string;
    latestInGame: string;
    statusActive: boolean;
    note: string;
    date: string;
}
export interface DataHeaderInfo1 {
    name: string;
    address: string;
    nation: string;
    role: string;
}
