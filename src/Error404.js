import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
	return (
		<>
			<div id="notfound">
				<div className="notfound">
					<div className="notfound-404">
						<h1>404</h1>
					</div>
					<h2>We Are Sorry Page Not Found</h2>
					<p>The Page You Are Looking For is not found</p>
					<NavLink to="/">Back To Home</NavLink>
				</div>
			</div>
		</>
	);
};

export default Error404;
