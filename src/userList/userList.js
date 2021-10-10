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
  console.log(data);

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
            <Link to={"/users/" + params.row.id}>
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
        <DataGrid
          rows={data}
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
