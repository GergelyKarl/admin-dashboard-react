import React, { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { rows } from "../MockData";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    let filteredArray = data.filter((item, index) => item.id !== id);
    setData(filteredArray);
  };


  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "user",
      headerName: "User",
      width: 280,
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
      width: 260,
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
            <Link to={"/user/" + params.row.id}>
              <button className="userList__button">Edit</button>
            </Link>
            <DeleteIcon className="userList__delete" onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList" style={{ color: "black" }}>
      <div style={{ height: 400, width: "100%" }}>
        <h1 className="userList__title">Manage Users</h1>
        <DataGrid
        className="datagrid"
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          autoHeight
        />
      </div>
    </div>
  );
}
