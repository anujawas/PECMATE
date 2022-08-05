import React from "react";
const Item = () => {
    return (
        <div class="col-lg-4 py-3">
            <div class="card-blog">
                <div class="header">
                    <div>
                        <img src="./assets/img/pecmarket/ds.jpeg" alt="" style={{ width: "100px" }} />
                    </div>
                </div>
                <div class="body">
                    <h5 class="post-title"><a href="blog-details.html">DSA notes by Gaurav Pant</a></h5>
                    <div class="post-date">400 rs <br /><a href="https://google.com">Shop Here</a></div>
                </div>
            </div>
        </div>
    );
}
export default Item;