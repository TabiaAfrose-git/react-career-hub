import { stringify } from "postcss";
import { json } from "react-router-dom";

const getstoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-application');
        if(storedJobApplication){
            return JSON.parse(storedJobApplication);

        }
        return [];
}

const saveJobApplication = id => {
 const storedJobApplications = getstoredJobApplication();
 const exists = storedJobApplications.find(jobId => jobId === id);
 if(!exists){
    storedJobApplications.push(id);
    localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
 }
}
export{getstoredJobApplication,saveJobApplication}