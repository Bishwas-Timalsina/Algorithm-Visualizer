import { Navigate, type RouteObject } from "react-router-dom";
import { HOME, LIST, QUEUE, STACK } from "./path";
import StackPage from "../pages/Stack/StackPage";
import HomeLayout from "../layout/HomeLayout";
import ListPage from "../pages/List/ListPage";
import QueuePage from "../pages/Queue/QueuePage";

const PublicRoute: RouteObject = {
  path: HOME,
  element: <HomeLayout />,
  children: [
    {
      path: STACK,
      element: <StackPage />,
    },
    {
      path: QUEUE,
      element: <QueuePage />,
    },
    {
      path: LIST,
      element: <ListPage />,
    },
  ],
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`${HOME}/${STACK}`} />,
  },
  PublicRoute,
];

export default routes;
