/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentHeader } from "@components";
import SearchBox from "@app/components/searchbox/SearchBox";
import TableCustom from "@app/components/table/Table";
import BtnCreateNewUser from "@app/components/btnCreate";
import { DataManagerUserProp } from "@app/utils/types";
import ThreeDot, { ItemMoreOption } from "@app/components/btnThreeDot";
import watchmoreIcon from "../../static/icon/watch-more.svg";
import editIcon from "../../static/icon/edit.svg";
import deleteIcon from "../../static/icon/delete.svg";
import DeleteUserTypeModal from "@app/components/modal/DeleteTypeUser";

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
      render: () => <ThreeDot listItem= {listItem} modals={
          <DeleteUserTypeModal
          isModalVisible={isShowModalDelete}
          handleOk={handleOk}
          handleCancel={handleCancel}
        /> 
      } 
      />
    }
  ];

  const navigate = useNavigate();
    // state for modal detail
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

  const listItem: ItemMoreOption[] = [
    {name: 'Xem chi tiết', icon: watchmoreIcon, onClick: () => {
      navigate('/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung')
    }},
    {name: 'Chỉnh sửa', icon: editIcon, onClick: () => {
      navigate('/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung')
    }},
    {name: 'Xóa', icon: deleteIcon, onClick: handleOpenModalDelete}
  ]



  return (
    <div className="manager-user">
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
            <TableCustom columns={columns} data={data} dataSelection={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagerUser;
