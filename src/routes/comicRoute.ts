import Elysia from "elysia";
import {
  getComicDetail,
  getComicsList,
  getPopularComics,
  getReadChapter,
  getRecommendedComics,
  getSearchedComics,
} from "../controllers/comicControllers";

const comicRoutes = new Elysia();

comicRoutes.get("/recommended", getRecommendedComics);
comicRoutes.get("/popular", getPopularComics);
comicRoutes.get("/detail/:title", getComicDetail);
comicRoutes.get("/read/:href", getReadChapter);
comicRoutes.get("/comic-list/:page", getComicsList);
comicRoutes.get("/search", getSearchedComics);

export default comicRoutes;
