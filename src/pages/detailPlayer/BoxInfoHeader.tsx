import { DataHeaderInfo } from '@app/utils/types';
import React from 'react'
import { ReactComponent as EditIcon } from '../../static/icon/edit.svg';

interface BoxInfoHeaderProps {
    data: DataHeaderInfo
}

const BoxInfoHeader = (props: BoxInfoHeaderProps) => {
    const { data } = props
    return (
        <div className="box-information">
            <div className="infor-header">
                <p>{data.name}</p>
                <div className="infor-header-btn">
                    <EditIcon fill="#2d7ff9" />
                    <p>Chỉnh sửa</p>
                </div>
            </div>
            <div className="infor-body">
                <div className="infor-body-box">
                    <p className="infor-body-box__title">Địa chỉ ví:</p>
                    <p className="infor-body-box__des">{data.address}</p>
                </div>
                <div className="infor-body-box">
                    <p className="infor-body-box__title">Quốc gia:</p>
                    <p className="infor-body-box__des">{data.nation}</p>
                </div>
                <div className="infor-body-box">
                    <p className="infor-body-box__title">Vai trò:</p>
                    <p className="infor-body-box__des">{data.role}</p>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoHeader
