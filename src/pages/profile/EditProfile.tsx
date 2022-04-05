import React, { useEffect, useState } from 'react'
import { ContentHeader } from '@app/components'
import { Button, Input, Select, Spin } from 'antd'
import { ApplicationRootState, DataProfile, OptionRole } from '@app/utils/types';
import { editDataProfile, getDataProfile } from '@app/utils';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
import { Option } from 'antd/lib/mentions';
import TextArea from 'antd/lib/input/TextArea';
import ChangePasswordModal from '@app/components/modal/ChangePassword';



const EditProfile = () => {
    const navigate = useNavigate();
    const [dataUser, setDataUser] = useState<DataProfile>();
    console.log("🚀 ~ file: EditProfile.tsx ~ line 18 ~ EditProfile ~ dataUser", dataUser)
    const [loading, setLoading] = useState<boolean>(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const dataRoleUser = useSelector(
        (state: ApplicationRootState) => state.user.dataRoles
    );


    const handleChangePassword = () => {
        setIsShowModal(true);
    };
    const handleOk = () => {
        setIsShowModal(false);
    };
    const handleCancel = () => {
        setIsShowModal(false);
    };


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await getDataProfile();
            setDataUser(data);
            setLoading(false);
        };
        getData();
    }, []);

    const dataOptionsRole: OptionRole[] = dataRoleUser.map((item: any) => ({
        name: item.name,
        value: item.id
    }));

    const userEdit: any = {
        fullName: dataUser?.fullName,
        // roles: dataUser?.roles,
        phoneNumber: dataUser?.phoneNumber,
        note: dataUser?.note
    };
    console.log("🚀 ~ file: EditProfile.tsx ~ line 58 ~ EditProfile ~ userEdit", userEdit)

    // func edit user
    const handleInputDataUser = (type: string, e: any) => {
        const { value } = e.target;
        userEdit[type] = value;
    };


    const cancelUpdateUser = () => {
        return navigate(`/profile`)
    }


    const handleUpdateUser = async () => {
        if (!userEdit?.fullName || !userEdit?.phoneNumber || (userEdit?.note).length === 0)
            return toast.error("please fill the data!");
        try {
            const user = await editDataProfile(userEdit);
            toast.success(
                `Cập nhật thông tin người dùng ${user.fullName} thành công!`
            );
            return navigate(`/profile`);
        } catch (error: any) {
            toast.error("Cập nhật thông tin người dùng thất bại! Vui lòng thử lại");
            throw new Error(error.message);
        }
    };

    if (loading)
        return (
            <div className="d-flex justify-content-center mt-2">
                <Spin size="large" />
            </div>
        );
    return (
        <div className="container-fluid edit-user">
            <ContentHeader title="Chỉnh sửa người dùng" />
            <ChangePasswordModal
                isModalVisible={isShowModal}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
            <div className="edit-user__content">
                <div className="edit-user__items">
                    <div className="edit-user__input">
                        <p className="title">Họ tên (*)</p>
                        <Input
                            onChange={(e) => handleInputDataUser("fullName", e)}
                            defaultValue={dataUser?.fullName}
                        />
                    </div>
                    <div className="edit-user__input">
                        <p className="title">Email (*)</p>
                        <Input disabled defaultValue={dataUser?.email} />
                    </div>
                    <div className="edit-user__input">
                        <p className="title">Số điện thoại</p>
                        <Input
                            onChange={(e) => handleInputDataUser("phoneNumber", e)}
                            defaultValue={dataUser?.phoneNumber}
                        />
                    </div>
                </div>
                <div className="edit-user__items">
                    <div className="edit-user__select">
                        <p className="title">Vai trò (*)</p>
                        <Select
                            disabled
                            mode="multiple"
                            allowClear
                            placeholder="Please select roles"
                            defaultValue={dataUser?.roles?.map((item: any) => item.id)}
                        >
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
                        <Input disabled defaultValue={dataUser?.isActive ? 'Đang hoạt động' : 'Không hoạt động'} />
                    </div>
                </div>
                <div className="edit-user__items">
                    <div className="edit-user__text-area">
                        <p className="title">Mật khẩu</p>
                        <Button
                            onClick={handleChangePassword}
                            className="mr-2 button-common button--change">
                            Đổi mật khẩu
                        </Button>
                    </div>
                </div>
                <div className="edit-user__items">
                    <div className="edit-user__text-area">
                        <p className="title">Ghi chú</p>
                        <TextArea
                            defaultValue={dataUser?.note}
                            onChange={(e) => handleInputDataUser("note", e)}
                            placeholder="Nhập ghi chú..."
                            rows={3}
                        />
                    </div>
                </div>
                <div className="btn-control d-flex justify-content-center">
                    <Button
                        onClick={cancelUpdateUser}
                        className="mr-2 button-common">Huỷ</Button>
                    <Button
                        onClick={handleUpdateUser}
                        className="ml-2 button-common button-primary"
                        type="primary"
                    >
                        Cập nhật
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default EditProfile
