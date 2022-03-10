/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import EmptyImg from "../../static/img/404.png";
import React from "react";

interface EmptyDataProps {
  dataTable: any[];
}
function EmptyData(props: EmptyDataProps) {
  const {dataTable} = props;
  return (
    <div className="empty-data-container">
      <div className="box-overview">
        <p>
          Tổng: <span>{dataTable.length} kiểu người dùng</span>
        </p>
      </div>
      <div className="container-nodata">
        <div className="box-nodata">
          <img src={EmptyImg} alt="empty-user" />
          <p>Chưa có kiểu người dùng nào trong hệ thống</p>
        </div>
      </div>
    </div>
  );
}

export default EmptyData;
