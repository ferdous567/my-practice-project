import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-20">Featured Jobs: {jobs.length}</h2>
            <div className="grid grid-cols-2 gap-6 m-5 ">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div  className={dataLength === jobs.length ? 'hidden': 'text-center m-5'}>
                <button onClick={() => setDataLength(jobs.length)}
                className="btn bg-purple-500 text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;