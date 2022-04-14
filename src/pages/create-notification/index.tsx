/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@app/components";
import {
  createNewNotificationCMS,
  getListPlayer,
  shortAddress
} from "@app/utils";
import {INotificationReqCMS, IPlayer} from "@app/utils/types";
import {Button, Input, Select} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const {Option} = Select;

function CreateNotification() {
  // handle get list players
  const [players, setPlayers] = useState<any[]>([]);
  const [keyword, setKeyword] = useState<string>();
  const req: IPlayer = {
    page: 1,
    pageSize: 10,
    sortBy: "createdAt:asc",
    keyword: ""
  };

  const getPlayers = async () => {
    const response = await getListPlayer({...req, keyword});
    const data: any[] = await response.docs.map((item: any) => ({
      name: item.name,
      address: item.address
    }));
    setPlayers(data);
  };
  useEffect(() => {
    getPlayers();
  }, [keyword]);
  // end

  const navigate = useNavigate();
  const [notify, setNotify] = useState<INotificationReqCMS>({
    title: "",
    eventType: "",
    to: [],
    description: "",
    note: "",
    isDraft: false
  });
  function handleInputTakers(value: any) {
    const address = value.map((item: string) => item.split(" ")[0]);
    setNotify({...notify, to: address});
  }
  const handleChangeKeyword = (value: string) => {
    setKeyword(value);
  };
  function handleInputType(value: any) {
    setNotify({...notify, eventType: value});
  }
  const children = [];
  for (let i = 1; i < 10; i++) {
    children.push();
  }

  const handleInput = (type: string, e: any) => {
    setNotify({...notify, [type]: e.target.value});
  };

  const handleCreateNewNotificationCMS = async (isDraft: boolean) => {
    if (isDraft) {
      setNotify({...notify, isDraft: true});
    }
    if (
      !notify.title ||
      !notify.eventType ||
      !notify.description ||
      notify.to.length === 0
    ) {
      return alert("please fill the data!");
    }
    try {
      const noti = await createNewNotificationCMS(notify);
      toast.success(`Tạo thông báo ${noti?.title} thành công`);
      return navigate(`/quan-li-thong-bao/trong-game`);
    } catch (error: any) {
      toast.error("Tạo thông báo thất bại! Vui lòng thử lại");
      throw new Error(error.message);
    }
  };

  return (
    <div className="container-create-notification">
      <ContentHeader title="Tạo thông báo" />
      <section className="content">
        <div className="form">
          <div className="form__title">
            <label htmlFor="notification-title">
              Tiêu đề <span>(*)</span>
            </label>
            <Input
              onChange={(e: any) => handleInput("title", e)}
              id="notification-title"
              placeholder="Nhập tiêu đề"
            />
          </div>
          <div className="form__type">
            <label htmlFor="notification-type">
              Thể loại <span>(*)</span>
            </label>
            <Select
              id="notification-type"
              defaultValue=""
              placeholder="Chọn thạng thái"
              onChange={handleInputType}
            >
              <Option value="Cập nhật">Cập nhật</Option>
              <Option value="Thông báo">Thông báo</Option>
            </Select>
          </div>
        </div>
        <div className="notification__takers">
          <label htmlFor="notification-takers">
            Người nhận <span>(*)</span>
          </label>

          <Select
            mode="multiple"
            allowClear
            id="notification-takers"
            style={{width: "100%"}}
            placeholder="Nhập tên trong game hoặc địa chỉ ví của người chơi"
            onSearch={handleChangeKeyword}
            onChange={handleInputTakers}
          >
            {players.map((item) => (
              <Option key={`${item.address} + ${item.name}`}>
                {item.name} - {shortAddress(item.address)}
              </Option>
            ))}
          </Select>
        </div>

        <div className="notification__content">
          <label htmlFor="notification-content">
            Nội dung <span>(*)</span>
          </label>
          <TextArea
            onChange={(e: any) => handleInput("description", e)}
            id="notification-content"
            rows={3}
            placeholder="Nhập nội dung"
          />
        </div>
        <div className="notification__note">
          <label htmlFor="notification-note">Ghi chú</label>
          <TextArea
            onChange={(e: any) => handleInput("note", e)}
            id="notification-note"
            rows={3}
            placeholder="Nhập ghi chú"
          />
        </div>
        <div className="btn-control">
          <Button className="mr-2" shape="round">
            Hủy
          </Button>
          <Button
            onClick={() => handleCreateNewNotificationCMS(true)}
            className="ml-2"
            shape="round"
            type="primary"
          >
            Lưu bản nháp
          </Button>
          <Button
            onClick={() => handleCreateNewNotificationCMS(false)}
            className="ml-2"
            shape="round"
            type="primary"
          >
            Tạo thông báo
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CreateNotification;
