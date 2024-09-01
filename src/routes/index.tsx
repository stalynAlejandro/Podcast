import { createBrowserRouter } from "react-router-dom";
import { Episode, Error, Landing, Layout, Podcast } from "../pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: "/podcast/:podcastId",
				element: <Podcast />,
			},
			{
				path: "/podcast/:podcastId/episode/:episodeId",
				element: <Episode />,
			},
		],
	},
]);
