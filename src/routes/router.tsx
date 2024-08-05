import { createBrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";
import Template from "./Template";
import GameDetailsPage from "./GameDetailsPage";
import GameListPage from "./GameListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <GameListPage /> },
      { path: "games/:id", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
