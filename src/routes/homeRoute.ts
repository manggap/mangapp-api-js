import { Elysia } from "elysia";
import { serveHomePage } from "../controllers/homeControllers";

const homeRoute = new Elysia().get("/", serveHomePage);

export default homeRoute;
