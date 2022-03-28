/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ContentHeader} from "@components";
import SearchBox from "@app/components/searchbox/SearchBox";
import TableCustom from "@app/components/table/Table";
import BtnCreateNewUser from "@app/components/btnCreate";
import { DataRolesUser} from "@app/utils/types";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import watchmoreIcon from "../../static/icon/watch-more.svg";
import editIcon from "../../static/icon/edit.svg";
import deleteIcon from "../../static/icon/delete.svg";
import DeleteUserTypeModal from "@app/components/modal/DeleteTypeUser";
import { formatTime, getRoles } from "@app/utils";

const ManagerTypeUser = () => {

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
  const [idUser, setIdUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleChangeId = (id: string = "") => setIdUser(id);
  const listItem: ItemMoreOption[] = [
    {
      name: "Xem chi tiết",
      icon: watchmoreIcon,
      onClick: () => {
        navigate(`/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung/${idUser}`);
      }
    },
    {
      name: "Chỉnh sửa",
      icon: editIcon,
      onClick: () => {
        navigate("/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung");
      }
    },
    {name: "Xóa", icon: deleteIcon, onClick: handleOpenModalDelete}
  ];

  const columns = [
    {
      title: "Kiểu người dùng",
      dataIndex: "name",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Người tạo",
      dataIndex: "createdBy",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      render: (date: string) => <p>{formatTime(date)}</p>
    },
    {
      title: "",
      dataIndex: "id",
      render: (id:string) => <ThreeDot onChangeID={handleChangeId} id={id} listItem={listItem} />
    }
  ];

  const [dataTypeUser, setDataTypeUser] = useState<DataRolesUser[]>()
  useEffect(() => {
    const getDataUsers = async () => {
      setLoading(true)
      const data = await getRoles();
      setDataTypeUser(data);
      setLoading(false)
    };
    getDataUsers();
  }, []);
  return (
    <div className="manager-user">
      <ContentHeader title="Danh sách kiểu người dùng" />
      <DeleteUserTypeModal
        isModalVisible={isShowModalDelete}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
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
            <TableCustom columns={columns} data={dataTypeUser} dataSelection loading={loading} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagerTypeUser;
