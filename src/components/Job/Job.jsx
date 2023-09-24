import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo } = job;
    return (
        <div className="card card-compact p-5 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions ">
                <Link to={`/job/${id}`}>
                    <button 
                    className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;