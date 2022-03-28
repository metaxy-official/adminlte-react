/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import { ContentHeader } from "@app/components";
import { Button, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

const { Option } = Select;

function CreateUser() {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="container-create-user">
      <ContentHeader title="Tạo người dùng" />
      <section className="content">
        <div className="form-header">
          <div className="form-header__name">
            <label htmlFor="user-name">
              Họ tên <span>(*)</span>
            </label>
            <Input id="user-name" placeholder="Nhập họ tên" />
          </div>
          <div className="form-header__email">
            <label htmlFor="user-email">
              Email <span>(*)</span>
            </label>
            <Input id="user-email" placeholder="Nhập email" />
          </div>
          <div className="form-header__name">
            <label htmlFor="user-phone">Số điện thoại</label>
            <Input id="user-phone" placeholder="Nhập số điện thoại " />
          </div>
        </div>
        <div className="form-body">
          <div className="form-body__role">
            <label htmlFor="user-role">
              Vai trò <span>(*)</span>
            </label>
            <Select
              id="user-role"
              defaultValue="Chọn vai trò"
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div className="form-footer__note">
          <label htmlFor="user-note">Ghi chú</label>
          <TextArea id="user-note" rows={3} />
        </div>
        <div className="btn-control">
          <Button className="mr-2" shape="round">
            Hủy
          </Button>
          <Button className="ml-2" shape="round" type="primary">
            Tạo người dùng
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CreateUser;
