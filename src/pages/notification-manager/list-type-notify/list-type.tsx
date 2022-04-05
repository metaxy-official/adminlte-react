/* eslint-disable no-debugger */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import {Select} from "antd";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import BtnCreate from "@app/components/btnCreate";
import {useEffect, useState} from "react";
import {INotificationType} from "@app/utils/types";
import {
  deleteNotificationType,
  formatTime,
  getDetailNotificationType,
  getNotificationTypes
} from "@app/utils";
import DeleteUserModal from "@app/components/modal/DeleteUser";
import DetailsNotify from "@app/components/modal/Details-notify";
import {toast} from "react-toastify";
import watchmoreIcon from "../../../static/icon/watch-more.svg";
import deleteIcon from "../../../static/icon/delete.svg";

const {Option} = Select;
const ListTypeNotification = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  const [dataNotificationType, setDataNotificationType] =
    useState<INotificationType[]>();
  const [detailNotificationType, setDetailNotificationType] =
    useState<INotificationType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [idNotify, setIdNotify] = useState<string>("");
  // state for modal detail
  const [isShowModal, setIsShowModal] = useState<string>("");
  const handleOpenModal = (key: string) => {
    setIsShowModal(key);
  };
  const handleOk = () => {
    setIsShowModal("");
  };
  const handleCancel = () => {
    setIsShowModal("");
  };

  const setIdAndGetDetailNotificationType = async (id: string) => {
    setIdNotify(id);
    const data: INotificationType = await getDetailNotificationType(id);
    setDetailNotificationType(data);
  };
  const getDataNotify = async () => {
    setLoading(true);
    const data = await getNotificationTypes();
    setDataNotificationType(data);
    setLoading(false);
  };
  useEffect(() => {
    getDataNotify();
  }, []);
  const handleDeleteUser = async () => {
    try {
      const data = await deleteNotificationType(idNotify);
      toast.success(`Xóa thể loại thông báo ${data.name} thành công`);
      getDataNotify();
      handleCancel();
    } catch (error: any) {
      toast.error("Tạo thể loại thông báo thất bại! Vui lòng thử lại");
      handleCancel();
    }
  };
  const listItem: ItemMoreOption[] = [
    {
      key: "detail",
      name: "Xem chi tiết",
      icon: watchmoreIcon,
      onClick: handleOpenModal
    },
    {
      key: "delete",
      name: "Xóa",
      icon: deleteIcon,
      onClick: handleOpenModal
    }
  ];
  const columns = [
    {
      title: "Thể loại thông báo",
      dataIndex: "name",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Mô tả",
      dataIndex: "name"
    },
    {
      title: "Ghi chú",
      dataIndex: "note"
    },
    {
      title: "Thời gian tạo",
      dataIndex: "createdAt",
      render: (time: string) => formatTime(time)
    },
    {
      title: "",
      dataIndex: "id",
      render: (id: string) => (
        <ThreeDot
          onChangeID={() => setIdAndGetDetailNotificationType(id)}
          listItem={listItem}
        />
      )
    }
  ];
  const dataNoti: any[] = [
    {
      title: "Thể loại thông báo:",
      value: detailNotificationType?.name
    },
    {
      title: "Mô tả:",
      value: detailNotificationType?.name
    },
    {
      title: "Mô tả:",
      value: detailNotificationType?.key
    },
    {
      title: "Thời gian tạo:",
      value:
        detailNotificationType && formatTime(detailNotificationType?.updatedAt)
    }
  ];

  return (
    <div className="list-type-notification">
      <ContentHeader title="Danh sách thể loại thông báo" />
      <DetailsNotify
        isModalVisible={isShowModal === "detail"}
        handleOk={handleOk}
        handleCancel={handleCancel}
        namePopup="Chi tiết thể loại thông báo"
        data={dataNoti}
        isShowbtn
      />
      <DeleteUserModal
        description="Bạn có muốn xóa thể loại thông báo này không?"
        isModalVisible={isShowModal === "delete"}
        handleOk={handleDeleteUser}
        handleCancel={handleCancel}
      />
      <section className="content">
        <div className="container-fluid">
          <div className="list-type-notification__header d-flex justify-content-between">
            <div className="box-filter__type-bug">
              <Select
                defaultValue="Thể loại thông báo"
                style={{width: 250}}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div>
              <BtnCreate path="/" content="Tạo thể loại thông báo" />
            </div>
          </div>
          <div className="mt-2">
            <TableCustom
              data={dataNotificationType}
              columns={columns}
              loading={loading}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListTypeNotification;
