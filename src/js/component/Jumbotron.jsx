import React from "react";

const Jumbotron = (props) => {
	return (
		<div className="bg-light text-dark me-4 ms-4 mt-5 rounded-3">
			<h1 className="display-4 ms-4 pt-5">
				<strong>{props.jTitle}</strong>
			</h1>
			<p className="ms-4">{props.jText}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg ms-4 mb-5"
					href="#"
					role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
};
export default Jumbotron;