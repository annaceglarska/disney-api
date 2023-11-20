import { createBrowserRouter } from "react-router-dom";
import Start from "./views/start/Start";
import DisneyCharacters from "./views/disney-characters/DisneyCharacters";
import CharacterDetails from "./views/character-details/CharacterDetails";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/list",
        element: <DisneyCharacters />,
      },
      {
        path: "/details/:id",
        element: <CharacterDetails />,
      },
    ],
  },
]);
