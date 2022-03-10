/* eslint-disable prettier/prettier */
import React from 'react';
import { ContentHeader } from '@components';
import SearchBox from '@app/components/searchbox/SearchBox';
import Table from '@app/components/table/Table';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import PlusIcon from '../static/icon/plus.svg';
// import '../styles/pages/sub-menu.scss';

const SubMenu = () => {
  return (
    <div>
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
          <Table />
        </div>
        <div className="d-flex flex-row justify-content-between px-3">
          <div>
            <p>Tổng: 2 kiểu người dùng</p>
          </div>
          <Pagination defaultCurrent={1} total={2} />
        </div>
      </section>
    </div>
  );
};

export default SubMenu;
