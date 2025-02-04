import React, { useState, useEffect } from "react";
import styles from "./EditJobs.module.css";
import Chips from "react-chips";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getjobPortal } from "../../api/api";

const EditJobs = (props) => {


  const [companyName, setcompanyName] = useState("");
  const [companyLogo, setcompanyLogo] = useState("");
  const [Position, setPosition] = useState("");
  const [workingEmployee, setworkingEmployee] = useState("");
  const [Salary, setSalary] = useState("");
  const [jobType, setjobType] = useState("");

  const [jobWork, setjobWork] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  const [About, setAbout] = useState("");
  const [tags, setTags] = useState([]);
  const [id, setid] = useState("");

  function companyChange(e) {

    setcompanyName(e.target.value);
  }

  function logoChange(e) {
    setcompanyLogo(e.target.value);
  }

  function positionChange(e) {
    setPosition(e.target.value);
  }

  function salaryChange(e) {
    setSalary(e.target.value);
  }

  function employeechange(e) {
    setworkingEmployee(e.target.value);
  }

  function fullTimeClicked() {
    setjobType("FullTime");
  }

  function PartTimeClicked() {
    setjobType("PartTime");
  }

  function RemoteClicked() {
    setjobWork("Remote");
  }

  function OfficeClicked() {
    setjobWork("Office");
  }

  function locationChange(e) {
    setLocation(e.target.value);
  }

  function DescChange(e) {
    setDescription(e.target.value);
  }

  function AboutChange(e) {
    setAbout(e.target.value);
  }

  function handleTagChange(tags) {
    setTags(tags);
  }

  const updatejobPortal = async () => {

    await axios.post("https://jobportalbackend-6pa0.onrender.com/portal/portalupdate", {
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
      id: id,
    });

   

    const data = await getjobPortal();

    props.pushrefrshpage(data);

    toast.success("updated successfully", {
      position: toast.POSITION.TOP_RIGHT,
    })
    
    
  };

  function changeData() {
    setcompanyName(props.pushdatatoeditjobs.name);
    setcompanyLogo(props.pushdatatoeditjobs.Logo);
    setAbout(props.pushdatatoeditjobs.about);
    setDescription(props.pushdatatoeditjobs.Desc);
    setLocation(props.pushdatatoeditjobs.Location);
    setjobType(props.pushdatatoeditjobs.jobWork)
    setjobWork(props.pushdatatoeditjobs.jobType)
    setSalary(props.pushdatatoeditjobs.salary);
    setworkingEmployee(props.pushdatatoeditjobs.workingEmployee);
    setTags(props.pushdatatoeditjobs.skills);
    setPosition(props.pushdatatoeditjobs.position);
    setid(props.pushdatatoeditjobs.updateid);
  }

  useEffect(() => {
    changeData();
  }, [props.pushdatatoeditjobs.name]);

  return (
    <div>
    <ToastContainer />
      <form class="was-validated">
        <div
          class="modal fade"
          id="staticBackdrop1"
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
                      value={companyName}
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
                      onChange={companyChange}
                      required
                    />
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Add logo url{" "}
                    <input
                      value={companyLogo}
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
                      onChange={logoChange}
                      required
                    />
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Job position{" "}
                    <input
                      value={Position}
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
                      onChange={positionChange}
                      required
                    />
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    monthly salary{" "}
                    <input
                      value={Salary}
                      type="text"
                      class="form-control"
                      placeholder="Enter Amount in Rupees"
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
                      onChange={salaryChange}
                      required
                    />
                  </div>
                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Working Employee{" "}
                    <input
                      value={workingEmployee}
                      type="text"
                      class="form-control"
                      placeholder="eg; 11-50"
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
                      onChange={employeechange}
                      required
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
                          <label class="btn btn-light" onClick={fullTimeClicked}>
                            <input
                              type="radio"
                              name="options"
                              id="option1"
                              // autocomplete="off"
                              checked={jobType ==="FullTime"? true : false}
                              required
                            />{" "}
                            FullTime
                          </label>
                          <label class="btn btn-light" onClick={PartTimeClicked}>
                            <input
                              type="radio"
                              name="options"
                              id="option4"
                              // autocomplete="off"
                              checked={jobType ==="PartTime"? true : false}
                              required
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
                          <label class="btn btn-light" onClick={RemoteClicked}>
                            <input
                              type="radio"
                              name="options"
                              id="option3"
                              // autocomplete="off"
                              checked={jobWork ==="Remote"? true : false}
                              required
                            />{" "}
                            Remote
                          </label>
                          <label class="btn btn-light" onClick={OfficeClicked}>
                            <input
                              type="radio"
                              name="options"
                              id="option4"
                              // autocomplete="off"
                              checked={jobWork ==="Office"? true : false}
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
                      value={Location}
                      type="text"
                      class="form-control"
                      placeholder="Enter job Location"
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
                      onChange={locationChange}
                      required
                    />
                  </div>

                  <div class="p-2 bd-highlight" className={styles.heading}>
                    Job Description{" "}
                    <textarea
                      value={Description}
                      type="text"
                      class="form-control"
                      placeholder="Type job description"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
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
                      required
                    />
                  </div>

                  <div class="p-2 bd-highlight" className={styles.heading}>
                    About Company{" "}
                    <textarea
                      value={About}
                      type="text"
                      class="form-control"
                      placeholder="Type about your company"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
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
                      required
                    />
                  </div>

                  <div class="p-2 bd-highlight" className={styles.heading}>
                    skills required{" "}
                    <Chips
                      value={tags}
                      onChange={handleTagChange}
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
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={updatejobPortal}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditJobs;
