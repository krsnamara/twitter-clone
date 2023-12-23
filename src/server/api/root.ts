import { createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "~/server/api/routers/posts";

export const appRouter = createTRPCRouter({
  post: postRouter,
});

export type AppRouter = typeof appRouter;
