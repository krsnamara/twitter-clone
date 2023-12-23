import { createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "~/server/api/routers/posts";

export const appRouter = createTRPCRouter({
  posts: postRouter,
});

export type AppRouter = typeof appRouter;
