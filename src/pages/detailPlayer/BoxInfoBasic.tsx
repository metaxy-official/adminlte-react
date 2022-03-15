import { DataBasicInfo } from '@app/utils/types'
import React from 'react'
import { ReactComponent as EditIcon } from '../../static/icon/edit.svg';


interface DataBasicInfoProps {
    data: DataBasicInfo
}

const BoxInfoBasic = (props: DataBasicInfoProps) => {
    const { data } = props
    return (
        <div className="box-information">
            <div className="infor-header">
                <p>Thông tin cơ bản</p>
                <div className="infor-header-btn">
                    <EditIcon fill="#2d7ff9" />
                    <p>Chỉnh sửa</p>
                </div>
            </div>
            <div className="infor-body">
                <div className="infor-body-box">
                    <p className="infor-body-box__title">Tổng thời gian hoạt động:</p>
                    <p className="infor-body-box__des">{data.timeActive}</p>
                </div>
                <div className="infor-body-box">
                    <p className="infor-body-box__title">Lần hoạt động gần nhất:</p>
                    <p className="infor-body-box__des">{data.latestInGame}</p>
                </div>
                <div className="infor-body-box">
                    <p className="infor-body-box__title">Trạng thái hoạt động:</p>
                    <p className="infor-body-box__des">{data.statusActive ? 'Đang hoạt động' : 'Không hoạt động'}</p>
                </div>
                <div className="infor-body-box">
                    <p className="infor-body-box__title">Ghi chú:</p>
                    <p className="infor-body-box__des">{data.note}</p>
                </div>
                <div className="infor-body-box">
                    <p className="infor-body-box__title">Ngày tham gia:</p>
                    <p className="infor-body-box__des">{data.date}</p>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoBasic
