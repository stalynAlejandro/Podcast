import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { useFetchPodcats } from "../../hooks/useFetchPodcasts";

export const Layout = () => {
    useFetchPodcats()

	return (
		<>
			<Header />
			<section>
				<Outlet />
			</section>
		</>
	);
};
