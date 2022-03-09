/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';
import SearchBox from '@app/components/searchbox/SearchBox';
import PlusIcon from '../static/icon/plus.svg';
import '../styles/pages/sub-menu.scss';
import {Link} from 'react-router-dom';
import TableCustom from '@app/components/table/Table';

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
              to="/quan-li-nguoi-dung-1/tao-kieu-nguoi-dung"
              className="header-box__btn"
            >
              <img src={PlusIcon} alt="icon" />
              <p>Tạo kiểu người dùng</p>
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <TableCustom />
        </div>
      </section>
    </div>
  );
};

export default SubMenu;
