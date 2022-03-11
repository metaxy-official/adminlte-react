import React from 'react';
import { ContentHeader } from '@components';
import SearchBox from '@app/components/searchbox/SearchBox';
import { Link } from 'react-router-dom';
import TableCustom from '@app/components/table/Table';
import PlusIcon from '../static/icon/plus.svg';

interface DataType {
  key: number | string;
  name: string;
  creator: string;
  createdDate: string;
}

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    creator: 'LongTT',
    createdDate: '01/01/2022'
  },
  {
    key: '2',
    name: 'Jim Green',
    creator: 'LongTT',
    createdDate: '01/01/2022'
  },
  {
    key: '3',
    name: 'Joe Black',
    creator: 'LongTT',
    createdDate: '01/01/2022'
  },
  {
    key: '4',
    name: 'Disabled User',
    creator: 'LongTT',
    createdDate: '01/01/2022'
  }
];
const SubMenu = () => {
  return (
    <div className="sub-menu">
      <ContentHeader title="Danh sách kiểu người dùng" />
      <section className="content">
        <div className="container-fluid">
          <div className="header-box">
            <div className="header-box__search">
              <SearchBox placeholder="Nhập tên kiểu người dùng" />
            </div>
            <Link
              to="/kieu-nguoi-dung/tao-kieu-nguoi-dung"
              className="header-box__btn"
            >
              <img src={PlusIcon} alt="icon" />
              <p>Tạo kiểu người dùng</p>
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <TableCustom dataSource={dataSource} />
        </div>
      </section>
    </div>
  );
};

export default SubMenu;
