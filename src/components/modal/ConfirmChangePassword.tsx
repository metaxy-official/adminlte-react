/* eslint-disable prettier/prettier */
import React from "react";
import { Modal, Button, Input } from "antd";
import WarningIcon from '../../static/icon/warning.svg'

interface ConfirmChangePasswordModalProps {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
}
const ConfirmChangePassModal = (props: ConfirmChangePasswordModalProps) => {

  const {isModalVisible, handleOk, handleCancel} = props;
  return (
    <Modal
      className="modal-confirm-change-pass"
      title=""
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={450}
    >
        <div className="modal-delete-user__body">
            <img src={WarningIcon} alt="icon-warning" />
            <Input className='input-pass' placeholder="123321abc" />
        </div>
        <div className="btn-control">
          <Button onClick={handleCancel} className="mr-2">Huỷ</Button>
          <Button className="ml-2" type="primary">
          Đồng ý
          </Button>
        </div>
    </Modal>
  );
};

export default ConfirmChangePassModal;
