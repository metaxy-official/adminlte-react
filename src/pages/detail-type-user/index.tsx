/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@app/components";
import {getRoleUserById} from "@app/utils";
import {DataRoleUser} from "@app/utils/types";
import {Button} from "antd";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ReactComponent as EditIcon} from "../../static/icon/edit.svg";

function DetailTypeUser() {
  // get id user
  const {id} = useParams<string>();
  const [dataRoleUser, setDataRoleUser] = useState<DataRoleUser>();
  console.log(
    "🚀 ~ file: index.tsx ~ line 18 ~ DetailTypeUser ~ dataRoleUser",
    dataRoleUser
  );
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      const data = await getRoleUserById(id);
      setDataRoleUser(data);
    };
    getData();
  }, [id]);
  const handleEditTypeUser = () =>
    navigate(`/kieu-nguoi-dung/chinh-sua-kieu-nguoi-dung/${id}`);
  return (
    <div className="container-detail-user">
      <ContentHeader title="Chi tiết kiểu người dùng" />
      <div className="box-information">
        <div className="infor-header">
          <p>{dataRoleUser?.name}</p>
          <div onClick={handleEditTypeUser} className="infor-header-btn">
            <EditIcon fill="#2d7ff9" />
            <p>Chỉnh sửa</p>
          </div>
        </div>
        <div className="infor-body">
          <div className="infor-body-box">
            <p className="infor-body-box__title">Ghi chú:</p>
            <p className="infor-body-box__des">
              {dataRoleUser?.note ? dataRoleUser.note : "Chưa cập nhật"}
            </p>
          </div>
          <div className="infor-body-box">
            <p className="infor-body-box__title">Ngày tạo:</p>
            <p className="infor-body-box__des">01/01/2022</p>
          </div>
        </div>
      </div>
      <div className="btn-control">
        <Button className="mr-2" shape="round">
          Thông tin
        </Button>
        <Button className="ml-2" shape="round" type="primary">
          Nhóm người dùng
        </Button>
      </div>
      <div className="permission-box">
        <p>Thông tin quyền cơ bản</p>
        {dataRoleUser?.permissions.map((item, index) => (
          <div key={index} className="options">
            {item.feature}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailTypeUser;
