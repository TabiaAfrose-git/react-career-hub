import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localsorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

const handelApplyJob = ()=> {
    saveJobApplication(idInt);
    toast('You have applied Successfully');
}
    return (
        <div className='bg-white max-w-6xl mx-auto p-4'>
            <h1 className='text-2xl  text-black font-bold'>Job Details</h1>
            <div className='grid md: grid-cols-4 gap-4 '>
                <div className='border col-span-3 p-4 text-black'>
                    <p className='my-4'><span className='font-bold ' >Job Description:</span> {job.job_description}</p>
                    <p><span className='font-bold' >Job Responsibility:</span> {job.job_responsibility}</p>
                    <h3 className='font-bold my-7'>Educational Requirements:</h3>
                    <p>{job.educational_requirements}</p>
                    <h3 className='font-bold my-7'>Experiences:</h3>
                    <p className='mb-4'>{job.experiences}</p>
                </div>
                <div className='border col-span-1 text-black rounded-md'>
                    <div className='bg-violet-300 p-2 rounded-md mb-5 p-4'>
                        <div className=' py-4'>
                            <h2 className='py-4 font-bold'>Job Details</h2>
                            <hr className='py-2'/>
                            <h3><span className='font-bold'>Salary:</span> {job.salary} <small>(Per Month)</small></h3>
                            <h3><span className='font-bold'>Job Title:</span> {job.job_title }</h3>
                        </div>
                        <div>
                        <h2 className='py-4 font-bold'>Contact Information</h2>
                            <hr className='py-2'/>
                            <h3> <span className='font-bold'>Phone:</span>{job.contact_information.phone}</h3>
                            <h3><span className='font-bold'>Email:</span> {job.contact_information.email}</h3>
                            <h3><span className='font-bold'>Address:</span>{job.contact_information.address}</h3>
                        </div>
                    </div>
                    <div onClick={handelApplyJob} className="btn btn-primary w-full text-white">Apply Now</div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;