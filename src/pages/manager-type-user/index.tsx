/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ContentHeader} from "@components";
import SearchBox from "@app/components/searchbox/SearchBox";
import TableCustom from "@app/components/table/Table";
import BtnCreateNewUser from "@app/components/btnCreate";
import {ApplicationRootState} from "@app/utils/types";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import watchmoreIcon from "../../static/icon/watch-more.svg";
import deleteIcon from "../../static/icon/delete.svg";
import DeleteUserTypeModal from "@app/components/modal/DeleteTypeUser";
import {deleteRoleUser, formatTime, getRoles} from "@app/utils";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {updateUserRoles} from "@app/store/reducers/user";

const ManagerTypeUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state for modal detail
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const handleOpenModalDelete = () => {
    setIsShowModalDelete(true);
  };

  const handleCancel = () => {
    setIsShowModalDelete(false);
  };
  const [idUser, setIdUser] = useState<string>("");
  const handleChangeId = (id: string = "") => setIdUser(id);
  const listItem: ItemMoreOption[] = [
    {
      name: "Xem chi tiết",
      icon: watchmoreIcon,
      onClick: () => {
        navigate(`/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung/${idUser}`);
      }
    },
    {name: "Xóa", icon: deleteIcon, onClick: handleOpenModalDelete}
  ];
  const handleDeleteRoleUser = async () => {
    try {
      const data = await deleteRoleUser(idUser);
      const dataRoles = await getRoles();
      dispatch(updateUserRoles(dataRoles));
      toast.success(`Xóa kiểu người ${data.name} dùng thành công!`);
      // getDataUsers();
      handleCancel();
    } catch (error: any) {
      toast.error(`Xóa kiểu người dùng thất bại!`);
      handleCancel();
      console.log(error.message);
    }
  };

  const columns = [
    {
      title: "Kiểu người dùng",
      dataIndex: "name",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Người tạo",
      dataIndex: "createdBy",
      render: (person: any) => <p>{person?.fullName}</p>
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      render: (date: string) => <p>{formatTime(date)}</p>
    },
    {
      title: "",
      dataIndex: "id",
      render: (id: string) => (
        <ThreeDot onChangeID={() => handleChangeId(id)} listItem={listItem} />
      )
    }
  ];
  const dataRoleUser = useSelector(
    (state: ApplicationRootState) => state.user.dataRoles
  );

  const dataOptionsRole: any = dataRoleUser.filter(
    (item) => item.id === idUser
  )[0]?.name;
  return (
    <div className="manager-user">
      <ContentHeader title="Danh sách kiểu người dùng" />
      <DeleteUserTypeModal
        dataOptionsRole={dataOptionsRole}
        isModalVisible={isShowModalDelete}
        handleOk={handleDeleteRoleUser}
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
            <TableCustom columns={columns} data={dataRoleUser} dataSelection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagerTypeUser;
