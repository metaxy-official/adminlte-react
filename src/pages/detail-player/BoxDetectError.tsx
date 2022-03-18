import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BoxComponent, { Info } from '@app/components/boxComponent'
import { DatePicker, Table } from 'antd'
import ThreeDot, { ItemMoreOption } from '@app/components/btnThreeDot';
import DetailErrorModal from '@app/components/modal/DetailErrorModal';
import watchmoreIcon from "../../static/icon/watch-more.svg";
import changeStatusIcon from "../../static/icon/change-status.svg";

const { RangePicker } = DatePicker;


const BoxDetectError = () => {

    const navigate = useNavigate();
    // state for modal detail
    const [isShowModal, setIsShowModal] = useState<string>();
    const handleOpenModal = (value?: string) => {
        setIsShowModal(value);
    };
    const handleOk = () => {
        setIsShowModal('');
    };
    const handleCancel = () => {
        setIsShowModal('');
    };

    const listItem: ItemMoreOption[] = [
        {
            key: 'detailError', name: 'Xem chi tiết', icon: watchmoreIcon, onClick: handleOpenModal
        },
        {
            key: 'editInfo', name: 'Xem Lịch sử thay đổi', icon: watchmoreIcon, onClick: () => {
                navigate('/nguoi-dung/chi-tiet-nguoi-dung')
            }
        },
        { key: 'resetPass', name: 'Cấp mật khẩu', icon: '', onClick: handleOpenModal },
        {
            name: 'Đổi Trạng thái', icon: changeStatusIcon, onClick: () => {
                navigate('/nguoi-dung/chi-tiet-nguoi-dung')
            }
        },
    ]

    const dataSource = [
        {
            key: '1',
            numberKey: '#001',
            title: ' Kiếm quá nhiều MXY',
            date: '13:00 - 01/01/2022',
            confirmSolution: 'notConfirm',
            statusSolution: false,
            action: '',
            note: 'Chờ đánh giá',
            lastUpdate: '13:00 - 01/01/2022, Longtt',

        },
        {
            key: '2',
            numberKey: '#002',
            title: ' Claim quá nhiều MXY',
            date: '13:00 - 01/01/2022',
            confirmSolution: 'notConfirm',
            statusSolution: false,
            action: '',
            note: 'An toàn',
            lastUpdate: '13:00 - 01/01/2022, Longtt',
        },
        {
            key: '3',
            numberKey: '#003',
            title: ' Kiếm quá nhiều Gold',
            date: '13:00 - 01/01/2022',
            confirmSolution: 'bug',
            statusSolution: true,
            action: 'Đã cảnh Báo user',
            note: '',
            lastUpdate: '13:00 - 01/01/2022, Longtt',
        },
        {
            key: '4',
            numberKey: '#004',
            title: ' Chi tiêu quá nhiều',
            date: '13:00 - 01/01/2022',
            confirmSolution: 'bug',
            statusSolution: true,
            action: 'đã fix bug #1234',
            note: '',
            lastUpdate: '13:00 - 01/01/2022, Longtt',
        },
        {
            key: '5',
            numberKey: '#005',
            title: ' Đạt level cao ',
            date: '13:00 - 01/01/2022',
            confirmSolution: 'clear',
            statusSolution: true,
            action: '',
            note: 'An toàn',
            lastUpdate: '13:00 - 01/01/2022, Longtt',
        },
    ];

    const columns = [
        {
            title: 'Mã nghi vấn',
            dataIndex: 'numberKey',
            key: 'numberKey',
        },
        {
            title: 'Nghi vấn',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Thời gian phát hiện',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'đánh giá nghi vấn',
            dataIndex: 'confirmSolution',
            key: 'confirmSolution',
            render: (event: string) => {
                if (event === 'notConfirm') {
                    return <div className="status-not-active">Chưa đánh giá</div>
                }
                if (event === 'bug') {
                    return <div className="status-error">Chưa đánh giá</div>
                }
                return <div className="status-actived">An toàn</div>

            },

        },
        {
            title: 'trạng thái xử lí',
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
            title: 'Lần Cuối sửa',
            dataIndex: 'lastUpdate',
            key: 'lastUpdate',
        },
        {
            title: "",
            dataIndex: "key",
            render: () => <ThreeDot listItem={listItem} modals={
                <>
                    <DetailErrorModal
                        isModalVisible={isShowModal === 'detailError'}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    />
                </>
            }
            />
        }
    ];

    const fakeDataInfoHero: Info[] =
        [
            { name: 'Trạng thái hoạt động:', value: true },
            { name: 'Tổng số nghi vấn vị phạm:', value: 100 },
            { name: 'Nghi vấn phát hiện nhiều nhất:', value: 'Claim quá nhiều MXY, Chi tiêu lớn trong game' },
            { name: 'Lần phát hiện gần nhất:', value: '13:00 - 01/01/2022' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin nghi vấn vi phạm' listInfo={fakeDataInfoHero} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách nghi vấn vi phạm của người chơi</h3>
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

export default BoxDetectError
