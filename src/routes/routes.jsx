import { Login, Chat } from "../components";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";

export const routes = [
  {
    path: LOGIN_ROUTE,
    element: <Login />,
  },
  {
    path: CHAT_ROUTE,
    element: <Chat />,
  },
];
