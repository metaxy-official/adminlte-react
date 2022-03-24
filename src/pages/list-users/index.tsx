/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import SearchBox from "@app/components/searchbox/SearchBox";
import BtnCreate from "@app/components/btnCreate";
import {DataListUserProp, ItemRole} from "@app/utils/types";
import {Select} from "antd";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import {useNavigate} from "react-router-dom";
import DeleteUserModal from "@app/components/modal/DeleteUser";
import {useEffect, useState} from "react";
import WarningChangePassModal from "@app/components/modal/WarningChangePassword";
import {formatTime, getListUsers} from "@app/utils";
import watchmoreIcon from "../../static/icon/watch-more.svg";
import editIcon from "../../static/icon/edit.svg";
import deleteIcon from "../../static/icon/delete.svg";
import resetPassIcon from "../../static/icon/reset-pass.svg";
import changeStatusIcon from "../../static/icon/change-status.svg";

const {Option} = Select;

const ListUser = () => {
  const navigate = useNavigate();
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  // state and functions for getID
  const [id, setId] = useState<string>("");
  const handleChangeId = (id: string = "") => setId(id);
  // const [textSearch, setTextSearch] = useState<string>();
  const handleSearch = (value: String) => console.log(value);
  // state for modal detail
  const [isShowModal, setIsShowModal] = useState<string>();
  const handleOpenModal = (value?: string) => {
    setIsShowModal(value);
  };
  const handleOk = () => {
    setIsShowModal("");
  };
  const handleCancel = () => {
    setIsShowModal("");
  };
  // get data users
  const [dataUsers, setDataUsers] = useState<DataListUserProp[]>([]);

  useEffect(() => {
    const getDataUsers = async () => {
      const data = await getListUsers();
      setDataUsers(data);
    };
    getDataUsers();
  }, []);

  const listItem: ItemMoreOption[] = [
    {
      key: "detailInfo",
      name: "Xem chi tiết",
      icon: watchmoreIcon,
      onClick: () => {
        navigate(`/nguoi-dung/chi-tiet-nguoi-dung/${id}`);
      }
    },
    {
      key: "editInfo",
      name: "Chỉnh sửa",
      icon: editIcon,
      onClick: () => {
        navigate("/nguoi-dung/chi-tiet-nguoi-dung");
      }
    },
    {
      key: "resetPass",
      name: "Cấp mật khẩu",
      icon: resetPassIcon,
      onClick: handleOpenModal
    },
    {
      name: "Đổi Trạng thái",
      icon: changeStatusIcon,
      onClick: () => {
        navigate("/nguoi-dung/chi-tiet-nguoi-dung");
      }
    },
    {key: "delete", name: "Xóa", icon: deleteIcon, onClick: handleOpenModal}
  ];
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      render: (text: string) => <p>{text}</p>
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Vai trò",
      dataIndex: "roles",
      render: (role: ItemRole[]) =>
        role.map((item: ItemRole) => <p key="fullName">{item.name}</p>)
    },
    {
      title: "Ngày tham gia",
      dataIndex: "createdAt",
      render: (date: string) => <p>{formatTime(date)}</p>
    },
    {
      title: "Trạng thái",
      dataIndex: "isActive",
      render: (status: boolean) => (
        <>
          {status ? (
            <div className="status-actived">Đang hoạt động</div>
          ) : (
            <div className="status-not-active">Dừng hoạt động</div>
          )}
        </>
      )
    },
    {
      title: "",
      dataIndex: "id",
      render: (id: string) => (
        <ThreeDot onChangeID={handleChangeId} listItem={listItem} id={id} />
      )
    }
  ];
  return (
    <div className="list-user-page">
      <ContentHeader title="Danh sách người dùng" />
      <DeleteUserModal
        isModalVisible={isShowModal === "delete"}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <WarningChangePassModal
        isModalVisible={isShowModal === "resetPass"}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <section className="content">
        <div className="container-fluid">
          <div className="header-box">
            <div className="header-box__search">
              <SearchBox
                onSearch={handleSearch}
                placeholder="Nhập họ tên hoặc email của người dùng"
              />
            </div>
            <BtnCreate
              path="/kieu-nguoi-dung/tao-nguoi-dung"
              content="Tạo người dùng"
            />
          </div>
          <div className="box-filter">
            <div className="box-filter__left">
              <Select
                defaultValue="Vai trò người dùng"
                style={{width: 180}}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="box-filter__right">
              <Select
                defaultValue="Trạng thái"
                style={{width: 120}}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div className="mt-2">
            <TableCustom data={dataUsers} columns={columns} dataSelection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListUser;
