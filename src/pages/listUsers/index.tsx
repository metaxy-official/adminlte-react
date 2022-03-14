/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import SearchBox from "@app/components/searchbox/SearchBox";
import BtnCreate from "@app/components/btnCreate";
import {DataListUserProp} from "@app/utils/types";
import {Select} from "antd";
import ThreeDot from "@app/components/btnThreeDot";

const {Option} = Select;

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
      render: () => <ThreeDot />
    }
  ];
  return (
    <div className="list-user-page">
      <ContentHeader title="Danh sách người dùng" />

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
            <TableCustom data={data} columns={columns} dataSelection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListUser;
