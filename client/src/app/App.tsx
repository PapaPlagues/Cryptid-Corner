import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "@/app/routes/routes.js";
import { AuthInitializer } from "@/features/auth/components/AuthInitializer";

const router = createBrowserRouter(routes);

const App = () => (
  <>
    <AuthInitializer />
    <RouterProvider router={router} />
  </>
);

export default App;
