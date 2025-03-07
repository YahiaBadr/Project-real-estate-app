import * as React from "react";
import { Link } from "@reach/router";
import classnames from "classnames";
import SimplePopover from "../SimplePopover";
import Button from "@material-ui/core/Button";

function Listing({ listing }) {
	if (!listing) {
		return null;
	}

	const { id, image, title, address, description, price, booked } = listing;
	const columnClasses = classnames("column", "col-4", "col-xs-12");
	const cardClasses = classnames("card");

	return (
		<div className={columnClasses} style={{ margin: "1rem 0" }}>
			<div style={{ height: "100%" }} className={cardClasses}>
				<div className="card-image">
					<img
						className="img-responsive"
						src={`/server/${image}`}
						alt={address}
					/>
				</div>
				<div className="card-header">
					<div className="card-title h5">{title}</div>
					<div className="card-title h6">&pound; {price}</div>
					<div className="card-subtitle text-gray">{address}</div>
				</div>
				<div className="card-body">{description}</div>
				<div className="card-footer">
					<Link className="btn btn-primary" to={`/details/${id}`}>
						Go to property
					</Link>
					{booked ? (
            <Button aria-describedby={id} variant="contained" color="primary">
							Remove Follow Up
						</Button>
					) : (
						<SimplePopover />
					)}
				</div>
			</div>
		</div>
	);
}

export default Listing;
