import BoxComponent, { Info } from '@app/components/boxComponent';
import ChangeHistoryModal, { dataHistoryItem } from '@app/components/modal/ChangeHistoryModal';
import React, { useState } from 'react'




const BoxInfoBasic = () => {


    const dataHistory: dataHistoryItem[] = [
        {
            key: '1',
            numberChange: '1',
            title: ' bug',
            statusSolution: true,
            action: 'Đã cảnh Báo user',
            note: '',
            lastUpdate: '13:00 - 01/01/2022',
            userChange: 'Long Tran Thanh',
        },
        {
            key: '2',
            numberChange: '2',
            title: ' notConfirm',
            statusSolution: false,
            action: '',
            note: 'Chờ đánh giá',
            lastUpdate: '13:00 - 01/01/2022',
            userChange: 'Long Tran Thanh',
        },
    ]

    const columnHistory = [
        {
            title: 'Lần thay đổi',
            dataIndex: 'numberChange',
            key: 'numberChange',
        },
        {
            title: 'đánh giá nghi vấn',
            dataIndex: 'title',
            key: 'title',
            render: (title: string) => {
                if (title === 'notConfirm') {
                    return <div className="status-not-active">Chưa đánh giá</div>
                }
                if (title === 'bug') {
                    return <div className="status-error">Chưa đánh giá</div>
                }
                return <div className="status-actived">An toàn</div>

            },
        },
        {
            title: 'Trạng thái',
            dataIndex: 'statusSolution',
            key: 'statusSolution',
            render: (event: boolean) => {
                if (event) {
                    return <div className="status-actived">Đã xử lí</div>
                }
                return <div className="status-not-active">Chưa xử lí</div>

            },
        },
        {
            title: 'Phương án xử lí',
            dataIndex: 'action',
            key: 'action',
        },
        {
            title: 'Ghi chú',
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: 'Thời gian thay đổi',
            dataIndex: 'lastUpdate',
            key: 'lastUpdate',
        },
        {
            title: 'Người thay đổi',
            dataIndex: 'userChange',
            key: 'userChange',
        },
    ]

    const dataInfo: Info[] = [
        {
            name: 'Tổng thời gian hoạt động:',
            value: '1200 giờ'
        },
        {
            name: 'Lần hoạt động gần nhất:',
            value: '13:00 - 01/01/2022'
        },
        {
            name: 'Trạng thái:',
            value: 'Dừng hoạt động'
        },
        {
            name: 'Lí do:',
            value: 'Người chơi vi phạm nhiều lần'
        },
        {
            name: 'Lần cuối sửa đổi:',
            value: '13:30 - 01/01/2022, Long Tran Thanh'
        },
        {
            name: 'Ghi chú:',
            value: 'Chưa cập nhật'
        },
        {
            name: 'Ngày tham gia:',
            value: '01/01/2022'
        },
    ]


    // status modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="container-fuild">
            <BoxComponent title="Thông tin cơ bản" handleEdit={showModal} listInfo={dataInfo} />
            <ChangeHistoryModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                dataHistory={dataHistory}
                columnHistory={columnHistory}
            />
        </div>
    )
}

export default BoxInfoBasic
