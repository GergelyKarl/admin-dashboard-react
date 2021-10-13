import "./ProductList.css";
import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { productRows } from "../../MockData";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    let filteredArray = data.filter((item, index) => item.id !== id);
    setData(filteredArray);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="productList__product">
            <img className="productList__image" src={params.row.image} alt="product" />
            {params.row.name}
          </div>
        );
      },
    },
 
    {
      field: "price",
      headerName: "Price",
      sortable: true,
      width: 160,
      type: "number",
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 180,
      sortable: true,
    },
    {
      field: "status",
      headerName: "status",
      sortable: true,
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productList__button">Edit</button>
            </Link>
            <DeleteIcon className="productList__delete" onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <h1 className="productList__title">Manage Products</h1>
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
  );
}
