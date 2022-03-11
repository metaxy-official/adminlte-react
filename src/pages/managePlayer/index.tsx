/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react'
import { ContentHeader } from '@app/components'
import SearchBox from '@app/components/searchbox/SearchBox'
import TableCustom from '@app/components/table/Table';
import useOnClickOutside from "@app/hooks/useClickOutside";
import MoreAction from '@app/components/moreAction/MoreAction';
import ChangeStatusModal from '@app/components/modal/ChangeStatusPlayer';
import threeDotIcon from "../../static/icon/threedot.svg";




const ManagePlayer = () => {

    const data = [
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

    const ref = useRef(null);
    const [isShowModal, setIsShowModal] = useState<number>(-1);
    useOnClickOutside(ref, () => setIsShowModal(-1));
    const handleShowModal = (key: number) => {
        setIsShowModal(key);
    };
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
            render: (status: boolean) => (status ? <p className="active">Đang hoạt động</p> : <p className="inactive">Dừng hoạt động</p>)
        },
        {
            title: "",
            dataIndex: "key",
            render: (key: any) => (
                <div className="btn" onClick={() => handleShowModal(key)}>
                    <img src={threeDotIcon} alt="icon" />
                    {isShowModal === key && (
                        <MoreAction ref={ref} openDeleteModal={handleOpenModalDelete} />
                    )}
                </div>
            )
        }
    ]

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
    return (
        <section className="content">
            <div className="manager-user">
                <ChangeStatusModal
                    isModalVisible={isShowModalDelete}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />
            </div>
            <div className="container-fluid">
                <ContentHeader title="Danh sách người chơi" />
                <div className="header-box">
                    <div className="header-box__search">
                        <SearchBox placeholder="Nhập tên trong game hoặc địa chỉ ví của người dùng" />
                    </div>
                </div>
                <div className="table table--manage-player my-5">
                    <TableCustom data={data} columns={columns} dataSelection={false} />
                </div>
            </div>
        </section>
    )
}

export default ManagePlayer
