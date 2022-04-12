/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import {INotificationReqCMS, IUser} from "@app/utils/types";
import {DatePicker, Input, Select} from "antd";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import {useNavigate} from "react-router-dom";
import BtnCreate from "@app/components/btnCreate";
import {useEffect, useState} from "react";
import {formatTimeByDay, getNotificationsCMS, shortAddress} from "@app/utils";
import watchmoreIcon from "../../../static/icon/watch-more.svg";

const {Option} = Select;
const NotificationInGame = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  // state and functions for getID
  const [id, setId] = useState<string>("");
  const handleChangeId = (id: string = "") => setId(id);

  const [dataNotificationsCMS, setDataNotificationsCMS] =
    useState<INotificationReqCMS[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDataNotificationCMS = async () => {
      setLoading(true);
      const data = await getNotificationsCMS();
      setDataNotificationsCMS(data);
      setLoading(false);
    };
    getDataNotificationCMS();
  }, []);

  const navigate = useNavigate();

  const listItem: ItemMoreOption[] = [
    {
      key: "detailInfo",
      name: "Xem chi tiết",
      icon: watchmoreIcon,
      onClick: () => {
        navigate(`/quan-li-thong-bao/trong-game/chi-tiet-thong-bao/${id}`);
      }
    }
  ];
  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Thể loại Thông báo",
      dataIndex: "eventType"
    },
    {
      title: "Tới",
      dataIndex: "to",
      render: (to: string) => <p>{shortAddress(to[0])}</p>
    },
    {
      title: "Người đăng",
      dataIndex: "createdBy",
      render: (user: IUser) => <p>{user.fullName}</p>
    },
    {
      title: "Ghi chú",
      dataIndex: "description"
    },
    {
      title: "Thời gian tạo",
      dataIndex: "createdAt",
      render: (date: string) => formatTimeByDay(date)
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status: number) => (
        <>
          {status === 0 ? (
            <div className="status-doing">Bản nháp</div>
          ) : status === 2 ? (
            <div className="status-actived">Đã gửi</div>
          ) : (
            <div className="status-not-active">Đang gửi</div>
          )}
        </>
      )
    },
    {
      title: "",
      dataIndex: "id",
      render: (id: string) => (
        <ThreeDot onChangeID={() => handleChangeId(id)} listItem={listItem} />
      )
    }
  ];
  return (
    <div className="list-bug-report">
      <ContentHeader title="Danh sách thông báo" />
      <section className="content">
        <div className="container-fluid">
          <div className="list-bug-report__header">
            <div className="box-filter">
              <div className="box-filter__date">
                <Input.Group compact>
                  <DatePicker.RangePicker
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginRight: "10px"
                    }}
                  />
                </Input.Group>
              </div>
              <div className="box-filter__type-bug">
                <Select
                  defaultValue="Thể loại thông báo"
                  style={{width: 180}}
                  onChange={handleChange}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div className="box-filter__status">
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
            <div>
              <BtnCreate path="/" content="Tạo thông báo" />
            </div>
          </div>
          <div className="mt-2">
            <TableCustom
              loading={loading}
              data={dataNotificationsCMS}
              columns={columns}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotificationInGame;
