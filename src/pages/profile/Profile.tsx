import React, { } from 'react';
import BoxComponent, { Info } from '@app/components/boxComponent';
import { useNavigate, } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();

  const dataInfo: Info[] = [
    {
      name: 'Địa chỉ ví:',
      value: '0x7ef6c419ecabcmdksc9ee'
    },
    {
      name: 'Quốc gia:',
      value: 'Việt Nam'
    },
    {
      name: 'Vai trò:',
      value: 'Người chơi'
    },

  ]
  const dataBasicInfo: Info[] = [
    {
      name: 'Địa chỉ ví:',
      value: '0x7ef6c419ecabcmdksc9ee'
    },
    {
      name: 'Quốc gia:',
      value: 'Việt Nam'
    },
    {
      name: 'Vai trò:',
      value: 'Người chơi'
    },

  ]


  const changeProfile = () => {
    navigate('/chinh-sua-nguoi-dung');
  }

  return (
    <div className="profile-wrapper">
      <BoxComponent title="Trần Thanh Long" handleEdit={changeProfile} listInfo={dataInfo} />
      <BoxComponent title="Thông tin cơ bản" listInfo={dataBasicInfo} />
    </div>
  );
};

export default Profile;
