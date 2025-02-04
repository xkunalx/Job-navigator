import axios from "axios";


export async function getjobPortal(){
    const reqUrl = "https://jobportalbackend-6pa0.onrender.com/portal/get-jobPortal";
    const result = await axios.get(reqUrl);
    console.log(result.data)
    if(result.data) {
        return result.data;
    }
}


export async function getjoblocation(){
    const reqUrl = "https://jobportalbackend-6pa0.onrender.com/portal/get-location";
    const result = await axios.get(reqUrl);
    console.log(result.data)
    if(result.data) {
        return result.data;
    }
}

export async function getjobskills(){
    const reqUrl = "https://jobportalbackend-6pa0.onrender.com/portal/get-skills";
    const result = await axios.get(reqUrl);
    console.log(result.data)
    if(result.data) {
        return result.data;
    }
}

export async function getjobDataAtDescription(){
    const reqUrl = "https://jobportalbackend-6pa0.onrender.com/portal/Desc";
    const result = await axios.get(reqUrl);
    console.log(result.data)
    if(result.data) {
        return result.data;
    }
}