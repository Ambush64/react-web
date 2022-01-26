import React, { useState } from "react";
import HowToUse from "./api/HowToUse";

const Aboutus = () => {
	const [aboutData, setAbout] = useState(HowToUse);
	return (
		<>
			<div className="common-about services">
				<div className="container mb-5">
					<div className="row">
						<div className="col-lg-5  col-12 text-center service-left">
							<img src="./images/hero3.jpg" alt="about us" />
						</div>
						<div className="col-lg-7 col-12 service-right">
							<h3 className="service-title">
								~Available in IOS & android
							</h3>
							<h1 className="main-heading">
								How to use the App?
							</h1>
							{aboutData.map((ele, ind) => {
								return (
									<>
										<div
											className="row service-info"
											key={ele.id}
										>
											<div className="col-1 service-no">
												{ele.id}
											</div>
											<div className="col-10 service-data">
												<h2>{ele.title}</h2>
												<p className="main-hero-para">
													{ele.info}
												</p>
												<br />
											</div>
										</div>
									</>
								);
							})}

							<button className="btn-style btn-style-border">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* second part of about us */}
			<div className="common-about services">
				<div className="container mb-5 services-2">
					<div className="row">
						<div className="col-lg-7 col-12 service-right d-flex justify align-items-start flex-column">
							<h3 className="service-title">
								~Support in any Language
							</h3>
							<h1 className="main-heading">
								World class support <br />
								Available 24/7
							</h1>
							{aboutData.map((ele, ind) => {
								return (
									<>
										<div
											className="row service-info"
											key={ele.id}
										>
											<div className="col-1 service-no">
												{ele.id}
											</div>
											<div className="col-10 service-data">
												<h2>{ele.title}</h2>
												<p className="main-hero-para">
													{ele.info}
												</p>
												<br />
											</div>
										</div>
									</>
								);
							})}

							<button className="btn-style btn-style-border">
								Learn More
							</button>
						</div>
						<div className="col-lg-5  col-12 service-right">
							<img src="./images/callcenter.jpg" alt="about us" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Aboutus;
