import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";

const AppliedJob = ({appliedJob}) => {
    console.log(appliedJob);
    return (
        <div className="card card-side  bg-white m-4 p-4">
        <figure className='w-40 h-40 p-4 bg-slate-100 m-auto rounded-xl'>
          <img
            src={appliedJob.logo}
            alt="Movie" />
        </figure>
        <div className="card-body">
            <div className='flex justify-between' >
                <div>
                    <h2 className="card-title">{appliedJob.job_title}</h2>
                    <p>{appliedJob.company_name}</p>
                    <div className='py-2'>
                    <button className='px-5 py-4 font-extrabold border rounded-md border-[#7E90FE] mr-4 text-[#7E90FE]'>{appliedJob.remote_or_onsite}</button>
                    <button className='px-5 py-4 font-extrabold border rounded-md border-[#7E90FE] mr-4 text-[#7E90FE]'>{appliedJob.job_type}</button>
                    </div>
                    <div className='flex gap-5 py-3'>
                        <h2 className='text-lg flex gap-1 text-center'><IoLocationSharp className='text-2xl'></IoLocationSharp>{appliedJob.location}</h2>
                        <h2 className='text-lg flex gap-1'><AiFillDollarCircle className='text-2xl'></AiFillDollarCircle>Salary: {appliedJob.salary}</h2>
                    </div>
                </div>

                <div className="card-actions  items-center ">
                    <button className="btn bg-violet-400 text-white">View Details</button>
                </div>
            </div>


        </div>

      </div>
    );
};
AppliedJob.propTypes = {
    appliedJob: PropTypes.object
}

export default AppliedJob;