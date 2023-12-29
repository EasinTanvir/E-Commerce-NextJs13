"use client";

import { DataGrid } from "@mui/x-data-grid";
import manageProductHelper from "../../../../actions/manageProducts";

const ManageProduct = ({ products }) => {
  const { rows, columns } = manageProductHelper(products);
  return (
    <div className="p-8 max-w-[1200px] m-auto text-center">
      <div className="mb-6 text-center">
        <h3 className="text-slate-800 text-2xl font-semibold">
          Manage Products
        </h3>
      </div>
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageProduct;
