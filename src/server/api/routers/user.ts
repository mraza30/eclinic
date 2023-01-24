import { createTRPCRouter } from "../trpc";
import { newUser } from "./../controllers/user";

export const userRouter = createTRPCRouter({
  newUser,
});
