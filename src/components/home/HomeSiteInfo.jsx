import { Link } from "react-router-dom"
import React from "react";
const HomeSiteInfo = ({ name, title, route }) => {
    return (
        <div className="col-6 col-md-3 d-flex flex-column align-items-center">
            <Link to={`${route}`} target="_blank" className={`text-decoration-none d-flex flex-column align-items-center`}>
                <div className="icon-contant shadow">
                    {name}
                </div>
                <p className="info-title fs-5 mt-3 ">
                    {title}
                </p>
            </Link>
        </div>
    )
}

export default HomeSiteInfo