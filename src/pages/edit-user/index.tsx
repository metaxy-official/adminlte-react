/* eslint-disable react/jsx-no-bind */
import React, {useEffect, useState} from "react";
import {ContentHeader} from "@app/components";
import {Button, Input, Select, Spin} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {useParams} from "react-router-dom";
import {DataUser, OptionRole} from "@app/utils/types";
import {getUserById} from "@app/utils";
import {useSelector} from "react-redux";

const {Option} = Select;

const EditUser = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  // get id user
  const {id} = useParams<string>();
  const [dataUser, setDataUser] = useState<DataUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const dataRoleUser = useSelector((state: any) => state.user.dataRoles);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      if (!id) return;
      const data = await getUserById(id);
      setDataUser(data);
      setLoading(false);
    };
    getData();
  }, [id]);

  const dataOptionsRole: OptionRole[] = dataRoleUser.map((item: any) => ({
    name: item.name,
    value: item.id
  }));
  if (loading)
    return (
      <div className="d-flex justify-content-center mt-2">
        <Spin size="large" />
      </div>
    );
  return (
    <div className="container-fluid edit-user">
      <ContentHeader title="Chỉnh sửa người dùng" />
      <div className="edit-user__content">
        <div className="edit-user__items">
          <div className="edit-user__input">
            <p className="title">Họ tên (*)</p>
            <Input defaultValue={dataUser?.fullName} />
          </div>
          <div className="edit-user__input">
            <p className="title">Email (*)</p>
            <Input disabled defaultValue={dataUser?.email} />
          </div>
          <div className="edit-user__input">
            <p className="title">Số điện thoại</p>
            <Input defaultValue={dataUser?.phoneNumber} />
          </div>
        </div>
        <div className="edit-user__items">
          <div className="edit-user__select">
            <p className="title">Vai trò (*)</p>
            <Select onChange={handleChange}>
              {dataOptionsRole.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="edit-user__select">
            <p className="title">
              Trạng thái <span>(*)</span>
            </p>
            <Select onChange={handleChange} defaultValue="1">
              <Option value="1">Đang hoạt động</Option>
              <Option value="2">Không hoạt động</Option>
            </Select>
          </div>
        </div>
        <div className="edit-user__items">
          <div className="edit-user__text-area">
            <p className="title">Ghi chú</p>
            <TextArea placeholder="Nhập ghi chú..." rows={3} />
          </div>
        </div>
        <div className="btn-control">
          <Button className="mr-2 button-custom">Huỷ</Button>
          <Button className="ml-2 button-custom" type="primary">
            Cập nhật
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
