import React from "react";
const Item = (props) => {
    return (
        <div class="col-lg-4 py-3">
            <div class="card-blog">
                <div class="header">
                    <div>
                        <img src={props.imgsrc} alt="" style={{ width: "280px", height: "225px" }} />
                    </div>
                </div>
                <div class="body">
                    <h5 class="post-title"><a href="blog-details.html">{props.name}</a></h5>
                    <div class="post-date">{props.rate}<br /><a href="./html/PecMarket/checkokut.html">Shop Here</a></div>
                </div>
            </div>
        </div>
    );
}
export default Item;