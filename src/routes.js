import Home from "./pages/home";
import Layout from "./components/Layout";
import MiddlewarePage from "./pages/MiddlewarePage";
import Dashboard from "./pages/Dashboard";
import UploadAlert from "./pages/UploadAlert/UploadAlert";
import Communications from "./pages/Communications";
import SearchAlert from "./pages/SearchAlert/SearchAlert";
import StateAlertCount from "./pages/StateAlertCount";
import Help from "./pages/Help";
import FirSummary from "./pages/FirSummary";
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
        path: "/StateAlertCount",
        element: <StateAlertCount />,
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/FirSummary",
        element: <FirSummary />,
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
