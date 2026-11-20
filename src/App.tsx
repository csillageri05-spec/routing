import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import PublicPage from "./pages/Public";
import Admin from "./pages/Admin";
import Kosar from "./pages/Kosar";
import AdottTermek from "./pages/AdottTermek";
import UjTermek from "./pages/UjTermek";
import NoPage from "./pages/NoPage";
import "./App.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PublicPage /> },
      { path: "admin", element: <Admin /> },
      { path: "kosar", element: <Kosar /> },
      { path: "adott-termek", element: <AdottTermek /> },
      { path: "uj-termek", element: <UjTermek /> },
      { path: "*", element: <NoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
