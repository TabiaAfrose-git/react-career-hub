import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredJobApplication } from "../../utility/localsorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(()=>{
        const storedJobIds = getstoredJobApplication();
        if(jobs.length){
            const jobApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobApplied);
        }
    },[])

    return (
        <div>
            <h1>Jobs I Applie:{appliedJobs.length}</h1>
            {
                appliedJobs.map(appliedJob => <AppliedJob
                    key={appliedJob.id}
                    appliedJob = {appliedJob}
                ></AppliedJob>)
            }

        </div>
    );
};

export default AppliedJobs;