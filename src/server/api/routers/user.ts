import { addNewUser, checkUserExists } from './../controllers/user';

import { createTRPCRouter } from '../trpc';

export const userRouter = createTRPCRouter({
  addNewUser,
  checkUserExists,
});
