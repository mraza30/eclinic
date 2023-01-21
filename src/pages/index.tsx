import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import UserLayout from "@/components/user/layout/UserLayout";

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default Page;
