import React from "react";
import { Table } from "antd";
import EmptyData from "../emptyData";

interface TableCustomProps {
  data: any[];
  columns: any;
  dataSelection?: boolean
}

const TableCustom = (props: TableCustomProps) => {
  const { data, columns, dataSelection } = props;
  console.log("🚀 ~ file: Table.tsx ~ line 13 ~ TableCustom ~ dataSelection", dataSelection)

  return (
    <>
      {data.length > 0 ? (
        <div className="table-custom">
          <Table
            className="table-ant"
            rowSelection={dataSelection ? {} : undefined}
            columns={columns}
            dataSource={data}

          />
          <p className="total-number">Tổng: {data.length} người chơi</p>
        </div>
      ) : (
        <EmptyData dataTable={data} />
      )}
    </>
  );
};

export default TableCustom;
