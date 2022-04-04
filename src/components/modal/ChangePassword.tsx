/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { toast } from "react-toastify";
import { changePassword } from "@app/utils";

interface propsDeleteModal {
    isModalVisible: boolean;
    handleOk?: () => void;
    handleCancel?: () => void;
}
const ChangePasswordModal = (props: propsDeleteModal) => {


    const { isModalVisible, handleOk, handleCancel } = props;

    const [repeatPassword, SetRepeatPassword] = useState<string>()

    const updatePassword: any = {
        newPassword: '',
        oldPassword: '',

    }
    console.log("🚀 ~ file: ChangePassword.tsx ~ line 20 ~ ChangePasswordModal ~ updatePassword", updatePassword)

    const handleTypingPassword = (type: string, e: any) => {
        const { value } = e.target.value;
        console.log("🚀 ~ file: ChangePassword.tsx ~ line 29 ~ handleTypingPassword ~ value", value)
        updatePassword[type] = value
    }

    // const closeModal = () => {

    // }

    const handleUpdatePassWord = async () => {
        if (updatePassword?.newPassWord !== repeatPassword)
            return toast.error("please fill the data!");
        try {
            const password = await changePassword(updatePassword);
            console.log("🚀 ~ file: ChangePassword.tsx ~ line 34 ~ handleUpdatePassWord ~ password", password)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    return (
        <Modal
            className="modal__wrapper modal-detail-error"
            title="Đổi mật khẩu"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={450}
        >
            <div className="modal-detail-error__body">
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Mật khẩu cũ (*)</p>
                    <Input
                        type='password'
                        placeholder="Nhập mật khẩu cũ"
                        onChange={(e => handleTypingPassword('oldPassWord', e))}
                    />
                </div>
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Mật khẩu mới (*)</p>
                    <Input
                        type='password'
                        placeholder="Nhập mật khẩu mới"
                        onKeyPress={(e => handleTypingPassword('newPassWord', e))}
                    />
                </div>
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Nhập lại mật khẩu mới (*)</p>
                    <Input
                        type='password'
                        placeholder="Nhập lại mật khẩu mới"
                        onChange={(e) => SetRepeatPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="btn-control">
                <Button className="mr-2 button-custom" onClick={handleCancel}>Huỷ</Button>
                <Button className="ml-2 button-custom" onClick={handleUpdatePassWord} type="primary">
                    Lưu
                </Button>
            </div>
        </Modal >
    );
};

export default ChangePasswordModal;
