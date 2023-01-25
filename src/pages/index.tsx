import React, { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';
import UserLayout from '@/layouts/User';

const HomePage: NextPageWithLayout = () => {
  return <div>hello world</div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default HomePage;
