
import React from 'react';
import { DataBasicInfo, DataHeaderInfo } from '@app/utils/types';
import { Tabs } from 'antd';
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
        </div>
    );
}

export default DetailPlayer;
