import React, { useEffect, useState } from 'react'
import { ContentHeader } from '@app/components'
import SearchBox from '@app/components/searchbox/SearchBox'
import { useNavigate } from 'react-router-dom';
import ThreeDot, { ItemMoreOption } from '@app/components/btnThreeDot';
import ChangeStatusModal from '@app/components/modal/ChangeStatusPlayer';
import { formatTime, getListPlayer, shortAddress } from '@app/utils';
import { DataListPlayerProp } from '@app/utils/types';
import TableCustom from '@app/components/table/Table';
import changeStatusIcon from "../../static/icon/change-status.svg";
import watchmoreIcon from "../../static/icon/watch-more.svg";

const ManagePlayer = () => {
    const [id, setId] = useState<string>("");
    const handleChangeId = (id: string = "") => setId(id);
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
    const [dataPlayer, setDataPlayer] = useState<DataListPlayerProp[]>([])

    useEffect(() => {
        const getDataPlayer = async () => {
            const data = await getListPlayer();
            setDataPlayer(data)
        }
        getDataPlayer();
    }, [])


    const listItem: ItemMoreOption[] = [
        {
            key: 'detailInfo', name: 'Xem chi tiết', icon: watchmoreIcon, onClick: () => {
                navigate(`/nguoi-choi/chi-tiet-nguoi-choi/${id}`)
            }
        },
        { key: 'changeStatus', name: 'Đổi Trạng thái', icon: changeStatusIcon, onClick: handleOpenModal }
    ]

    const columns = [
        {
            title: 'Địa chí ví',
            dataIndex: 'address',
            key: 'address',
            render: (transactionHash: string) => <a href={`${transactionHash}`}>{shortAddress(transactionHash)}</a>
        },
        {
            title: 'Tên trong game',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Quốc Gia',
            dataIndex: 'regionId',
            key: 'regionId',
        },
        {
            title: 'Level Cao nhất',
            dataIndex: 'highestLevel',
            key: 'highestLevel',
        },
        {
            title: 'Lần Hoạt động gần nhất',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            render: (date: string) => <p>{formatTime(date)}</p>
        },
        {
            title: 'Ngày tham gia',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date: string) => <p>{formatTime(date)}</p>
        },
        {
            title: 'Trạng thái',
            dataIndex: 'banned',
            key: 'banned',
            render: (status: boolean) => (
                <>
                    {status ? (

                        <div className="status-not-active">Dừng hoạt động</div>
                    ) : (
                        <div className="status-actived">Đang hoạt động</div>
                    )}
                </>
            )
        },
        {
            title: "",
            dataIndex: "id",
            render: (id: string) => (
                <ThreeDot onChangeID={handleChangeId} listItem={listItem} id={id} />
            )
        }
    ]

    return (
        <section className="content">
            <div className="container-fluid">
                <ContentHeader title="Danh sách người chơi" />
                <ChangeStatusModal
                    isModalVisible={isShowModal === 'changeStatus'}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />
                <div className="header-box">
                    <div className="header-box__search">
                        <SearchBox
                            placeholder="Nhập tên trong game hoặc địa chỉ ví của người dùng"

                        />
                    </div>
                </div>
                <div className="table-custom my-5">
                    <TableCustom data={dataPlayer.map((item, index) => { return { ...item, key: index } })} columns={columns} />
                </div>
            </div>
        </section>
    )
};

export default ManagePlayer;
