import React from 'react';
import Header from "./header";
import '../assets/css/bootstrap.css';
import '../assets/css/maicons.css';
import '../assets/vendor/animate/animate.css';
import '../assets/css/theme.css';

function Checkout() {
    return (
        <div>
            <Header/>
            <div className="container-fluid background">
                <div className="row padding-top-20">
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8 offset-md-1 offset-lg-1 offset-xl-2 padding-horizontal-40">
                        <div className="row">
                            <div className="col-12 main-wrapper">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div id="template" className="row panel-wrapper">
                                            <div className="col-12 panel-header basket-header">
                                                <div className="row">
                                                    <div className="col-6 basket-title">
                                                        <span className="description">review your</span>
                                                        <br />
                                                        <span className="emphasized">Cart Summary</span>
                                                    </div>
                                                    <div className="col-6 order-number align-right">
                                                        <span className="description">order #</span>
                                                        <br />
                                                        <span className="emphasized">
                                                            {"{"}
                                                            {"{"}order_number{"}"}
                                                            {"}"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row column-titles padding-top-10">
                                                    <div className="col-2 align-center">
                                                        <span>Photo</span>
                                                    </div>
                                                    <div className="col-5 align-center">
                                                        <span>Name</span>
                                                    </div>
                                                    <div className="col-2 align-center">
                                                        <span>Quantity</span>
                                                    </div>
                                                    <div className="col-3 align-right">
                                                        <span>Price</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 panel-body basket-body">
                                                {"{"}
                                                {"{"}#products{"}"}
                                                {"}"}
                                                <div className="row product">
                                                    <div className="col-2 product-image">
                                                        
                                                    </div>
                                                    <div className="col-5">
                                                        {"{"}
                                                        {"{"}name{"}"}
                                                        {"}"}
                                                        <br />
                                                        <span className="additional">
                                                            {"{"}
                                                            {"{"}additional{"}"}
                                                            {"}"}
                                                        </span>
                                                    </div>
                                                    <div className="col-2 align-right">
                                                        <span className="sub" /> {"{"}
                                                        {"{"}quantity{"}"}
                                                        {"}"}
                                                    </div>
                                                    <div className="col-3 align-right">
                                                        <span className="sub" />{" "}
                                                    </div>
                                                </div>
                                                {"{"}
                                                {"{"}/products{"}"}
                                                {"}"}
                                            </div>
                                            <div className="col-12 panel-footer basket-footer">
                                                <hr />
                                                <div className="row">
                                                    <div className="col-8 align-right description">
                                                        <div className="dive">Subtotal</div>
                                                    </div>
                                                    <div className="col-4 align-right">
                                                        <span className="emphasized" />
                                                    </div>
                                                    <div className="col-8 align-right description">
                                                        <div className="dive">Taxes</div>
                                                    </div>
                                                    <div className="col-4 align-right">
                                                        <span className="emphasized" />
                                                    </div>
                                                    <div className="col-8 align-right description">
                                                        <div className="dive">Shipping</div>
                                                    </div>
                                                    <div className="col-4 align-right">
                                                        <span className="emphasized" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-8 align-right description">
                                                        <div className="dive">Total</div>
                                                    </div>
                                                    <div className="col-4 align-right">
                                                        <span className="very emphasized" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="row panel-wrapper">
                                            <div className="col-12 panel-header creditcard-header">
                                                <div className="row">
                                                    <div className="col-12 creditcard-title">
                                                        <span className="description">please enter your</span>
                                                        <br />
                                                        <span className="emphasized">
                                                            Credit Card Information
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 panel-body creditcard-body">
                                                <form action="#" method="post" target="_self">
                                                    <fieldset>
                                                        <label htmlFor="card-name">Name on the Card</label>
                                                        <br />
                                                        <i className="fa fa-user-o" aria-hidden="true" />
                                                        <input
                                                            type="text"
                                                            id="card-name"
                                                            name="card-name"
                                                            placeholder="abhi nanga dudh wala"
                                                            title="Name on the Card"
                                                        />
                                                    </fieldset>
                                                    <fieldset>
                                                        <label htmlFor="card-number">Card Number</label>
                                                        <br />
                                                        <i className="fa fa-credit-card" aria-hidden="true" />
                                                        <input
                                                            type="text"
                                                            id="card-number"
                                                            name="card-number"
                                                            placeholder="1234 5678 9123 4567"
                                                            title="Card Number"
                                                        />
                                                    </fieldset>
                                                    <fieldset>
                                                        <label htmlFor="card-expiration">Expiration Date</label>
                                                        <br />
                                                        <i className="fa fa-calendar" aria-hidden="true" />
                                                        <input
                                                            type="text"
                                                            id="card-expiration"
                                                            name="card-expiration"
                                                            placeholder="YY/MM"
                                                            title="Expiration"
                                                            className="card-expiration"
                                                        />
                                                    </fieldset>
                                                    <fieldset>
                                                        <label htmlFor="card-ccv">CVC/CCV</label>&nbsp;
                                                        <i
                                                            className="fa fa-info-circle"
                                                            aria-hidden="true"
                                                            data-toggle="tooltip"
                                                            data-placement="right"
                                                            title="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards. On your American Express branded credit or debit card it is a 4 digit numeric code."
                                                        />
                                                        <br />
                                                        <i className="fa fa-lock" aria-hidden="true" />
                                                        <input
                                                            type="text"
                                                            id="card-ccv"
                                                            name="card-ccv"
                                                            placeholder={123}
                                                            title="CVC/CCV"
                                                        />
                                                    </fieldset>
                                                </form>
                                            </div>
                                            <div className="col-12 panel-footer creditcard-footer">
                                                <div className="row">
                                                    <div className="col-12 align-right">
                                                        <button className="cancel">Cancel</button>&nbsp;
                                                        <button className="confirm">Confirm &amp; Pay</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Checkout;