import React, { useState } from "react";
import workapi from "./api/workapi";

const Works = () => {
	const [workData, setWorkData] = useState(workapi);
	return (
		<>
			<div>
				<div className="work-container container">
					<h1 className="main-heading text-center">
						How does it Work
					</h1>
					<div className="row">
						{workData.map((ele, ind) => {
							// const [id, logo, title, info] = ele;
							return (
								<>
									<div className="col-12 col-lg-4 text-center work-subdiv">
										<i
											className={`font-style ${ele.logo}`}
										></i>
										<h2 className="sub-heading">
											{ele.title}
										</h2>
										<p className="main-hero-para">
											Lorem ipsum dolor sit amet
											consectetur, adipisicing
											elit.Officia quaerat quibusdam
											impedit alias culpa
										</p>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Works;
