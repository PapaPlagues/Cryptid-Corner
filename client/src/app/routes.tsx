import type { RouteObject } from "react-router";
import { MainLayout } from "./layouts/MainLayout.js";
import { HomePage } from "@/app/pages/HomePage.js";
import { LoginPage } from "@/app/pages/LoginPage.js";
import { SignupPage } from "@/app/pages/SignupPage.js";
import { ErrorPage } from "@/app/pages/ErrorPage.js";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
];

export { routes };
