/* eslint-disable prettier/prettier */
import { DataRolesUser, PermissionI } from '@app/utils/types';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    dataRoles: DataRolesUser[]
    dataPermissions: PermissionI[]
}

const initialState: UserState = {
    dataRoles: [],
    dataPermissions: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserRoles: (state, { payload }) => {
            state.dataRoles = payload
        },
        setPermissions: (state, { payload }) => {
            state.dataPermissions = payload
        }
    }
});

export const { setUserRoles, setPermissions } = userSlice.actions;

export default userSlice.reducer;
