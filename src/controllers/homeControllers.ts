import { Context } from "elysia";
import { readFileSync } from "fs";
import { join } from "path";

export const serveHomePage = (ctx: Context) => {
  // Mengambil path absolut untuk `index.html`
  const filePath = join(__dirname, "../views/index.html");

  // Membaca file HTML
  const htmlContent = readFileSync(filePath, "utf-8");

  return htmlContent;
};
