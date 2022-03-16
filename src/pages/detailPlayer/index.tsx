
import React from 'react';
import { DataBasicInfo, DataHeaderInfo } from '@app/utils/types';
import { Tabs } from 'antd';
import BoxInfoBasic from './BoxInfoBasic';
import BoxInfoHeader from './BoxInfoHeader';
import BoxInfoInGame from './BoxInfoInGame';

const { TabPane } = Tabs;

function callback(key: any) {
    console.log(key);
}

function DetailPlayer() {

    const DataHeaderInfo: DataHeaderInfo =
    {
        name: 'Ltrannnn',
        address: '0x7ef6c419ecabcmdksc9ee',
        nation: 'Việt Nam',
        role: 'Người chơi',
    }
    const DataBasicInfo: DataBasicInfo =
    {
        timeActive: '1200 giờ',
        latestInGame: '13:00 - 01/01/2022',
        statusActive: true,
        note: 'Chưa cập nhật',
        date: '01/01/2022',
    }

    return (
        <div className="container-fuild detail-player">
            <BoxInfoHeader data={DataHeaderInfo} />
            <div className="tabs">
                <Tabs defaultActiveKey="1" onChange={callback} className="tabs--outbox">
                    <TabPane tab="Thông tin cơ bản" key="1">
                        <BoxInfoBasic data={DataBasicInfo} />
                    </TabPane>
                    <TabPane tab="Thông tin trong game" key="2">
                        <BoxInfoInGame />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default DetailPlayer;
