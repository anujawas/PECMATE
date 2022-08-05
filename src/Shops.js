import React from "react";
import { Link} from "react-router-dom";
const Shop = (props) => {
    return (
        <div className="col-lg-4 py-3">
            <div className="card-blog">
                <div className="header">
                    <div className="post-thumb">
                        <img src={props.img} alt={Error} style={{ width: "280px" }} />
                    </div>
                </div>
                <div className="body">
                    <Link className="post-title" id="3" to={`/${props.visit}/${props.name}`}><h5>{props.name}</h5>
                    </Link>
                    <div className="post-date">Open from 8am - 9pm <br /><Link to={`/${props.visit}/${props.name}`}>Shop here</Link></div>
                </div>
            </div>
        </div>
    );
}
export default Shop;