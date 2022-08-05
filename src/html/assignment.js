import React from "react";
import Footer from "./footer";
import Header from "./header";
import "./assignment.css"
function Assignment() {
    return (
        <>
            <Header />
            <>
                <div className="role" style={{border: "2px solid", borderColor: "#6c55f9", width: "700px", marginLeft: "30%", borderRadius: "5px", padding: "20px"}}>
                    <div className="mb-3">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">
                                Project Type
                            </label>
                            <select className="form-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value={1}>Assignment</option>
                                <option value={2}>Practical</option>
                                <option value={3}>Coming Soon....</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div id="emailHelp" className="form-text" />
                        <label htmlFor="exampleInputEmail1" className="form-label" />
                        <input
                            style={{ marginBottom: 15 }}
                            type="Text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Department"
                        />
                        <input
                            type="Text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" id="inputGroupFile02" />
                        <label className="input-group-text" htmlFor="inputGroupFile02">
                            Due Date
                        </label>
                    </div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02" />
                        <label className="input-group-text" htmlFor="inputGroupFile02">
                            Upload
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                        />
                    </div>
                    <button type="submit" className="but col-4 offset-4" style={{backgroundColor: "#6c55f9", color: "white"}}>
                        Submit
                    </button>
                </div>

            </>

            <Footer />
        </>
    );
}
export default Assignment;