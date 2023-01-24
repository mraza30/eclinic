import React, { ReactElement } from "react";

import AdminLayout from "@/layouts/Admin";
import { NextPageWithLayout } from "../_app";

const Admin: NextPageWithLayout = () => {
  return <></>;
};

Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
