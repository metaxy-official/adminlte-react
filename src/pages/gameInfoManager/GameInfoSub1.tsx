/* eslint-disable react/react-in-jsx-scope */
import {Tabs} from 'antd';
import {ContentHeader} from '@components';
import '../../styles/pages/gameinfo.scss';
import TableCustom from '@app/components/table/Table';
import SearchBox from '@app/components/searchbox/SearchBox';
import TabContent from './TabContent';

const {TabPane} = Tabs;
function callback(key: any) {
  console.log(key);
}
const GameInfoSub1 = () => {
  return (
    <div className="gameinfo">
      <ContentHeader title="Vật phẩm trong game" />
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          <div>
            <TabContent />
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
      <div className="mt-2">
        <div className="mt-4 mb-4">
          <h5>Danh sách Gold Packs</h5>
        </div>
        <div className="header-box__search mb-4">
          <SearchBox placeholder="Nhập tên gói packs" />
        </div>
        <TableCustom />
      </div>
    </div>
  );
};

export default GameInfoSub1;
