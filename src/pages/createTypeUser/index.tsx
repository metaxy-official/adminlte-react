/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from '@app/components';
import {Checkbox, Input} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import '../../styles/pages/create-new-user.scss';

function CreateTypeUser() {
  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  const optionsWithDisabled = [
    {label: 'Quản lí người dùng', value: 'Apple'},
    {label: 'Quản lí người chơi', value: 'Pear'},
    {label: 'Quản lí thông tin game', value: 'Orange'},
    {label: 'Quản lí thông báo', value: 'Orange'},
    {label: 'Quản lí báo cáo', value: 'Orange'},
    {label: 'Quản lí FAQ', value: 'Orange', disabled: false}
  ];
  return (
    <div className="container-type-user">
      <ContentHeader title="Tạo kiểu người dùng" />
      <section className="content">
        <div className="name-user-box">
          <label htmlFor="name">
            Tên kiểu người dùng <span>(*)</span>
          </label>
          <Input id="name" placeholder="Nhập tên kiểu người dùng" />
        </div>
        <div className="note-box">
          <label htmlFor="note">Ghi chú</label>
          <TextArea rows={4} id="note" placeholder="Nhập ghi chú..." />
        </div>
        <div className="permission-box">
          <p>
            Thêm quyền <span className="more">(*)</span>
          </p>
          <Checkbox.Group
            options={optionsWithDisabled}
            defaultValue={['Apple']}
            onChange={onChange}
          />
        </div>
      </section>
    </div>
  );
}

export default CreateTypeUser;
