import Elysia from "elysia";
import {
  getComicDetail,
  getComicsList,
  getGenre,
  getGenreList,
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
comicRoutes.get("/genre", getGenreList);
comicRoutes.get("/genres/:genre/:page", getGenre);

export default comicRoutes;
