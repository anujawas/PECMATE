import React from 'react';
import '../assets/css/dashboard_style.css';

function Student() {
    return (
        <>
  <input type="checkbox" id="nav-toggle" />
  <div className="sidebar">
    <div className="sidebar-brand">
      <h2 style={{ paddingTop: 20 }}>
        <span className="las la-book" />
        <span>PecMate</span>
      </h2>
    </div>
    <div className="sidebar-menu">
      <ul>
        <li>
          <a href className="active">
            <span className="las la-plus-circle" />
            <span>New Upload</span>
          </a>
        </li>
        <li>
          <a href>
            <span className="las la-user" />
            <span>User Profile</span>
          </a>
        </li>
        <li>
          <a href>
            <span className="las la-shopping-bag" />
            <span>Orders</span>
          </a>
        </li>
        <li>
          <a href>
            <span className="las la-phone" />
            <span>Contacts Us</span>
          </a>
        </li>
        <li>
          <a href>
            <span className="las la-receipt" />
            <span>Current Plan</span>
          </a>
        </li>
        <li>
          <a href>
            <span className="las la-users" />
            <span>Accounts</span>
          </a>
        </li>
        <li>
          <a href>
            <span className="las la-info" />
            <span>Terms &amp; Condition</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="main-content">
    <header>
      <h1>
        <label htmlFor="nav-toggle">
          <span className="las la-bars" />
          DashBoard
        </label>
      </h1>
      <div className="search-wrapper">
        <span className="las la-search" />
        <input type="search" placeholder="Search here" />
      </div>
      <div className="user-wrapper">
        <img src="assets/user.png" width="40px" height="40px" alt />
        <div>
          <h4>Abhi Mehta</h4>
          <small>Student</small>
        </div>
      </div>
    </header>
    <main>
      <div className="cards">
        <div className="card-single">
          <div>
            <h1>8</h1>
            <span>Orders</span>
          </div>
          <div>
            <span className="las la-users" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>6</h1>
            <span>Assignment</span>
          </div>
          <div>
            <span className="las la-clipboard-list" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>2</h1>
            <span>Practicals</span>
          </div>
          <div>
            <span className="las la-book" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>Premium</h1>
            <span>Current Plan</span>
          </div>
          <div>
            <span style={{ color: "white" }} className="las la-shopping-bag" />
          </div>
        </div>
      </div>
      <div className="recent-grid">
        <div className="projects">
          <div className="card">
            <div className="card-header">
              <h3>Recent Orders</h3>
              <button>
                See all <span className="las la-arrow-right" />
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table width="100%">
                  <thead>
                    <tr>
                      <td>Project Type</td>
                      <td>Department</td>
                      <td>Status</td>
                      <td>Deadline</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Assignment</td>
                      <td>Applied Physics</td>
                      <td>
                        <span className="status yellow" />
                        Assigned
                      </td>
                      <td>
                        <span>20-12-2020</span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Assignment</td>
                      <td>Applied Maths</td>
                      <td>
                        <span className="status yellow " />
                        Assigned
                      </td>
                      <td>
                        <span>20-12-2020</span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Lab file</td>
                      <td>Propulsion</td>
                      <td>
                        <span className="status red" />
                        Pending
                      </td>
                      <td>
                        <span>20-12-2020</span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Assignment</td>
                      <td>IEEE</td>
                      <td>
                        <span className="status green" />
                        completed
                      </td>
                      <td>
                        <span>20-12-2020</span>{" "}
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Assignment</td>
                      <td>Applied Physics</td>
                      <td>
                        <span className="status yellow" />
                        Assigned
                      </td>
                      <td>
                        <span>20-12-2020</span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Assignment</td>
                      <td>Applied Maths</td>
                      <td>
                        <span className="status yellow" />
                        Assigned
                      </td>
                      <td>
                        <span>20-12-2020</span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Lab file</td>
                      <td>Data structure</td>
                      <td>
                        <span className="status green" />
                        Completed
                      </td>
                      <td>
                        <span>20-12-2020</span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Assignment</td>
                      <td>IEEE</td>
                      <td>
                        <span className="status green" />
                        completed
                      </td>
                      <td>
                        <span>20-12-2020</span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="customers">
          <div className="card">
            <div className="card-header">
              <h3>New Assignment/Practical</h3>
              {/* <button>Upload<span class="las la-arrow-right" ></span></button> */}
            </div>
            <div className="customers">
              <div className="card">
                <div className="card-header">
                  <h5 style={{ justifyContent: "center" }}>
                    9 Assignments and 1 Practical left in your Premium Account
                  </h5>
                </div>
                <div className="customers">
                  <div className="card">
                    <div className="card-header">
                      <button>
                        Upload
                        <div
                          className="las la-arrow-right"
                          style={{ margin: "auto" }}
                        />
                      </button>
                    </div>
                    {/* <div class="card-body">
                      <div class="customer">
                          <div class="info">
                              <img src="assets/user.png" width="40px" height="40px" alt="">
                              <div>
                                  <h4>Abhi Mehta</h4>
                                  <small>Aerospace</small>
                               </div>
                          </div>
                          <div class="contact">
                              <span class="las la-user-circle" ></span>
                              <span class="las la-comment" ></span>
                              <span class="las la-phone" ></span>
                          </div>
                      </div>
                      <div class="customer">
                          <div class="info">
                              <img src="assets/user.png" width="40px" height="40px" alt="">
                              <div>
                                  <h4>Anuj Awasthi</h4>
                                  <small>Electrical</small>
                               </div>
                          </div>
                          <div class="contact">
                              <span class="las la-user-circle" ></span>
                              <span class="las la-comment" ></span>
                              <span class="las la-phone" ></span>
                          </div>
                      </div>
                      <div class="customer">
                          <div class="info">
                              <img src="assets/user.png" width="40px" height="40px" alt="">
                              <div>
                                  <h4>Goru</h4>
                                  <small>Aerospace</small>
                               </div>
                          </div>
                          <div class="contact">
                              <span class="las la-user-circle" ></span>
                              <span class="las la-comment" ></span>
                              <span class="las la-phone" ></span>
                          </div>
                      </div>
                      <div class="customer">
                          <div class="info">
                              <img src="assets/user.png" width="40px" height="40px" alt="">
                              <div>
                                  <h4>Vinay</h4>
                                  <small>Aerospace</small>
                               </div>
                          </div>
                          <div class="contact">
                              <span class="las la-user-circle" ></span>
                              <span class="las la-comment" ></span>
                              <span class="las la-phone" ></span>
                          </div>
                      </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</>

    )
}

export default Student
