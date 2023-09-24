import {  useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
    }
    return (
        <div className="grid md:grid-cols-4">
            <div className="border col-span-3">
                <h2>Job Details</h2>
            </div>
            <div className="border">
                <h3>Side Bar</h3>
                
                <button onClick={handleApplyJob}
                className="btn btn-primary">Apply Now</button>
                
            </div>
        </div>
    );
};

export default JobDetails;