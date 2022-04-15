/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/alt-text */

import React, {useEffect, useState} from "react";
import BoxComponent, {Info} from "@app/components/boxComponent";
import {formatTime, getNotificationByIdCMS} from "@app/utils";
import {INotificationCMS} from "@app/utils/types";
import {useNavigate, useParams} from "react-router-dom";

function DetailNotificationInGame() {
  const {id} = useParams<string>();
  const [dataNotificationsCMS, setDataNotificationsCMS] =
    useState<INotificationCMS>();
  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      const data = await getNotificationByIdCMS(id);
      setDataNotificationsCMS(data);
    };
    getData();
  }, [id]);
  const dataInfo: Info[] = [
    {
      name: "Tiêu đề:",
      value: dataNotificationsCMS?.title
    },
    {
      name: "Thể loại:",
      value: dataNotificationsCMS?.eventType
    },
    {
      name: "Trạng thái:",
      value:
        dataNotificationsCMS?.status === 0 ? (
          <p style={{color: "#FCB06A", fontWeight: "bold"}}>Bản nháp</p>
        ) : dataNotificationsCMS?.status === 1 ? (
          <p style={{color: "#FFDC61", fontWeight: "bold"}}>Đang gửi</p>
        ) : (
          <p style={{color: "#93E088", fontWeight: "bold"}}>Đã gửi</p>
        )
    },
    {
      name: "Ghi chú:",
      value: dataNotificationsCMS?.description
    }
  ];
  const dataNotificationBasic: Info[] = [
    {
      name: "Người nhận:",
      value: dataNotificationsCMS?.to
    },
    {
      name: "Nội dung:",
      value: dataNotificationsCMS?.description
    },
    {
      name: "Ngày đăng tải:",
      value: dataNotificationsCMS && formatTime(dataNotificationsCMS?.createdAt)
    }
  ];

  const navigate = useNavigate();
  const showModal = () => {
    navigate(`/quan-li-thong-bao/tao-thong-bao/${id}`);
  };

  return (
    <div className="container-fuild">
      <BoxComponent
        title="Thông tin thông báo"
        handleEdit={showModal}
        listInfo={dataInfo}
      />
      <BoxComponent title="Thông tin cơ bản" listInfo={dataNotificationBasic} />
    </div>
  );
}

export default DetailNotificationInGame;
