import React from "react";
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import SearchBox from "@app/components/searchbox/SearchBox";
import BtnCreateNewUser from "@app/components/btnCreate";
import {DataType} from "@app/utils/types";

const ListUser = () => {
  const data: DataType[] = [];
  return (
    <div className="list-user-page">
      <ContentHeader title="Danh sách người dùng" />
      <section className="content">
        <div className="container-fluid">
          <div className="header-box">
            <div className="header-box__search">
              <SearchBox placeholder="Nhập tên kiểu người dùng" />
            </div>
            <BtnCreateNewUser
              path="/kieu-nguoi-dung/tao-kieu-nguoi-dung"
              content="Tạo người dùng"
            />
          </div>
          <div className="mt-2">
            <TableCustom data={data} columns={[]} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListUser;
