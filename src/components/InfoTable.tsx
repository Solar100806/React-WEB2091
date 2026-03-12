import { Table } from "antd";
import React from "react";

function InfoTable() {
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
        }
    ];

    const data = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            status: "Active",
            action: "Edit",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            status: "Inactive",
            action: "Delete",
        },
    ]

    return <div><Table columns={columns} dataSource={data} bordered/></div>;
}

export default InfoTable;
