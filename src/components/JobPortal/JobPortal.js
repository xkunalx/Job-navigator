import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditJobs from "../EditJobs/EditJobs";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddJobs from "../AddJobs/AddJobs";
import { getjobPortal } from "../../api/api";
import { getjoblocation, getjobskills } from "../../api/api";

const JobPortal = (props) => {
  const navigate = useNavigate();

  const [fetchedDatafromAddjobs, setfetchedDatafromAddjobs] = useState([]);
  const [filtersearchquery, setfiltersearchquery] = useState("");
  const [filterlocation, setfilterlocation] = useState("");
  const [filterskill, setfilterskill] = useState();
  const [senddatatoeditjobs, setsenddatatoeditjobs] = useState({});

  const [loaction, setloaction] = useState([]);
  const [getskills, setgetskills] = useState([]);
  const [previousData, setPreviousData] = useState([""]);

  const handleClick = (index) => {
    const newArray = [...previousData];
    if (index > 1) {
      setfilterskill(previousData[index]);
    }
    newArray.splice(index + 1, 1);
    setPreviousData(newArray);
  };

  async function getjobPortalData() {
    const data = await getjobPortal();
    setfetchedDatafromAddjobs(data);
  }

  async function locationclicked() {
    const data = await getjoblocation();
    setloaction(data);
  }

  async function skillsClicked() {
    const data = await getjobskills();

    setgetskills(data);
  }
  useEffect(() => {
    locationclicked();
    skillsClicked();
    getjobPortalData();
  }, []);

  return (
    <div>
      <AddJobs pullData={setfetchedDatafromAddjobs} />
      <EditJobs
        pushdatatoeditjobs={senddatatoeditjobs}
        pushrefrshpage={setfetchedDatafromAddjobs}
      />
      <div
        class="card"
        style={{
          width: "1500px",
          height: "800px",
          boxShadow: "0px 0px 9px 1px",
          position: "absolute",
        }}
      >
        <div class="card-body">
          <div class="d-flex bd-highlight mb-3">
            <div class="p-2 bd-highlight">
              <div class="input-group mb-3">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  <img src={require("../Images/search.png")} alt="seacrh" />
                </button>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Job title or keyword"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  style={{
                    width: "400px",
                    color: "#9C9C9C",
                    border: "2px solid #CECECE",
                  }}
                  onChange={(e) => setfiltersearchquery(e.target.value)}
                />
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="dropdown">
                <button
                  class="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#9C9C9C", border: "2px solid #CECECE" }}
                >
                  <img src={require("../Images/location.png")} alt="location" />{" "}
                  Location
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <div class="container">
                    {loaction.map((locate) => (
                      <li>
                        {" "}
                        <button
                          key={locate}
                          class="btn btn-outline-dark"
                          style={{ marginTop: "5px" }}
                          onClick={() => setfilterlocation(locate)}
                        >
                          {locate}
                        </button>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
            <div class="ms-auto p-2 bd-highlight">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop2"
              >
                + Add Job
              </button>
            </div>
          </div>
          <p style={{ color: "#858585", fontSize: "25px", fontWeight: "500" }}>
            Jobs you have posted as a recruiter are listed below
          </p>
          <div class="dropdown">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "#9C9C9C", border: "2px solid #CECECE" }}
            >
              Skills
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div class="container">
                {getskills.map((skill) => (
                  <li>
                    {" "}
                    <button
                      key={skill}
                      class="btn btn-outline-dark"
                      style={{ marginTop: "5px" }}
                      onClick={() => {
                        setfilterskill(skill);
                        // setPreviousData(skill)
                        setPreviousData((prevItems) => [...prevItems, skill]);
                      }}
                    >
                      {skill}
                    </button>
                  </li>
                ))}
              </div>
            </ul>

            {filterskill &&
              previousData.slice(1).map((item, index) => (
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ marginLeft: "10px" }}
                >
                  {item}{" "}
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    aria-label="Close"
                    onClick={() => handleClick(index)}
                  >
                    {" "}
                  </button>
                </button>
              ))}
          </div>
          <div style={{ color: "#858585", marginTop: "30px" }}>
            <h4>{fetchedDatafromAddjobs.length}+ Jobs</h4>
          </div>
          <div
            class="container-fluid"
            style={{ height: "500px", overflowY: "scroll", marginTop: "20px" }}
          >
            <div class="container-fluid">
              {fetchedDatafromAddjobs
                .filter((job) => {
                  if (
                    filtersearchquery &&
                    !job.jobPosition.toLowerCase().includes(filtersearchquery)
                  ) {
                    return false;
                  }
                  if (filterskill && !job.skills.includes(filterskill)) {
                    return false;
                  }
                  if (
                    filterlocation &&
                    !job.location.includes(filterlocation)
                  ) {
                    return false;
                  }
                  return true;
                })
                .reverse()
                .map((portalData) => (
                  <div
                    class="card"
                    style={{
                      background: "#FFFFFF",
                      border: " 2px solid rgba(0, 56, 255, 0.31)",
                      borderRadius: " 9px",
                      marginTop: "20px",
                    }}
                    key={portalData._id}
                    onClick={async () => {
                      await props.pullDatafromjobportal({
                        id: portalData._id,
                        position: portalData.jobPosition,
                        salary: portalData.salary,
                        work: portalData.jobWork,
                        type: portalData.jobType,
                        Desc: portalData.Description,
                        about: portalData.aboutCompany,
                        name: portalData.companyName,
                        Location: portalData.location,
                        Logo: portalData.logo,
                        skills: portalData.skills,
                      });
                      navigate(`/about/${portalData._id}`);
                    }}
                  >
                    <div class="d-flex bd-highlight">
                      <div class="p-2 bd-highlight">
                        <img
                          src={portalData.logo}
                          alt="logo"
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "16px",
                          }}
                        />
                      </div>
                      <div class="p-2 flex-grow-1 bd-highlight">
                        <div class="d-flex flex-column bd-highlight mb-3">
                          <div
                            class="p-2 bd-highlight"
                            style={{
                              marginLeft: "23px",
                              color: "#000000",
                              fontWeight: "500",
                              fontSize: "25.3714px",
                            }}
                          >
                            {" "}
                            {portalData.jobPosition}
                          </div>
                          <div class="p-2 bd-highlight">
                            <div class="d-flex flex-row bd-highlight mb-3">
                              <div
                                class="p-2 bd-highlight"
                                style={{
                                  marginLeft: "20px",
                                  color: "#9C9C9C",
                                  fontWeight: "500",
                                  fontSize: " 23.9226px",
                                }}
                              >
                                {" "}
                                <img
                                  src={require("../Images/people.png")}
                                  alt="logo"
                                />{" "}
                                {portalData.workingEmployee}
                              </div>
                              <div
                                class="p-2 bd-highlight"
                                style={{
                                  marginLeft: "20px",
                                  color: "#9C9C9C",
                                  fontWeight: "500",
                                  fontSize: " 23.9226px",
                                }}
                              >
                                {" "}
                                <img
                                  src={require("../Images/rupees.png")}
                                  alt="logo"
                                />{" "}
                                {portalData.salary}
                              </div>
                              <div
                                class="p-2 bd-highlight"
                                style={{
                                  marginLeft: "20px",
                                  color: "#9C9C9C",
                                  fontWeight: "500",
                                  fontSize: " 23.9226px",
                                }}
                              >
                                {" "}
                                <img
                                  src={require("../Images/flag.png")}
                                  alt="logo"
                                />{" "}
                                {portalData.location}
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex flex-row bd-highlight mb-3"
                            style={{ marginLeft: "23px" }}
                          >
                            <div
                              class="p-2 bd-highlight"
                              style={{
                                color: "blue",
                                fontWeight: "500",
                                fontSize: "19.6507px",
                              }}
                            >
                              {portalData.jobWork}
                            </div>
                            <div
                              class="p-2 bd-highlight"
                              style={{
                                color: "blue",
                                fontWeight: "500",
                                fontSize: "19.6507px",
                              }}
                            >
                              {portalData.jobType}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column bd-highlight mb-3">
                        <div
                          class="p-2 bd-highlight"
                          style={{
                            marginTop: "20px",
                            color: "#9C9C9C",
                            fontWeight: "500",
                            fontSize: " 23.9226px",
                          }}
                        >
                          {moment(portalData.createdAt).fromNow()}
                        </div>
                        <div
                          class="d-flex flex-row bd-highlight mb-3"
                          style={{ marginTop: "80px" }}
                        >
                          <div class="p-2 bd-highlight">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop1"
                              onClick={(event) => {
                                event.stopPropagation();
                                setsenddatatoeditjobs({
                                  name: portalData.companyName,
                                  Logo: portalData.logo,
                                  about: portalData.aboutCompany,
                                  Desc: portalData.Description,
                                  Location: portalData.location,
                                  jobType: portalData.jobType,
                                  jobWork: portalData.jobWork,
                                  workingEmployee: portalData.workingEmployee,
                                  salary: portalData.salary,
                                  skills: portalData.skills,
                                  position: portalData.jobPosition,
                                  updateid: portalData._id,
                                });
                              }}
                            >
                              {" "}
                              edit job
                            </button>
                          </div>
                          <div class="p-2 bd-highlight">
                            <button
                              class="btn btn-light"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(
                                  `${window.location.href}about/${portalData._id}`
                                );
                                toast.success("copied !", {
                                  position: toast.POSITION.TOP_RIGHT,
                                });
                              }}
                            >
                              {" "}
                              copy link
                            </button>
                            <ToastContainer />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
