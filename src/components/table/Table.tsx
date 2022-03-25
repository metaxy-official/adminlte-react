import React from "react";
import {Spin, Table} from "antd";
import EmptyData from "../emptyData";

interface TableCustomProps {
  data?: any[];
  columns: any;
  dataSelection?: boolean;
}

const TableCustom = (props: TableCustomProps) => {
  const {data, columns, dataSelection} = props;
  if (!data) return <Spin size="large" />;
  return (
    <>
      {data && data.length > 0 ? (
        <div className="table-custom">
          <Table
            className="table-ant"
            rowSelection={dataSelection ? {} : undefined}
            columns={columns}
            dataSource={data.map((item, index) => {
              if (item.key) return item;
              return {...item, key: index};
            })}
          />
          <p className="total-record">
            Tổng:&nbsp;&nbsp;<span>{data.length} người chơi</span>
          </p>
        </div>
      ) : (
        <EmptyData dataTable={data} />
      )}
    </>
  );
};

export default TableCustom;
