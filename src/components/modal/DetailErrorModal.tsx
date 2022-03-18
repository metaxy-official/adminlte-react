import React from "react";
import { Modal, Button } from "antd";

interface propsDeleteModal {
    isModalVisible: boolean;
    handleOk?: () => void;
    handleCancel?: () => void;
}
const DetailErrorModal = (props: propsDeleteModal) => {

    const { isModalVisible, handleOk, handleCancel } = props;
    return (
        <Modal
            className="modal__wrapper modal-detail-error"
            title=""
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={450}
        >
            <div className="modal-detail-error__body">
                <h3 className="modal-detail__title">Chi tiết nghi vấn</h3>
                <p className="">abc</p>
            </div>
            <div className="btn-control">
                <Button className="mr-2">Huỷ</Button>
                <Button className="ml-2" type="primary">
                    Đồng ý
                </Button>
            </div>
        </Modal>
    );
};

export default DetailErrorModal;
