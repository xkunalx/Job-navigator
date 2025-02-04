import React,{useState,useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import JobPortal from "../JobPortal/JobPortal";
import JobDescription from "../JobDescription/JobDescription";
const Home = () => {
  
const [pushandpulldatafromjobprtaltodescription, setpushandpulldatafromjobprtaltodescription] = useState()

 useEffect( () => {
}, [pushandpulldatafromjobprtaltodescription])



  return (
    <div class="container-fluid">
      <div class="d-flex bd-highlight mb-3">
        <div class="p-2 bd-highlight">
          <img src={require("../Images/mountain.png")} alt="logo" />
        </div>
        <div class="p-2 bd-highlight" style={{ color: "#0038FF" }}>
          <h2 style={{ padding: "20px" }} >Findmyjobs</h2>
        </div>
        <div class="ms-auto p-2 bd-highlight" style={{ color: "#A4A4A4" }}>
          <h5 style={{ padding: "20px" }}>Hello Recruiter !</h5>
        </div>
        <div class=" p-2 bd-highlight">
          <img src={require("../Images/Recruiter.png")} alt="profile" />
        </div>
      </div>


      <div class="d-flex flex-row bd-highlight mb-1">
        <div class="p-2 bd-highlight"><h4 style={{color:"#858585"}}>Find your next remote job at companies like </h4></div>
        <div class="p-2 bd-highlight"><h4 style={{color:"#0038FF"}}>swiggy, nike</h4></div>
        <div class="p-2 bd-highlight"><h4 style={{color:"#858585"}}>and  </h4></div>
        <div class="p-2 bd-highlight"><h4 style={{color:"#0038FF"}}>Cuvette </h4></div>
   </div>
 <BrowserRouter>
    <Routes>
         <Route path="/"  element={ <JobPortal  pullDatafromjobportal={setpushandpulldatafromjobprtaltodescription}  />}/>  
    </Routes>
    <Routes>
        <Route  path='/about/:id' element={<JobDescription  pushdatatojobdescription={pushandpulldatafromjobprtaltodescription}  />}    />
    </Routes>
 </BrowserRouter>

  

    </div>

    
  );
};

export default Home;
