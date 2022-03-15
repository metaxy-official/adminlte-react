import React from 'react'
import { Tabs } from 'antd';
import BoxInfoHero from './BoxInfoHero';
import BoxInfoStoryMode from './BoxInfoStoryMode';
import BoxInfoItemIngame from './BoxInfoItemInGame';
import BoxInfoHistory from './BoxInfoHistory';
import BoxHistoryClaim from './BoxHistoryClaim';
import BoxDetectError from './BoxDetectError';

const { TabPane } = Tabs;

function hanndleChangeTab(key: any) {
    console.log(key);
}
const BoxInfoInGame = () => {

    return (
        <div className="box-information-ingame">
            <Tabs defaultActiveKey="1" onChange={hanndleChangeTab} className="tabs--inbox">
                <TabPane tab="Story Mode" key="1">
                    <BoxInfoStoryMode />
                </TabPane>
                <TabPane tab="Danh sách Hero" key="2">
                    <BoxInfoHero />
                </TabPane>
                <TabPane tab="Vật phẩm trong game" key="3">
                    <BoxInfoItemIngame />
                </TabPane>
                <TabPane tab="Lịch sử giao dịch" key="4">
                    <BoxInfoHistory />
                </TabPane>
                <TabPane tab="Lịch sử claim" key="5">
                    <BoxHistoryClaim />
                </TabPane>
                <TabPane tab="Nghi vấn vi phạm" key="6">
                    <BoxDetectError />
                </TabPane>
            </Tabs >
        </div >
    )
}

export default BoxInfoInGame
