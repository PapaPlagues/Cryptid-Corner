import type { RouteObject } from "react-router";

import { MainLayout } from "../layouts/MainLayout.js";
import { ProtectedRoute } from "@/app/routes/ProtectedRoute.js";
import { PublicRoute } from "@/app/routes/PublicRoute.js";

import { HomePage } from "@/app/pages/HomePage.js";
import { UsersPage } from "@/app/pages/UsersPage.js";
import { UserPage } from "@/app/pages/UserPage.js";
import { LoginPage } from "@/app/pages/LoginPage.js";
import { SignupPage } from "@/app/pages/SignupPage.js";
import { ErrorPage } from "@/app/pages/ErrorPage.js";
import { SettingsPage } from "@/app/pages/SettingsPage.js";

const routes: RouteObject[] = [
  {
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/users", element: <UsersPage /> },
          { path: "/users/:userId", element: <UserPage /> },
          { path: "/settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
];

export { routes };
