import BoxComponent, { Info } from '@app/components/boxComponent'
import { DatePicker, Table } from 'antd'
import React from 'react'


const { RangePicker } = DatePicker;

const BoxInfoHistory = () => {

    const dataSource = [
        {
            key: '1',
            event: 'buy',
            itemName: 'Deluxe Chest',
            codeHero: '',
            level: '',
            price: '250 BUSD',
            from: '0x7ca7e8...5e08f33f',
            to: '0x7ca7e8...5e08f33f',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
        {
            key: '2',
            event: 'buy',
            itemName: 'Starter Chest',
            codeHero: '',
            level: '',
            price: '250 BUSD',
            from: '0x7ca7e8...5e08f33f',
            to: '0x7ca7e8...5e08f33f',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
        {
            key: '3',
            event: 'buy',
            itemName: 'Zigu',
            codeHero: '#1001',
            level: '10',
            price: '250 BUSD',
            from: '0x7ca7e8...5e08f33f',
            to: '0x7ca7e8...5e08f33f',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
        {
            key: '4',
            event: 'sell',
            itemName: 'Zogu',
            codeHero: '#1001',
            level: '10',
            price: '250 BUSD',
            from: '0x7ca7e8...5e08f33f',
            to: '0x7ca7e8...5e08f33f',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
        {
            key: '5',
            event: 'claim',
            itemName: '',
            codeHero: '',
            level: '',
            price: '250 MXY',
            from: '0x7ca7e8...5e08f33f',
            to: '0x7ca7e8...5e08f33f',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
    ];

    const columns = [
        {
            title: 'Sự kiện',
            dataIndex: 'event',
            key: 'event',
            render: (event: string) => {
                if (event === 'buy') {
                    return <div className="status-actived">Mua</div>
                } if (event === 'sell') {
                    return <div className="status-not-active">Bán</div>
                }
                return <div className="status-not-active">Claim</div>

            },
        },
        {
            title: 'Vật Phẩm',
            dataIndex: 'itemName',
            key: 'itemName',
        },
        {
            title: 'Mã Hero',
            dataIndex: 'codeHero',
            key: 'codeHero',
        },
        {
            title: 'Level',
            dataIndex: 'level',
            key: 'level',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Từ',
            dataIndex: 'from',
            key: 'from',
        },
        {
            title: 'Đến',
            dataIndex: 'to',
            key: 'to',
        },
        {
            title: 'Mã Giao Dịch',
            dataIndex: 'transactionHash',
            key: 'transactionHash',
        },
        {
            title: 'Ngày',
            dataIndex: 'date',
            key: 'date',
        },
    ];

    const fakeDataInfoHero: Info[] =
        [
            { name: 'Tổng giao dịch thực hiện::', value: '506 lần' },
            { name: 'Khối lượng giao dịch:', value: '10000 BUSD, 1000 MXY' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Lịch sử giao dịch' listInfo={fakeDataInfoHero} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách giao dịch của người chơi</h3>
                <div className="table-filter">
                    <div className="table-filter__select my-3">
                        <RangePicker />
                    </div>
                    <div className="table-custom my-5">
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoHistory
