/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import { ContentHeader } from '@app/components';
import { Button, Checkbox } from 'antd';
import React from 'react';
import { ReactComponent as EditIcon } from '../../static/icon/edit.svg';

function DetailUser() {
  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  const optionsWithDisabled = [
    { label: 'Quản lí người dùng', value: 'Apple' },
    { label: 'Quản lí người chơi', value: 'Pear' },
    { label: 'Quản lí thông tin game', value: 'Orange' },
    { label: 'Quản lí thông báo', value: 'Orang' },
    { label: 'Quản lí báo cáo', value: 'Oran' },
    { label: 'Quản lí FAQ', value: 'Ora', disabled: false }
  ];
  return (
    <div className="container-detail-user">
      <ContentHeader title="Chi tiết kiểu người dùng" />
      <div className="box-information">
        <div className="infor-header">
          <p>Admin Vận Hành</p>
          <div className="infor-header-btn">
            <EditIcon fill="#2d7ff9" />
            <p>Chỉnh sửa</p>
          </div>
        </div>
        <div className="infor-body">
          <div className="infor-body-box">
            <p className="infor-body-box__title">Ghi chú:</p>
            <p className="infor-body-box__des">Chưa cập nhật</p>
          </div>
          <div className="infor-body-box">
            <p className="infor-body-box__title">Ngày tạo:</p>
            <p className="infor-body-box__des">01/01/2022</p>
          </div>
        </div>
      </div>
      <div className="btn-control">
        <Button className="mr-2" shape="round">
          Thông tin
        </Button>
        <Button className="ml-2" shape="round" type="primary">
          Nhóm người dùng
        </Button>
      </div>
      <div className="permission-box">
        <p>Thông tin quyền cơ bản</p>
        <Checkbox.Group
          options={optionsWithDisabled}
          defaultValue={['Apple']}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default DetailUser;
