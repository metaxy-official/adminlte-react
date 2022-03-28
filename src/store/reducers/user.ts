/* eslint-disable prettier/prettier */
import { DataRolesUser } from '@app/utils/types';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    dataRoles: DataRolesUser[]
}

const initialState: UserState = {
    dataRoles: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserRoles: (state, { payload }) => {
            state.dataRoles = payload
        }
    }
});

export const { setUserRoles } = userSlice.actions;

export default userSlice.reducer;
