export interface DataManagerUserProp {
    key: number | string;
    name: string;
    creator: string;
    createdDate: string;
}

export interface ItemRole {
    name: string;
    id: string;
}
export interface DataListUserProp {
    id: string;
    name: string;
    email: string;
    roles: ItemRole[];
    createdAt: string;
    isActive: boolean;
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
export interface DataNotificationInGame {
    id: string;
    title: string;
    type: string;
    to: string;
    reporter: string;
    note: string;
    createdAt: string;
    status: boolean;
}
export interface ListDataNotification {
    id: string;
    type: string;
    description: string;
    note: string;
    createdAt: string;
}
export interface DataListNotifyUser {
    key: number | string;
    title: string;
    type: string;
    address: string;
    reporter: string;
    from: string;
    createdAt: string;
}