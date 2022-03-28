import React from "react";
import { Spin, Table} from "antd";
import EmptyData from "../emptyData";

interface TableCustomProps {
  loading?: boolean;
  data?: any[];
  columns: any;
  dataSelection?: boolean;
}

const TableCustom = (props: TableCustomProps) => {
  const {data=[], columns, dataSelection, loading} = props;
  if (loading) return <div className="d-flex justify-content-center mt-2"><Spin size="large"/></div>
  return (
    <>
      {data && data.length > 0 ? (
        <div className="table-custom">
          <Table
            tableLayout="fixed"
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
        <EmptyData />
      )}
    </>
  );
};

export default TableCustom;
