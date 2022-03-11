/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import { DataBasicInfo, DataHeaderInfo } from '@app/utils/types';
import { Button, Tabs } from 'antd';
import React from 'react';
import BoxInfoBasic from './BoxInfoBasic';
import BoxInfoHeader from './BoxInfoHeader';

const { TabPane } = Tabs;

function callback(key: any) {
    console.log(key);
}

function DetailPlayer() {

    const fakeData1: DataHeaderInfo =
    {
        name: 'abc',
        address: '0x7ef6c419ecabcmdksc9ee',
        nation: 'Việt Nam',
        role: 'Người chơi',
    }
    const fakeData2: DataBasicInfo =
    {
        name: 'abc',
        address: '0x7ef6c419ecabcmdksc9ee',
        nation: 'Việt Nam',
        role: 'Người chơi',
    }

    return (
        <div className="container-fuild detail-player">
            <BoxInfoHeader data={fakeData1} />
            <div className="btn-control">
                <Button className="mr-2" shape="round">
                    Thông tin
                </Button>
                <Button className="ml-2" shape="round" type="primary">
                    Nhóm người dùng
                </Button>
            </div>
            <div className="tabs tabs--outbox">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Thông tin cơ bản" key="1">
                        <BoxInfoBasic data={fakeData2} />
                    </TabPane>
                    <TabPane tab="Thông tin trong game" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
            <div className="permission-box">
                <p>Thông tin quyền cơ bản</p>
            </div>
        </div>
    );
}

export default DetailPlayer;
