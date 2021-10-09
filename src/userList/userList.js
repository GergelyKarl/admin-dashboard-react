import React from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

export default function userList() {
  const columns = [
    { field: "id", headerName: "ID", width: 40 },

    {
      field: "user",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userList__user">
            <img className="userList__image" src={params.row.avatar} alt="hg" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "avatar",
      headerName: "avatar",
      width: 190,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      sortable: true,
      width: 160,
      type: "number",
    },
    {
      field: "email",
      headerName: "email",
      sortable: true,
      width: 160,
    },
    {
      field: "status",
      headerName: "status",
      sortable: true,
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="userList__button">Edit</button>
            <DeleteIcon className="userList__delete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "John Snow",
      avatar:
        "https://images.unsplash.com/photo-1550950545-12f0a5b6103e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxqb2huJTIwc25vd3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      email: "john@snow.com",
      status: "active",
      transaction: "87500",
    },
    {
      id: 2,
      username: "John Snow",
      avatar:
        "https://images.unsplash.com/photo-1550950545-12f0a5b6103e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxqb2huJTIwc25vd3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      email: "john@snow.com",
      status: "active",
      transaction: "80000",
    },
    {
      id: 3,
      username: "John Snow",

      avatar:
        "https://images.unsplash.com/photo-1550950545-12f0a5b6103e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxqb2huJTIwc25vd3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      email: "john@snow.com",
      status: "active",
      transaction: "52000",
    },
    {
      id: 4,
      username: "John Snow",
      avatar:
        "https://images.unsplash.com/photo-1550950545-12f0a5b6103e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxqb2huJTIwc25vd3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      email: "john@snow.com",
      status: "active",
      transaction: "87500",
    },
    {
      id: 5,
      username: "John Snow",
      avatar:
        "https://images.unsplash.com/photo-1550950545-12f0a5b6103e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxqb2huJTIwc25vd3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      email: "john@snow.com",
      status: "active",
      transaction: "102000",
    },
    {
      id: 6,
      username: "John Snow",
      avatar:
        "https://images.unsplash.com/photo-1550950545-12f0a5b6103e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxqb2huJTIwc25vd3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      email: "john@snow.com",
      status: "active",
      transaction: "78000",
    },
  ];

  return (
    <div className="userList" style={{ color: "black" }}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
