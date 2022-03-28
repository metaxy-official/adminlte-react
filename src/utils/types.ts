import ExportTypography from "antd/lib/typography/Typography";

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
export interface DataListPlayerProp {
    id: string;
    address: string;
    name: string;
    regionId: number;
    highestLevel: number;
    createdAt: string;
    updatedAt: string;
    banned: boolean;

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

export interface DataUser {
    email: string;
    createdAt: string;
    fullName: string;
    isActive: string;
    phoneNumber: string;
    role: [];
    note: string;
}
export interface DataPlayer {
    name: string;
    address: string;
    nation: string;
    role: string;
    totalOnlineHours: number;
    lastUpdate: string;
    banned: boolean;
    reason: string;
    updatedAt: string;
    note: string;
    createdAt: string;
    highestLevel: number;
    totalStars: number;
    totalCoins: number;
    tokenEarned: number;
    lastPlayed: string;
}
export interface DataPlayerStoryMode {
    levelInfoId: number;
    tokensStar: number;
    totalPlayed: number;
    tokensReward: number;
    coinsReward: number;
    lastPlayedAt: string;
    autoRaid: AutoRaidProps[];
}

export interface AutoRaidProps {
    cardTokenId: number;
    coinsReward: number;
    tokensReward: number;
}
export interface DataTypeUser {
    fullAccess: boolean;
    permissions: [];
    id: string;
    name: string;
    createdBy: string;
    createdAt: string;
}

export interface PermissionProp {
    feature: string;
    id: string;
}
export interface DataRoleUser {
    note: string;
    fullAccess: boolean;
    permissions: PermissionProp[];
    name: string;
    createdBy: string;
    id: string;
}


export interface DataNftPlayer {
    isRaiding: boolean;
    ownerAddress: string;
    tokenId: number | string;
    dataDetailNft: DataDetailNft[];
}

export interface DataDetailNft {
    evolveLevel: number;
    specialSkillLevel: number;
    rankInfoId: number;
    characterName: string;
    imgHero: string;
    characterId: number;
    level: number;
    attack: number;
    energy: number;
    hp: number;
    rankName: string;
    speed: number;
    battlePower: number;
}