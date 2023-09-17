import Home from "./pages/home";
import Layout from "./components/Layout";
import MiddlewarePage from "./pages/MiddlewarePage";
import Dashboard from "./pages/Dashboard";
const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/MiddlewarePages",
        element: <MiddlewarePage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      //   {
      //     path: "/matches",
      //     children: [
      //       {
      //         index: true,
      //         element: <Matches/>,
      //       },
      //       {
      //         path: "/matches/:id",
      //         element: <SpecificSportMatch/>,
      //       },
      //     ],
      //   },
    ],
  },
];

export default Routes;
