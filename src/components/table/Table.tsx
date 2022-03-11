/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import { Table } from 'antd';
import useOnClickOutside from '@app/hooks/useClickOutside';
import threeDotIcon from '../../static/icon/threedot.svg';
import MoreAction from '../moreAction/MoreAction';
import EmptyImg from '../../static/img/404.png';

interface DataType {
  key: number | string;
  name: string;
  creator: string;
  createdDate: string;
}


// const data: DataType[] = [];
const TableCustom = (props: any) => {
  // const {data = []} = props;
  const { data } = props
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
      title: 'Kiểu người dùng',
      dataIndex: 'name',
      render: (text: string) => <p>{text}</p>
    },
    {
      title: 'Người tạo',
      dataIndex: 'creator'
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdDate'
    },
    {
      title: '',
      dataIndex: 'key',
      render: (key: any) => (
        <div className="btn" onClick={() => handleShowModal(key)} >
          <img src={threeDotIcon} alt="icon" />
          {isShowModal === key && <MoreAction ref={ref} />}
        </div>
      )
    }
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name
    })
  };
  return (
    <>
      {data.length > 0 ? (
        <>
          <Table
            rowSelection={{
              type: 'checkbox',
              ...rowSelection
            }}
            columns={columns}
            dataSource={data}
          />
        </>
      ) : (
        <>
          <div className="box-overview">
            <p>
              Tổng: <span>{data.length} kiểu người dùng</span>
            </p>
          </div>
          <div className="container-nodata">
            <div className="box-nodata">
              <img src={EmptyImg} alt="empty-user" />
              <p>Chưa có kiểu người dùng nào trong hệ thống</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TableCustom;
