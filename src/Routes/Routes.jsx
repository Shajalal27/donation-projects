import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Pages/Donation/Donation";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/donation",
            element: <Donation/>
        },
        {
            path: "/statistics",
            element: <h1>Statistics......</h1>
        },
        {
          path: "/donation-details/:id",
          element: <DonationDetails/>
      },
      ]
    },
    
  ]);

  export default router;