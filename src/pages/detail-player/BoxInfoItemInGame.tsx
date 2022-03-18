import BoxComponent, { Info } from '@app/components/boxComponent'
import { Table } from 'antd'
import React from 'react'




const BoxInfoItemIngame = () => {

    const dataSource = [
        {
            key: '1',
            itemName: 'Soul',
            level: '1',
            amount: '10',
        },
        {
            key: '2',
            itemName: 'Soul',
            level: '1',
            amount: '10',
        },
        {
            key: '3',
            itemName: 'Soul',
            level: '1',
            amount: '10',
        },
        {
            key: '4',
            itemName: 'Soul',
            level: '1',
            amount: '10',
        },
        {
            key: '5',
            itemName: 'Soul',
            level: '1',
            amount: '10',
        },
        {
            key: '6',
            itemName: 'Soul',
            level: '1',
            amount: '10',
        },
        {
            key: '7',
            itemName: 'Soul',
            level: '1',
            amount: '10',
        },
    ];

    const columns = [
        {
            title: 'Vật Phẩm',
            dataIndex: 'itemName',
            key: 'itemName',
        },
        {
            title: 'Level',
            dataIndex: 'level',
            key: 'level',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];

    const fakeDataBoxInfoStory: Info[] =
        [
            { name: 'Số MXY trong game:', value: '10000 MXY' },
            { name: 'Số Gold trong game:', value: '1000000 Gold' },
            { name: 'Số Soul trong game:', value: '100 Soul' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin vật phẩm trong game' listInfo={fakeDataBoxInfoStory} />
            <div className="table-detail">
                <div className="table-filter">
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

export default BoxInfoItemIngame
