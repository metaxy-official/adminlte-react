import React, { useState } from 'react'
import { ContentHeader } from '@app/components'
import SearchBox from '@app/components/searchbox/SearchBox'
import { Table } from 'antd';
import ThreeDot, { ItemMoreOption } from '@app/components/btnThreeDot';
import { useNavigate } from 'react-router-dom';
import DeleteUserTypeModal from '@app/components/modal/DeleteTypeUser';
import changeStatusIcon from "../../static/icon/change-status.svg";
import watchmoreIcon from "../../static/icon/watch-more.svg";



const ManagePlayer = () => {

    const dataSource = [
        {
            key: '1',
            AddressWallet: '0x7ef6c419ec...c9ee',
            NameInGame: '32',
            Nation: 'Việt Nam',
            Level: 500,
            AcitonLast: '13:00 - 01/01/2022',
            Day: '01/01/2022',
            Status: true,
        },
        {
            key: '2',
            AddressWallet: '0x7ef6c419ec...c9ee',
            NameInGame: '32',
            Nation: 'Việt Nam',
            Level: 500,
            AcitonLast: '13:00 - 01/01/2022',
            Day: '01/01/2022',
            Status: true,
        },
        {
            key: '3',
            AddressWallet: '0x7ef6c419ec...c9ee',
            NameInGame: '32',
            Nation: 'Việt Nam',
            Level: 500,
            AcitonLast: '13:00 - 01/01/2022',
            Day: '01/01/2022',
            Status: true,
        },
        {
            key: '4',
            AddressWallet: '0x7ef6c419ec...c9ee',
            NameInGame: '32',
            Nation: 'Việt Nam',
            Level: 500,
            AcitonLast: '13:00 - 01/01/2022',
            Day: '01/01/2022',
            Status: false,
        },
    ];
    const navigate = useNavigate();
    // state for modal detail
    const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
    const handleOpenModalDelete = () => {
        setIsShowModalDelete(true);
    };
    const handleOk = () => {
        setIsShowModalDelete(false);
    };
    const handleCancel = () => {
        setIsShowModalDelete(false);
    };
    const listItem: ItemMoreOption[] = [
        {
            key: 'detailInfo', name: 'Xem chi tiết', icon: watchmoreIcon, onClick: () => {
                navigate('/nguoi-choi/chi-tiet-nguoi-choi')
            }
        },
        { key: 'delete', name: 'Đổi Trạng thái', icon: changeStatusIcon, onClick: handleOpenModalDelete }
    ]

    const columns = [
        {
            title: 'Địa chí ví',
            dataIndex: 'AddressWallet',
            key: 'AddressWallet',
        },
        {
            title: 'Tên trong game',
            dataIndex: 'NameInGame',
            key: 'NameInGame',
        },
        {
            title: 'Quốc Gia',
            dataIndex: 'Nation',
            key: 'Nation',
        },
        {
            title: 'Level Cao nhất',
            dataIndex: 'Level',
            key: 'Level',
        },
        {
            title: 'Lần Hoạt động gần nhất',
            dataIndex: 'AcitonLast',
            key: 'AcitonLast',
        },
        {
            title: 'Ngày tham gia',
            dataIndex: 'Day',
            key: 'Day',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'Status',
            key: 'Status',
            render: (status: boolean) => (
                <>
                    {status ? (
                        <div className="status-actived">Đang hoạt động</div>
                    ) : (
                        <div className="status-not-active">Dừng hoạt động</div>
                    )}
                </>
            )
        },
        {

            title: "",
            dataIndex: "key",
            render: () => <ThreeDot listItem={listItem} modals={
                <DeleteUserTypeModal
                    isModalVisible={isShowModalDelete}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />
            }
            />
        }
    ]

    return (
        <section className="content">
            <div className="container-fluid">
                <ContentHeader title="Danh sách người chơi" />
                <div className="header-box">
                    <div className="header-box__search">
                        <SearchBox placeholder="Nhập tên trong game hoặc địa chỉ ví của người dùng" />
                    </div>
                </div>
                <div className="table-custom my-5">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
        </section>

    )
}

export default ManagePlayer
