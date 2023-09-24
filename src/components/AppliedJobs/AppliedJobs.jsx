import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import { list } from "postcss";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);

    useEffect(() =>{
        const storedJobsId = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id));
            setAppliedJob(jobsApplied);
        } 
    }, []);
    return (
        <div>
            <h3>All categories job: {appliedJob.length}</h3>
            <ul>
                {
                    appliedJob.map(job => <li key={job.id}>
                        <span>{job.job_title}</span>: 
                        <span>{job.company_name}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;