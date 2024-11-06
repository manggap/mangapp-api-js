import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import comicRoutes from "./routes/comicRoute";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors())
  .use(
    staticPlugin({
      prefix: "/",
      alwaysStatic: true,
    })
  )
  .get("/ping", () => ({
    test: 23423,
  }))
  .get("/", async () => {
    return Bun.file("./public/index.html");
  })
  .use(comicRoutes)
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
