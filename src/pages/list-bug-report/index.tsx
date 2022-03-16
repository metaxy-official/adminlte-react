/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import {DataListBugProp} from "@app/utils/types";
import {Select} from "antd";
import ThreeDot, { ItemMoreOption } from "@app/components/btnThreeDot";
import { useNavigate } from "react-router-dom";
import watchmoreIcon from "../../static/icon/watch-more.svg";

const {Option} = Select;
const ListBugReport = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  const data: DataListBugProp[] = [
    {
      id: '#001',
      type: 'Tải Game',
      brief: 'Tải game lỗi',
      address:'0x7ef6c419ecabcmdksc9ee',
      nameInGame: 'Ltrannn',
      datePublished: '13:00 - 01/01/2022',
      status: true
    },
    {
      id: '#002',
      type: 'Tải Game',
      brief: 'Tải game lỗi',
      address:'0x7ef6c419ecabcmdksc9ee',
      nameInGame: 'Ltrannn',
      datePublished: '13:00 - 01/01/2022',
      status: false
    },
    {
      id: '#003',
      type: 'Tải Game',
      brief: 'Tải game lỗi',
      address:'0x7ef6c419ecabcmdksc9ee',
      nameInGame: 'Ltrannn',
      datePublished: '13:00 - 01/01/2022',
      status: false
    },
  ];

  const navigate = useNavigate();

const listItem: ItemMoreOption[] = [
  {key: 'detailInfo' ,name: 'Xem chi tiết', icon: watchmoreIcon, onClick: () => {
    navigate('/quan-li-bao-cao-loi/xem-chi-tiet')
  }},
]
  const columns = [
    {
      title: "Mã lỗi",
      dataIndex: "id",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Thể loại lỗi",
      dataIndex: "type"
    },
    {
      title: "Tóm tắt",
      dataIndex: "brief"
    },
    {
      title: "Địa chỉ ví",
      dataIndex: "address"
    },
    {
      title: "Tên in-game",
      dataIndex: "nameInGame"
    },
    {
      title: "Ngày đăng tải",
      dataIndex: "datePublished"
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status: boolean) => (
        <>
          {status ? (
            <div className="status-actived">Đã xử lí</div>
          ) : (
            <div className="status-not-active">Chưa xử lí</div>
          )}
        </>
      )
    },
    {
      title: "",
      dataIndex: "key",
      render: () => <ThreeDot listItem= {listItem} modals={null}/>
    }
  ];
  return (
    <div className="list-user-page">
      <ContentHeader title="Danh sách báo cáo lỗi" />

      <section className="content">
        <div className="container-fluid">
          <div className="header-box">
            a
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
            <TableCustom data={data} columns={columns}  />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListBugReport;
