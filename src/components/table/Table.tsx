/* eslint-disable import/order */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import useOnClickOutside from '@app/hooks/useClickOutside';
import threeDotIcon from '../../static/icon/threedot.svg';
import MoreAction from '../moreAction/MoreAction';
import '../../styles/components/table.scss';
import {Table} from 'antd';
import {useRef, useState} from 'react';
import EmptyImg from '../../static/img/404.png';

interface DataType {
  key: React.Key;
  name: string;
  creator: string;
  createdDate: string;
}

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     creator: 'LongTT',
//     createdDate: '01/01/2022'
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     creator: 'LongTT',
//     createdDate: '01/01/2022'
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     creator: 'LongTT',
//     createdDate: '01/01/2022'
//   },
//   {
//     key: '4',
//     name: 'Disabled User',
//     creator: 'LongTT',
//     createdDate: '01/01/2022'
//   }
// ];

const data: DataType[] = [];
const TableCustom = () => {
  // const {data = []} = props;
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsShowModal(-1));
  const [isShowModal, setIsShowModal] = useState<number>(-1);
  const handleShowModal = (index: number) => {
    setIsShowModal(index);
  };

  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
    'checkbox'
  );
  const columns = [
    {
      title: 'Kiểu người dùng',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>
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
        <div onClick={() => handleShowModal(key)} className="btn">
          <img src={threeDotIcon} alt="icon" />
          <div ref={ref}>{isShowModal === key && <MoreAction />}</div>
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
              type: selectionType,
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
