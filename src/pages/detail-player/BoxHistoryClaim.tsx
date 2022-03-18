import React from 'react'
import BoxComponent, { Info } from '@app/components/boxComponent'
import { DatePicker, Table } from 'antd'


const { RangePicker } = DatePicker;

const BoxHistoryClaim = () => {

    const dataSource = [
        {
            key: '1',
            event: 'Deposit',
            totalToken: '250 MXY',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
        {
            key: '2',
            event: 'Deposit',
            totalToken: '250 MXY',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
        {
            key: '3',
            event: 'Deposit',
            totalToken: '250 MXY',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
        {
            key: '4',
            event: 'Claim',
            totalToken: '250 MXY',
            transactionHash: '0x7ca7e8...572af33f',
            date: '13:00 - 01/01/2022'
        },
        {
            key: '5',
            event: 'Claim',
            totalToken: '250 MXY',
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
                if (event === 'Deposit') {
                    return <div className="status-actived">Deposit</div>
                }
                return <div className="status-not-active">Claim</div>

            },
        },
        {
            title: 'Tổng Số Token',
            dataIndex: 'totalToken',
            key: 'totalToken',
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
            { name: 'Tổng giao dịch thực hiện:', value: '506 lần' },
            { name: 'Khối lượng giao dịch:', value: '1000 MXY' },
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

export default BoxHistoryClaim
