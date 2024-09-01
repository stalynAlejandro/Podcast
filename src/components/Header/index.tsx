import "./style.css";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="header">
			<Link className="link" to="/">
				Podcaster
			</Link>
			<div>indicator</div>
		</header>
	);
};
