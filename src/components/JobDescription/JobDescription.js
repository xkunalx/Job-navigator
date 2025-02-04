import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const JobDescription = (props) => {
  const { id } = useParams();

  const [companyName, setcompanyName] = useState("");
  const [companyLogo, setcompanyLogo] = useState("");
  const [Position, setPosition] = useState("");
  const [Salary, setSalary] = useState("");
  const [jobType, setjobType] = useState("");
  const [jobWork, setjobWork] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  const [About, setAbout] = useState("");
  const [skill, setskill] = useState([]);
  const [created, setcreated] = useState();

  async function getjobPortalDataatDesc() {

    try {
      const result = await axios.get(`https://jobportalbackend-6pa0.onrender.com/portal/Desc/${id}`);
      setcompanyName(result.data[0].companyName);
      setcompanyLogo(result.data[0].logo);
      setPosition(result.data[0].jobPosition);
      setSalary(result.data[0].salary);
      setjobType(result.data[0].jobType);
      setjobWork(result.data[0].jobWork);
      setLocation(result.data[0].location);
      setDescription(result.data[0].Description);
      setAbout(result.data[0].aboutCompany);
      setskill(result.data[0].skills);
      setcreated(result.data[0].createdAt);
    } catch (error) {
      console.log(error)
    }
    
      
  }

  useEffect(() => {
    getjobPortalDataatDesc();
  }, []);

  return (
    <div>
      <div class="card" style={{ boxShadow: "0px 0px 9px 1px" }}>
        <div class="card-body">
          <div class="d-flex bd-highlight mb-3" style={{ marginBottom: "0px" }}>
            <div class="p-2 bd-highlight">
              <img
                src={companyLogo}
                alt="logo"
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "16px",
                }}
              />
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {Position}
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {companyName}
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {moment(created).fromNow()}
                </div>
              </div>
            </div>
            <div class="ms-auto p-2 bd-highlight">
              <button
                class=" btn btn-light"
                style={{ border: "2px solid #CECECE" }}
                onClick={(e) => {
                  navigator.clipboard.writeText(
                    `${window.location.href}`
                  );
                  toast.success("copied", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                }}
              >
                copy link
              </button>
              <ToastContainer />
            </div>
          </div>
          <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Job Offer
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  <img src={require("../Images/rupees.png")} alt="logo" />{" "}
                  {Salary}
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Job Mode
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {jobType}
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Office/Remote
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {jobWork}
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#858585",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Location
                </div>
                <div
                  class="p-2 bd-highlight"
                  style={{
                    color: "#0038FF",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  {Location}
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight">
              <div class="p-2 bd-highlight">
                <div class="d-flex flex-column bd-highlight mb-3">
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      color: "black",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    About Job
                  </div>
                  <div
                    class="p-2 bd-highlight"
                    style={{
                      color: "#858585",
                      fontWeight: "400",
                      fontSize: "18px",
                    }}
                  >
                    {About}
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 bd-highlight">
              <div
                class="card"
                style={{ border: "2px solid #CECECE", width: "275px" }}
              >
                <h3
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: "20px",
                    marginLeft: "20px",
                    marginTop: "4px",
                  }}
                >
                  Skill Mandatory
                </h3>

                <div class="card-body">
                  {" "}
                  <div class="row">
                    {skill.map((skill) => (
                      <div class="col-6">
                        <button
                          class="btn btn-primary "
                          style={{
                            margin: "2px",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                          }}
                        >
                          {skill}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column bd-highlight mb-3">
            <div
              class="p-2 bd-highlight"
              style={{ color: "black", fontWeight: "500", fontSize: "20px" }}
            >
              About Company
            </div>
            <div
              class="p-2 bd-highlight"
              style={{ color: "#858585", fontWeight: "400", fontSize: "18px" }}
            >
              {Description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
