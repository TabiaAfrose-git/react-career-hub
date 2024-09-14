import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
            <img
                src={logo}
                alt="Shoes" />
            </figure>
            <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className='py-2'>
            <button className='px-5 py-4 font-extrabold border rounded-md border-[#7E90FE] mr-4 text-[#7E90FE]'>{remote_or_onsite}</button>
            <button className='px-5 py-4 font-extrabold border rounded-md border-[#7E90FE] mr-4 text-[#7E90FE]'>{job_type}</button>
            </div>
            <div className='flex gap-5 py-3'>
                <h2 className='text-lg flex gap-1 text-center'><IoLocationSharp className='text-2xl'></IoLocationSharp>{location}</h2>
                <h2 className='text-lg flex gap-1'><AiFillDollarCircle className='text-2xl'></AiFillDollarCircle>Salary: {salary}</h2>
            </div>
            <div className="card-actions">
                <Link to = {`/job/${id}`}><button className="btn bg-violet-400 text-white">View Details</button>
                </Link>

            </div>
            </div>
        </div>

    );
};
Job.propTypes = {
    job: PropTypes.object
}

export default Job;