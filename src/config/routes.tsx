import { Navigate, type RouteObject } from "react-router-dom";
import { HOME, LINKED_LIST, QUEUE, STACK, VISUALIZER } from "./path";
import StackPage from "../pages/Stack/StackPage";
import HomeLayout from "../layout/HomeLayout";
import ListPage from "../pages/List/ListPage";
import QueuePage from "../pages/Queue/QueuePage";
import HomePage from "../pages/Home/HomePage";

const PublicRoute: RouteObject = {
  path: VISUALIZER,
  element: <HomeLayout />,
  children: [
    {
      path: HOME,
      element: <HomePage />,
    },
    {
      path: STACK,
      element: <StackPage />,
    },
    {
      path: QUEUE,
      element: <QueuePage />,
    },
    {
      path: LINKED_LIST,
      element: <ListPage />,
    },
  ],
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`${VISUALIZER}/${HOME}`} />,
  },
  PublicRoute,
];

export default routes;
