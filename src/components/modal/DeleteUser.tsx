/* eslint-disable prettier/prettier */
import React from "react";
import {Select, Modal, Button} from "antd";

const {Option} = Select;
interface propsDeleteModal {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
}
const DeleteUserModal = (props: propsDeleteModal) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const {isModalVisible, handleOk, handleCancel} = props;
  return (
    <Modal
      className="modal-delete-user"
      title="Thay đổi thay thế kiểu người dùng"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={450}
    >
      <div className="modal-delete-user__body">
        <p>
          Kiểu người dùng thay thế <span>(*)</span>
        </p>
        <Select
          defaultValue="lucy"
          style={{width: "100%"}}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <div className="btn-control">
          <Button className="mr-2">Huỷ</Button>
          <Button className="ml-2" type="primary">
            Lưu
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUserModal;
