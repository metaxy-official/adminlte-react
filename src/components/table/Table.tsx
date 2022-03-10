/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, {useRef, useState} from "react";
import {Table} from "antd";
import useOnClickOutside from "@app/hooks/useClickOutside";
import threeDotIcon from "../../static/icon/threedot.svg";
import MoreAction from "../moreAction/MoreAction";
import DeleteUserModal from "../modal/DeleteUser";
import EmptyData from "../emptyData";

interface DataType {
  key: number | string;
  name: string;
  creator: string;
  createdDate: string;
}

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     creator: "LongTT",
//     createdDate: "01/01/2022"
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     creator: "LongTT",
//     createdDate: "01/01/2022"
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     creator: "LongTT",
//     createdDate: "01/01/2022"
//   },
//   {
//     key: "4",
//     name: "Disabled User",
//     creator: "LongTT",
//     createdDate: "01/01/2022"
//   }
// ];

const data: DataType[] = [];
const TableCustom = () => {
  // const {data = []} = props;
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsShowModal(-1));
  const [isShowModal, setIsShowModal] = useState<number>(-1);
  const handleShowModal = (key: number) => {
    setIsShowModal(key);
  };

  // const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
  //   'checkbox'
  // );
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

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };

  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);

  const handleOk = () => {
    setIsShowModalDelete(false);
  };

  const handleCancel = () => {
    setIsShowModalDelete(false);
  };

  const handleOpenModalDelete = () => {
    setIsShowModalDelete(true);
  };
  return (
    <>
      <DeleteUserModal
        isModalVisible={isShowModalDelete}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      {data.length > 0 ? (
        <>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection
            }}
            columns={columns}
            dataSource={data}
          />
        </>
      ) : (
        <EmptyData dataTable={data} />
      )}
    </>
  );
};

export default TableCustom;
