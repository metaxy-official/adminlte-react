import React from 'react'
import { ContentHeader } from '@app/components'
import SearchBox from '@app/components/searchbox/SearchBox'
import { Table } from 'antd';


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
    },
];


const ManagePlayer = () => {
    return (
        <section className="content">
            <div className="container-fluid">
                <ContentHeader title="Danh sách người chơi" />
                <div className="header-box">
                    <div className="header-box__search">
                        <SearchBox placeholder="Nhập tên trong game hoặc địa chỉ ví của người dùng" />
                    </div>
                </div>
                <div className="table-custom">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
        </section>

    )
}

export default ManagePlayer
