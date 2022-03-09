/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {forwardRef} from 'react';
import watchmoreIcon from '../../static/icon/watch-more.svg';
import editIcon from '../../static/icon/edit.svg';
import deleteIcon from '../../static/icon/delete.svg';
import '../../styles/components/more-action.scss';
import {Link, useNavigate} from 'react-router-dom';

const MoreAction = (props: any, ref: any) => {
  return (
    <div ref={ref} className="more-action">
      <Link to="/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung">
        <img src={watchmoreIcon} alt="icon" />
        <p>Xem chi tiết</p>
      </Link>
      <Link to="/">
        <img src={editIcon} alt="icon" />
        <p>Chỉnh sửa</p>
      </Link>
      <Link to="/">
        <img src={deleteIcon} alt="icon" />
        <p>Xóa</p>
      </Link>
    </div>
  );
};

export default forwardRef(MoreAction);
