import { createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/indonesia",
        element: <Indonesia />,
      },
      {
        path: "/programming",
        element: <Programming />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
    ],
  },
]);

export default App;
