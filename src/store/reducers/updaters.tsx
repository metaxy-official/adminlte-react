/* eslint-disable no-debugger */
// import {getRoles} from "@app/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import {setUserRoles} from "./user";

export default function Updater(): null {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllData = async () => {
      // const dataRoles = await getRoles();
      // dispatch(setUserRoles(dataRoles));
    };
    getAllData();
  }, [dispatch]);

  return null;
}
