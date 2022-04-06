/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from "react";
import {Modal, Button, Input} from "antd";
import {INotificationType, INotificationTypeReq} from "@app/utils/types";

interface Props {
  isEditModal?: boolean;
  isModalVisible?: boolean;
  handleOk: (notify: INotificationTypeReq) => void;
  handleCancel?: () => void;
  dataEdit?: INotificationType;
}
const CreateAndUpdateNotificationType = (props: Props) => {
  const {isModalVisible, handleOk, handleCancel, isEditModal, dataEdit} = props;

  const [notify, setNotify] = useState<any>();

  useEffect(() => {
    setNotify(dataEdit);
  }, [dataEdit]);

  const handleInput = (type: string, e: any) => {
    const {value} = e.target;
    setNotify({...notify, [type]: value});
  };
  const handleCreateNotify = () => {
    if (!notify?.key || !notify?.description || !notify?.note) {
      alert("Please fill data");
    } else {
      handleOk(notify);
      setNotify({});
    }
  };
  return (
    <Modal
      className="modal-create-notification-type"
      title={
        isEditModal ? "Chỉnh sửa thể loại thông báo" : "Tạo thể loại thông báo"
      }
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width={550}
    >
      <div className="modal-create-notification-type__body">
        <div className="modal-create-notification-type__body--type">
          <label htmlFor="notification-type">
            Thể loại thông báo <span>(*)</span>
          </label>
          <Input
            value={notify?.key || ""}
            onChange={(e: any) => handleInput("key", e)}
            id="notification-type"
            placeholder="Nhập thể loại thông báo"
          />
        </div>
        <div className="modal-create-notification-type__body--des">
          <label htmlFor="notification-des">Mô tả</label>
          <Input
            value={notify?.description || ""}
            onChange={(e: any) => handleInput("description", e)}
            id="notification-des"
            placeholder="Nhập mô tả"
          />
        </div>
        <div className="modal-create-notification-type__body--note">
          <label htmlFor="notification-note">Ghi chú</label>
          <Input
            value={notify?.note || ""}
            onChange={(e: any) => handleInput("note", e)}
            id="notification-note"
            placeholder="Nhập ghi chú"
          />
        </div>
      </div>
      <div className="btn-control">
        <Button shape="round" onClick={handleCancel} className="mr-2">
          Huỷ
        </Button>
        <Button
          shape="round"
          onClick={handleCreateNotify}
          className="ml-2"
          type="primary"
        >
          {isEditModal ? "Cập nhật" : "Tạo thể loại"}
        </Button>
      </div>
    </Modal>
  );
};

export default CreateAndUpdateNotificationType;
