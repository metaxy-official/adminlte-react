/* eslint-disable prettier/prettier */
import { DataRolesUser, PermissionI } from '@app/utils/types';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    dataRoles: DataRolesUser[]
    dataPermissions: PermissionI[]
    dataProfile: any;
}

const initialState: UserState = {
    dataRoles: [],
    dataPermissions: [],
    dataProfile: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserRoles: (state, { payload }) => {
            state.dataRoles = payload
        },
        updatePermissions: (state, { payload }) => {
            state.dataPermissions = payload
        },
        updateDataProfile: (state, { payload }) => {
            state.dataProfile = payload
        },
    }
});

export const { updateUserRoles, updatePermissions, updateDataProfile } = userSlice.actions;

export default userSlice.reducer;
