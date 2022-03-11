/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useState} from "react";
import {ContentHeader} from "@components";
import SearchBox from "@app/components/searchbox/SearchBox";
import TableCustom from "@app/components/table/Table";
import BtnCreateNewUser from "@app/components/btnCreate";
import {DataManagerUserProp} from "@app/utils/types";
import useOnClickOutside from "@app/hooks/useClickOutside";
import threeDotIcon from "../../static/icon/threedot.svg";
import MoreAction from "@app/components/moreAction/MoreAction";
import DeleteUserModal from "@app/components/modal/DeleteUser";

const ManagerUser = () => {
  const data: DataManagerUserProp[] = [
    {
      key: "1",
      name: "John Brown",
      creator: "LongTT",
      createdDate: "01/01/2022"
    },
    {
      key: "2",
      name: "Jim Green",
      creator: "LongTT",
      createdDate: "01/01/2022"
    },
    {
      key: "3",
      name: "Joe Black",
      creator: "LongTT",
      createdDate: "01/01/2022"
    },
    {
      key: "4",
      name: "Disabled User",
      creator: "LongTT",
      createdDate: "01/01/2022"
    }
  ];

  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsShowModal(-1));
  const [isShowModal, setIsShowModal] = useState<number>(-1);
  const handleShowModal = (key: number) => {
    setIsShowModal(key);
  };

  const columns = [
    {
      title: "Kiểu người dùng",
      dataIndex: "name",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Người tạo",
      dataIndex: "creator"
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate"
    },
    {
      title: "",
      dataIndex: "key",
      render: (key: any) => (
        <div className="btn" onClick={() => handleShowModal(key)}>
          <img src={threeDotIcon} alt="icon" />
          {isShowModal === key && (
            <MoreAction ref={ref} openDeleteModal={handleOpenModalDelete} />
          )}
        </div>
      )
    }
  ];
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const handleOpenModalDelete = () => {
    setIsShowModalDelete(true);
  };

  const handleOk = () => {
    setIsShowModalDelete(false);
  };

  const handleCancel = () => {
    setIsShowModalDelete(false);
  };
  return (
    <div className="manager-user">
      <DeleteUserModal
        isModalVisible={isShowModalDelete}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <ContentHeader title="Danh sách kiểu người dùng" />
      <section className="content">
        <div className="container-fluid">
          <div className="header-box">
            <div className="header-box__search">
              <SearchBox placeholder="Nhập tên kiểu người dùng" />
            </div>
            <BtnCreateNewUser
              path="/kieu-nguoi-dung/tao-kieu-nguoi-dung"
              content="Tạo kiểu người dùng"
            />
          </div>
          <div className="mt-2">
            <TableCustom columns={columns} data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagerUser;
