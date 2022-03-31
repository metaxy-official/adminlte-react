/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@app/components";
import {setUserRoles} from "@app/store/reducers/user";
import {createNewRole, getRoles, getRoleUserById} from "@app/utils";
import {
  ApplicationRootState,
  DataRolesUser,
  PermissionI,
  permissionRoleUserI
} from "@app/utils/types";
import {Button, Checkbox, Input} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";

function CreateTypeUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roleUser: permissionRoleUserI = {
    name: "",
    permissions: [],
    fullAccess: false,
    note: ""
  };
  // create type user
  function onChange(checkedValues: any) {
    roleUser.permissions = checkedValues;
  }
  const dataPermissions: PermissionI[] = useSelector(
    (state: ApplicationRootState) => state.user.dataPermissions
  );

  const hanldeNameRole = (e: any) => {
    roleUser.name = e.target.value;
  };
  const hanldeNoteRole = (e: any) => {
    roleUser.name = e.target.value;
  };
  const handleCreateNewRoleUser = async () => {
    if (!roleUser.name || roleUser.permissions.length === 0) {
      return alert("please fill the data!");
    }
    try {
      const user = await createNewRole(roleUser);
      toast.success(`Tạo kiểu người dùng ${roleUser.name} thành công!`);
      getRoles();
      const dataRoles = await getRoles();
      dispatch(setUserRoles(dataRoles));
      return navigate(`/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung/${user.id}`);
    } catch (error: any) {
      toast.error(
        `Tạo kiểu người dùng ${roleUser.name} thất bại! Vui lòng thử lại`
      );
      throw new Error(error.message);
    }
  };

  const dataOptions = dataPermissions.map((item: PermissionI) => ({
    label: item.feature,
    value: item.id
  }));

  // edit type user
  const {id} = useParams<string>();
  const [dataRoleUser, setDataRoleUser] = useState<DataRolesUser>();
  console.log(
    "🚀 ~ file: index.tsx ~ line 69 ~ CreateTypeUser ~ dataRoleUser",
    dataRoleUser
  );
  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      const data = await getRoleUserById(id);
      setDataRoleUser(data);
    };
    getData();
  }, [id]);
  const defaultOptions = dataPermissions.map((item: PermissionI) => item.id);

  return (
    <div className="container-type-user">
      <ContentHeader title="Tạo kiểu người dùng" />
      <section className="content">
        <div className="name-user-box">
          <label htmlFor="name">
            Tên kiểu người dùng <span>(*)</span>
          </label>
          <Input
            defaultValue="aaaa"
            onChange={hanldeNameRole}
            id="name"
            placeholder="Nhập tên kiểu người dùng"
          />
        </div>
        <div className="note-box">
          <label htmlFor="note">Ghi chú</label>
          <TextArea
            defaultValue={dataRoleUser?.note}
            onChange={hanldeNoteRole}
            rows={4}
            id="note"
            placeholder="Nhập ghi chú..."
          />
        </div>
        <div className="permission-box">
          <p>
            Thêm quyền <span className="more">(*)</span>
          </p>
          <Checkbox.Group
            options={dataOptions}
            defaultValue={defaultOptions}
            onChange={onChange}
          />
        </div>
        <div className="btn-control">
          <Button className="mr-2" shape="round">
            Hủy
          </Button>
          <Button
            onClick={handleCreateNewRoleUser}
            className="ml-2"
            shape="round"
            type="primary"
          >
            Tạo kiểu người dùng
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CreateTypeUser;
