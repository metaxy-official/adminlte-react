/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import { Button } from 'antd';
import React from 'react';
import BoxInfoHeader from './BoxInfoHeader';

function DetailPlayer() {

    const fakeData = [
        {
            key: '1',
            AddressWallet: '0x7ef6c419ecabcmdksc9ee',
            Nation: 'Việt Nam',
            Role: 'Player',
        },
    ]
    console.log("🚀 ~ file: index.tsx ~ line 17 ~ DetailPlayer ~ fakeData", fakeData)

    return (
        <div className="container-detail-user">
            <BoxInfoHeader />
            <div className="btn-control">
                <Button className="mr-2" shape="round">
                    Thông tin
                </Button>
                <Button className="ml-2" shape="round" type="primary">
                    Nhóm người dùng
                </Button>
            </div>
            <div className="permission-box">
                <p>Thông tin quyền cơ bản</p>
            </div>
        </div>
    );
}

export default DetailPlayer;
