import React from "react";
import { Table } from "antd";

interface DataType {
  key: number;
  name: string;
  age: number;
  major: string;
  
}

const StudentTable = () => {
  const columns = [
    { title: "ID", dataIndex: "key", key: "key" },
    { title: "Tên sinh viên", dataIndex: "name", key: "name" },
    { title: "Tuổi", dataIndex: "age", key: "age" },
    { title: "Chuyên ngành", dataIndex: "major", key: "major" },
  ];

  const data: DataType[] = [
    { key: 1, name: "Vũ Duy Hiếu", age: 19, major: "IT" },
    { key: 2, name: "Nguyễn Ngọc", age: 20, major: "Marketing" },
    { key: 3, name: "Trần Hùng", age: 21, major: "Sale" },
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      pagination={{ pageSize: 3 }} 
      bordered 
    />
  );
};

export default StudentTable;