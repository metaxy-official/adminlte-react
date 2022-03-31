/* eslint-disable no-debugger */
import {getPermissions, getRoles} from "@app/utils";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUserRoles, setPermissions} from "./user";

export default function Updater(): null {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllData = async () => {
      const dataRoles = await getRoles();
      const dataPermission = await getPermissions();
      dispatch(setUserRoles(dataRoles));
      dispatch(setPermissions(dataPermission));
    };
    getAllData();
  }, [dispatch]);

  return null;
}
