import React from "react";

const Card = (props) => {
	return (
		<div className="card ms-5 me-1 mt-3" style={{ padding: 0 }}>
			<img className="card-img-top" width="500px" height="325px"/>
			<div className="card-body">
				<h5 className="card-title">
					<strong>{props.cTitle}</strong>
				</h5>
				<p className="card-text">{props.cText}</p>
				<div
					className="progress"
					style={{ height: 1 + "px", width: 100 + "%" }}>
					<div
						className="progress-bar"
						role="progressbar"
						aria-valuenow="0"
						aria-valuemin="0"
						aria-valuemax="100"></div>
				</div>
				<a href="#" className="btn btn-primary ">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Card;