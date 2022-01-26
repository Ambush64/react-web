import React, { useState } from "react";
import ServiceApi from "./api/ServiceApi";

const Services = () => {
	const [serviceData, setserviceData] = useState(ServiceApi);
	return (
		<>
			<div className="service">
				<div className="container work-container service-container">
					<h1 className="main-heading text-center fw-bold">
						How To Send Money
					</h1>
					<div className="row">
						{serviceData.map((ele, ind) => {
							return (
								<>
									<div
										className="col-11 col-lg-4 col-xxl-4 service-sub work-subdiv"
										key={ind}
									>
										<i
											className={`font-style ${ele.logo}`}
										></i>
										<h2 className="sub-heading">
											{ele.title}
										</h2>
										<p className="main-hero-para">
											{ele.info}
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

export default Services;
