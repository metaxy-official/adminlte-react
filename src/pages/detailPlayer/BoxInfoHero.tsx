/* eslint-disable react/jsx-no-bind */
import React from 'react'
import BoxComponent, { Info } from '@app/components/boxComponent'
import SearchBox from '@app/components/searchbox/SearchBox'
import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        Level: '1',
        NameInGame: '32',
        Nation: 'Việt Nam',
        AcitonLast: '13:00 - 01/01/2022',
        Day: '01/01/2022',
    },
    {
        key: '2',
        Level: '2',
        NameInGame: '32',
        Nation: 'Việt Nam',
        AcitonLast: '13:00 - 01/01/2022',
        Day: '01/01/2022',
    },
    {
        key: '3',
        Level: '3',
        NameInGame: '32',
        Nation: 'Việt Nam',
        AcitonLast: '13:00 - 01/01/2022',
        Day: '01/01/2022',
    },
    {
        key: '4',
        Level: '4',
        NameInGame: '32',
        Nation: 'Việt Nam',
        AcitonLast: '13:00 - 01/01/2022',
        Day: '01/01/2022',
    },
];

const columns = [
    {
        title: 'Level',
        dataIndex: 'Level',
        key: 'Level',
    },
    {
        title: 'Số sao đạt được',
        dataIndex: 'NameInGame',
        key: 'NameInGame',
    },
    {
        title: 'Tổng lần chơi',
        dataIndex: 'Nation',
        key: 'Nation',
    },
    {
        title: 'số Token kiếm được',
        dataIndex: 'Level',
        key: 'Level',
    },
    {
        title: 'số Gold kiếm được',
        dataIndex: 'AcitonLast',
        key: 'AcitonLast',
    },
    {
        title: 'Lần chơi gần nhất',
        dataIndex: 'Day',
        key: 'Day',
    },
];

const BoxInfoHero = () => {


    const fakeDataInfoHero: Info[] =
        [
            { name: 'Số lượng hero:', value: 100 },
            { name: 'Hero có rank cao nhất:', value: 'BE+' },
            { name: 'Giới hạn reward kiếm được 1 ngày:', value: '10000 MXY, 100000 Golds' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin Hero của người dùng' listInfo={fakeDataInfoHero} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách hero của người chơi</h3>
                <div className="table-filter">
                    <div className="table-filter__search my-3">
                        <SearchBox placeholder="Nhập ID của hero " />
                    </div>
                    <div className="table-filter__select my-3">
                        <p>abc</p>
                    </div>
                    <div className="table-custom my-5">
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoHero
