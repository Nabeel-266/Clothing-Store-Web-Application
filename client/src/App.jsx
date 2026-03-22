import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

// App Layout
const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="w-full relative z-1">
      <Navbar />
      <Outlet />
    </div>
  );
};

// Browser Router
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={browserRouter} />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default App;
