import { createBrowserRouter } from "react-router-dom";
import { Episode, Error, Landing, Podcast } from "../containers";

export const router = createBrowserRouter([
    {
        path: "",
        element: <Landing />,
        errorElement: <Error />,
    },
    {
        path: "/podcast/:podcastId",
        element: <Podcast />,
        errorElement: <Error />,
    },
    {
        path: "/podcast/:podcastId/episode/:episodeId",
        element: <Episode />,
        errorElement: <Error />,
    },
    {
        path: "/error",
        element: <Error />,
        errorElement: <Error />,
    },
]);
