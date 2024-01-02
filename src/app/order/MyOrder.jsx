"use client";

import { DataGrid } from "@mui/x-data-grid";
import manageProductHelper, {
  manageOrderHelper,
} from "../../../actions/manageProducts";

const MyOrder = ({ order }) => {
  const { rows, columns } = manageOrderHelper(order);
  return (
    <div className="max-w-[1120px]  m-auto text-center">
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
