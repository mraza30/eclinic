import AdminLayout from "@/components/admin/layout/AdminLayout";
import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
