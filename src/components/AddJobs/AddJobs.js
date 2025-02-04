import React, { useState } from "react";
import styles from "./AddJobs.module.css";
import Chips from "react-chips";
import axios from "axios";
import { getjobPortal } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddJobs = (props) => {
  const [companyName, setcompanyName] = useState("");
  const [companyLogo, setcompanyLogo] = useState("");
  const [Position, setPosition] = useState("");
  const [Salary, setSalary] = useState("");
  const [workingEmployee, setworkingEmployee] = useState("");
  const [jobType, setjobType] = useState("");
  const [jobWork, setjobWork] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  const [About, setAbout] = useState("");
  const [tags, setTags] = useState([]);

  function DescChange(e) {
    setDescription(e.target.value);
  }

  function AboutChange(e) {
    setAbout(e.target.value);
  }

  function handleTagChange(tags) {
    setTags(tags);
  }

  const submitjobPortal = async () => {
    if (
      companyName !== "" &&
      companyLogo !== "" &&
      Position !== "" &&
      Salary !== "" &&
      workingEmployee !== "" &&
      jobType !== "" &&
      jobWork !== "" &&
      Location !== "" &&
      Description !== "" &&
      About !== ""
    ) {
      await axios.post("https://jobportalbackend-6pa0.onrender.com/portal", {
        companyName: companyName,
        companyLogo: companyLogo,
        Position: Position,
        Salary: Salary,
        workingEmployee: workingEmployee,
        jobType: jobType,
        jobWork: jobWork,
        Location: Location,
        Description: Description,
        About: About,
        tags: tags,
      });

      const data = await getjobPortal();
      props.pullData(data);

      toast.success("submit successfully", {
        position: toast.POSITION.TOP_RIGHT,
      })
      
      window.location.reload(true);
    }
  };

  return (
    <div>
    <ToastContainer/>
      <form class="was-validated">
        <div
          class="modal fade"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="staticBackdropLabel"
                  style={{ color: "#0038FF" }}
                >
                  Findmyjobs
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Add job description
                <hr />
                <div class="d-flex flex-column bd-highlight mb-3">
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    company Name{" "}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your company name here"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      style={{
                        width: "400px",
                        color: "#9C9C9C",
                        border: "2px solid #CECECE",
                        float: "right",
                        marginRight: "100px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setcompanyName(e.target.value)}
                      required
                    />
                  </div>

                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Add logo url{" "}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter the link"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      style={{
                        width: "400px",
                        color: "#9C9C9C",
                        border: "2px solid #CECECE",
                        float: "right",
                        marginRight: "100px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setcompanyLogo(e.target.value)}
                      required
                    />
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Job position{" "}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter job position"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      style={{
                        width: "400px",
                        color: "#9C9C9C",
                        border: "2px solid #CECECE",
                        float: "right",
                        marginRight: "100px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                    />
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    monthly salary{" "}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Amount in Rupees"
                      aria-label="Example text with button addon"
                      required
                      style={{
                        width: "400px",
                        color: "#9C9C9C",
                        border: "2px solid #CECECE",
                        float: "right",
                        marginRight: "100px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Working Employee{" "}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="eg; 11-50"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      required
                      style={{
                        width: "400px",
                        color: "#9C9C9C",
                        border: "2px solid #CECECE",
                        float: "right",
                        marginRight: "100px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setworkingEmployee(e.target.value)}
                    />
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    <div class="dropdown">
                      Job type{" "}
                      <button
                        class="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          float: "right",
                          marginRight: "420px",
                          marginBottom: "10px",
                        }}
                      >
                        select
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >

                        <div
                          class="btn-group btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label
                            class="btn btn-light"
                            onClick={(e) => setjobWork("FullTime")}
                          >
                            <input
                              type="radio"
                              name="options"
                              id="option1"
                              autocomplete="off"
                            />{" "}
                            FullTime
                          </label>
                          <label
                            class="btn btn-light"
                            onClick={(e) => setjobWork("PartTime")}
                          >
                            <input
                              type="radio"
                              name="options"
                              id="option2"
                              autocomplete="off"
                            />{" "}
                            PartTime
                          </label>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    <div class="dropdown">
                      Remote/Office
                      <button
                        class="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          float: "right",
                          marginRight: "420px",
                          marginBottom: "10px",
                        }}
                      >
                        select
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <div
                          class="btn-group btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label
                            class="btn btn-light"
                            onClick={(e) => setjobType("Remote")}
                          >
                            <input
                              type="radio"
                              name="options"
                              id="option3"
                              autocomplete="off"
                              required
                            />{" "}
                            Remote
                          </label>
                          <label
                            class="btn btn-light"
                            onClick={(e) => setjobType("Office")}
                          >
                            <input
                              type="radio"
                              name="options"
                              id="option4"
                              autocomplete="off"
                              required
                            />{" "}
                            Office
                          </label>
                        </div>
                      </ul>
                    </div>
                  </div>

                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Location{" "}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter job Location"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      required
                      style={{
                        width: "400px",
                        color: "#9C9C9C",
                        border: "2px solid #CECECE",
                        float: "right",
                        marginRight: "100px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Job Description{" "}
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Type job description"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      required
                      style={{
                        width: "400px",
                        height: "100px",
                        color: "#9C9C9C",
                        border: "2px solid #CECECE",
                        float: "right",
                        marginRight: "100px",
                        marginTop: "10px",
                      }}
                      onChange={DescChange}
                    />
                  </div>

                  <div class="p-2 bd-highlight" className={styles.heading}>
                    About Company{" "}
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Type about your company"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      required
                      style={{
                        width: "400px",
                        height: "70px",
                        color: "#9C9C9C",
                        border: "2px solid #CECECE",
                        float: "right",
                        marginRight: "100px",
                        marginTop: "10px",
                      }}
                      onChange={AboutChange}
                    />
                  </div>

                  <div class="p-2 bd-highlight" className={styles.heading}>
                    skills required{" "}
                    <Chips
                      value={tags}
                      onChange={handleTagChange}
                      required
                      suggestions={[
                        "html",
                        "css",
                        "javascript",
                        "reactjs",
                        "angularjs",
                        "nodejs",
                        "mongodb",
                        "bootstrap",
                        "figma","python",
                        "kotlin",
                        "frontend",
                        "backend",
                        "fullstack",

                      ]}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  class="btn btn-primary "
                  type="submit"
                  onClick={submitjobPortal}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
