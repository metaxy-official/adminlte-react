/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
import {permissions} from "@app/const";
import {
  checkPermission,
  getDataProfile,
  getPermissions,
  getRoles
} from "@app/utils";
import {ApplicationRootState, PermissionI} from "@app/utils/types";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUserRoles, updatePermissions, updateDataProfile} from "./user";

export default function Updater(): null {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: ApplicationRootState) => state.auth.currentUser
  );

  useEffect(() => {
    const getPermissionOfUser = async () => {
      if (currentUser.email) {
        const data: any = await getDataProfile();
        const dataPer: PermissionI[] = data?.roles
          .map((item: any) => item.permissions)
          .flat(2);
        const arrPer = Array.from(new Set(dataPer)).map((item) => item.feature);
        dispatch(updateDataProfile(arrPer));
        // check call api
        if (currentUser.email) {
          const dataPermission = await getPermissions();
          dispatch(updatePermissions(dataPermission));
        }

        if (checkPermission(arrPer, permissions.USER_MANAGEMENT_FEATURE)) {
          const dataRoles = await getRoles();
          dispatch(updateUserRoles(dataRoles));
        }
      }
    };
    getPermissionOfUser();
  }, [dispatch, currentUser]);

  return null;
}
