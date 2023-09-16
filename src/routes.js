import Home from "./pages/home";
import Layout from "./components/Layout"
const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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
