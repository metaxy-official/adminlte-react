/* eslint-disable prettier/prettier */
import React from "react";
import { Modal, Button} from "antd";

interface propsDeleteModal {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
}
const DetailsNotify = (props: propsDeleteModal) => {

  const {isModalVisible, handleOk, handleCancel} = props;
  return (
    <Modal
      className="modal-detail-notify"
      title="Chi tiết thể loại thông báo"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={550}
    >
        <div className="modal-detail-notify__header">
            <p>Thông tin cơ bản</p>
        </div>
        <div className="modal-detail-notify__body">
            <div className="modal-detail-notify__body--box">
                <p className="title">Thể loại thông báo:</p>
                <p className="value">Cập nhật</p>
            </div>
            <div className="modal-detail-notify__body--box">
                <p className="title">Mô tả:</p>
                <p className="value">Dành cho các thông báo liên quan đến cập nhật</p>
            </div>
            <div className="modal-detail-notify__body--box">
                <p className="title">Ghi chú:</p>
                <p className="value">Chưa cập nhật</p>
            </div>
            <div className="modal-detail-notify__body--box">
                <p className="title">Thời gian tạo:</p>
                <p className="value">13:00 - 01/01/2022</p>
            </div>
        </div>
        <div className="btn-control">
          <Button className="mr-2">Huỷ</Button>
          <Button className="ml-2" type="primary">
            Chỉnh sửa
          </Button>
        </div>
    </Modal>
  );
};

export default DetailsNotify;
