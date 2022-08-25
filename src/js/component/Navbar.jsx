import React from "react";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<a
								className="navbar-brand fs-6"
								aria-current="page"
								href="Home">
								Home
							</a>
						</li>
						<li className="nav-item ">
							<a className="navbar-brand fs-6" href="About">
								About
							</a>
						</li>
						<li className="nav-item ">
							<a className="navbar-brand fs-6" href="Services">
								Services
							</a>
						</li>
						<li className="nav-item ">
							<a className="navbar-brand fs-6" href="Contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;