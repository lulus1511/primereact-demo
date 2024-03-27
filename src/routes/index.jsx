import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home, Login, ErrorPage, Root, Details } from "./../views";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/details",
                    element: <Details />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router
