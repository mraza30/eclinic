import React, { ReactElement } from "react";

import { NextPageWithLayout } from "./_app";
import UserLayout from "@/components/layouts/User";

const HomePage: NextPageWithLayout = () => {
  return <></>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default HomePage;
