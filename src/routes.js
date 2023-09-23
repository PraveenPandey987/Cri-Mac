import Home from "./pages/home";
import Layout from "./components/Layout";
import MiddlewarePage from "./pages/MiddlewarePage";
import Dashboard from "./pages/Dashboard";
import UploadAlert from "./pages/UploadAlert";
import Communications from "./pages/Communications";
import SearchAlert from "./pages/SearchAlert";
import StateAlertCount from "./pages/StateAlertCount";
import Help from "./pages/Help";
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
      {
        path: "/UploadAlert",
        element: <UploadAlert />,
      },
      {
        path: "/SearchAlert",
        element: <SearchAlert />,
      },
      {
        path: "/Communications",
        element: <Communications />,
      },
      {
        path: "/AlertCount",
        element: <StateAlertCount />,
      },
      {
        path: "/Help",
        element: <Help />,
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
