/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import { ContentHeader } from "@components";
import TableCustom from "@app/components/table/Table";
import SearchBox from "@app/components/searchbox/SearchBox";
import BtnCreate from "@app/components/btnCreate";
import { DataListUserProp } from "@app/utils/types";
import { Select } from "antd";
import ThreeDot, { ItemMoreOption } from "@app/components/btnThreeDot";
import { useNavigate } from "react-router-dom";
import DeleteUserModal from "@app/components/modal/DeleteUser";
import { useEffect, useState } from "react";
import WarningChangePassModal from "@app/components/modal/WarningChangePassword";
import { getListUsers } from "@app/utils/helpers";
import watchmoreIcon from "../../static/icon/watch-more.svg";
import editIcon from "../../static/icon/edit.svg";
import deleteIcon from "../../static/icon/delete.svg";
import resetPassIcon from "../../static/icon/reset-pass.svg";
import changeStatusIcon from "../../static/icon/change-status.svg";

const { Option } = Select;

const ListUser = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  const data: DataListUserProp[] = [
    {
      key: "1",
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      role: "Marketing",
      dateActived: "01/01/2022",
      status: true
    },
    {
      key: "2",
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      role: "Marketing",
      dateActived: "01/01/2022",
      status: true
    },
    {
      key: "3",
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      role: "Marketing",
      dateActived: "01/01/2022",
      status: false
    }
  ];

  const navigate = useNavigate();
  // state for modal detail
  const [isShowModal, setIsShowModal] = useState<string>();
  const handleOpenModal = (value?: string) => {
    setIsShowModal(value);
  };
  const handleOk = () => {
    setIsShowModal('');
  };
  const handleCancel = () => {
    setIsShowModal('');
  };
  // get data users
  const [dataUsers, setDataUsers] = useState<any[]>()
  useEffect(() => {
    const getDataUsers = async () => {
      const data:any = await getListUsers();
      setDataUsers(data)
    }
    getDataUsers();
  }, [])
  console.log('dataUsers', dataUsers)

  const listItem: ItemMoreOption[] = [
    {
      key: 'detailInfo', name: 'Xem chi tiết', icon: watchmoreIcon, onClick: () => {
        navigate('/nguoi-dung/chi-tiet-nguoi-dung')
      }
    },
    {
      key: 'editInfo', name: 'Chỉnh sửa', icon: editIcon, onClick: () => {
        navigate('/nguoi-dung/chi-tiet-nguoi-dung')
      }
    },
    { key: 'resetPass', name: 'Cấp mật khẩu', icon: resetPassIcon, onClick: handleOpenModal },
    {
      name: 'Đổi Trạng thái', icon: changeStatusIcon, onClick: () => {
        navigate('/nguoi-dung/chi-tiet-nguoi-dung')
      }
    },
    { key: 'delete', name: 'Xóa', icon: deleteIcon, onClick: handleOpenModal }
  ]
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Vai trò",
      dataIndex: "role"
    },
    {
      title: "Ngày tham gia",
      dataIndex: "dateActived"
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
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
      dataIndex: "key",
      render: () => <ThreeDot listItem={listItem} />
    }
  ];
  return (
    <div className="list-user-page">
      <ContentHeader title="Danh sách người dùng" />
      <DeleteUserModal
        isModalVisible={isShowModal === 'delete'}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <WarningChangePassModal
        isModalVisible={isShowModal === 'resetPass'}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <section className="content">
        <div className="container-fluid">
          <div className="header-box">
            <div className="header-box__search">
              <SearchBox placeholder="Nhập họ tên hoặc email của người dùng" />
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
                style={{ width: 180 }}
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
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div className="mt-2">
            <TableCustom data={data} columns={columns} dataSelection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListUser;
