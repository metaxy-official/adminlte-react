/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from "react";
import {Table} from "antd";
import EmptyData from "../emptyData";

interface TableCustomProps {
  data: any[];
  columns: any;
}

const TableCustom = (props: TableCustomProps) => {
  const {data, columns} = props;

  return (
    <>
      {data.length > 0 ? (
        <>
          <Table
            className="table-ant"
            rowSelection={{
              type: "checkbox"
            }}
            columns={columns}
            dataSource={data}
          />
        </>
      ) : (
        <EmptyData dataTable={data} />
      )}
    </>
  );
};

export default TableCustom;
