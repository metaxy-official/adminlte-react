/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react'
import { ContentHeader } from '@app/components'
import { Button, Input, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import ChangePasswordModal from '@app/components/modal/ChangePassword';
import { ReactComponent as ChangeIcon } from "../../static/icon/fi-rr-refresh.svg";

const { Option } = Select;


const EditUser = () => {

    function handleChange(value: string) {
        console.log(`selected ${value}`);
    }

    // status modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="container-fluid edit-user">
            <ContentHeader title="Chỉnh sửa người dùng" />
            <ChangePasswordModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
            <div className="edit-user__content">
                <div className="edit-user__items">
                    <div className="edit-user__input">
                        <p className="title">Họ tên (*)</p>
                        <Input placeholder="Nhập ghi chú" />
                    </div>
                    <div className="edit-user__input">
                        <p className="title">Email (*)</p>
                        <Input placeholder="Nhập ghi chú" />
                    </div>
                    <div className="edit-user__input">
                        <p className="title">Số điện thoại</p>
                        <Input placeholder="Nhập ghi chú" />
                    </div>
                </div>
                <div className="edit-user__items">
                    <div className="edit-user__select">
                        <p className="title">Vai trò (*)</p>
                        <Select
                            onChange={handleChange}
                        >
                            <Option value="1">Admin1</Option>
                            <Option value="2">Admin2</Option>
                            <Option value="2">Admin3</Option>
                        </Select>
                    </div>
                    <div className="edit-user__select">
                        <p className="title">Email (*)</p>
                        <Select
                            onChange={handleChange}
                        >
                            <Option value="1">Admin1</Option>
                            <Option value="2">Admin2</Option>
                            <Option value="2">Admin3</Option>
                        </Select>
                    </div>
                </div>
                <div className="edit-user__items">
                    <div className="edit-user__input">
                        <p className="title">Mật khẩu</p>
                        <div className="edit-user__button" onChange={showModal}>
                            <ChangeIcon fill="#2d7ff9" />
                            <p>Đổi mật khẩu</p>
                        </div>
                    </div>
                </div>
                <div className="edit-user__items">
                    <div className="edit-user__text-area">
                        <p className="title">Số điện thoại</p>
                        <TextArea placeholder="Nhập ghi chú" />
                    </div>
                </div>
                <div className="btn-control">
                    <Button className="mr-2 button-custom">Huỷ</Button>
                    <Button className="ml-2 button-custom" type="primary">
                        Lưu
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EditUser
