"use client";

import { DataGrid } from "@mui/x-data-grid";
import manageProductHelper, {
  manageOrderHelper,
} from "../../../actions/manageProducts";

const MyOrder = ({ order }) => {
  const { rows, columns } = manageOrderHelper(order);
  return (
    <div className="p-8 max-w-[1000px] m-auto text-center">
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
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default MyOrder;
