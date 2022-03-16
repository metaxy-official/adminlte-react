/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { DatePicker, Table } from 'antd'
import BoxComponent, { Info } from '@app/components/boxComponent'
import SearchBox from '@app/components/searchbox/SearchBox'

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


const BoxInfoStoryMode = () => {

    function onChange(date: any, dateString: any) {
        console.log(date, dateString);
    }

    const fakeDataBoxInfoStory: Info[] =
        [
            { name: 'Level chơi cao nhất:', value: 506 },
            { name: 'Tổng sao đạt được:', value: 1000 },
            { name: 'Tổng số reward kiếm được:', value: '10000 MXY, 100000 Golds' },
            { name: 'Lần chơi gần nhất:', value: '13:00 - 01/01/2022' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin Story Mode' listInfo={fakeDataBoxInfoStory} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách level người chơi đã chơi</h3>
                <div className="table-filter">
                    <div className="table-filter__search my-3">
                        <SearchBox placeholder="Nhập level của người chơi" />
                    </div>
                    <div className="table-filter__date my-3">
                        <DatePicker onChange={onChange} placeholder="Từ ngày" className="mr-3" />
                        <DatePicker onChange={onChange} placeholder="Đến ngày" />
                    </div>
                    <div className="table-custom my-5">
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoStoryMode
