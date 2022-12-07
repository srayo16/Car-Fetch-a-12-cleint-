import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
import UpdateModal from './UpdateModal';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [info, setInfo] = useState([]);
    const [updateModal, setUpdateModal] = useState();
    const [infoverify, setInfoVerify] = useState(false);
    const [reload, setReload] = useState(false);
    const [reloads, setReloads] = useState(false);
    const email = user?.email;

    useEffect(() => {
        fetch(`https://car-fetch-a-12-server.onrender.com/information?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data);
                setInfoVerify(true);
                // console.log(data);
            })
    }, [email, reload, reloads])


    if (loading) {
        return <Loading></Loading>
    }

    const postInfoOfUser = event => {
        event.preventDefault();

        const name = user?.displayName;
        const email = user?.email;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const number = event.target.number.value;
        const linkedin = event.target.linkedin.value;
        const hobby = event.target.hobby.value;

        const information = { name, email, education, location, number, linkedin, hobby };
        // console.log(information)

        fetch('https://car-fetch-a-12-server.onrender.com/information', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(posted => {
                // console.log(posted);
                if (posted.acknowledged) {
                    toast.success('Added successfully');
                    event.target.reset();
                    setReload(!reload);
                    // window.location.reload();
                }
            })
    }


    return (
        <>

            <div className="hero my-h-screen bg-base-100 container mx-auto">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl text-center font-bold">Your Name: {user?.displayName}</h1>
                        <p className="pt-6 text-xl font-bold text-center">Your Email: {user?.email}</p>

                    </div>

                    {infoverify && <>
                        <label htmlFor="updateModal" className="btn btn-outline btn-primary modal-button mt-5" onClick={() => setUpdateModal(info)}>Edit</label>
                        <div className="overflow-x-auto container mx-auto mb-5">

                            <table className="table table-compact lg:table-normal w-full">

                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Information</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>
                                        <td>Your ID</td>
                                        <td>{info?._id}</td>

                                    </tr>

                                    <tr>
                                        <th>2</th>
                                        <td>Name</td>
                                        <td>{user?.displayName}</td>

                                    </tr>

                                    <tr>
                                        <th>3</th>
                                        <td>Email</td>
                                        <td>{user?.email}</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>Education</td>
                                        <td>{info?.education}</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>Location</td>
                                        <td>{info?.location}</td>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <td>Phone Number</td>
                                        <td>{info?.number}</td>
                                    </tr>
                                    <tr>
                                        <th>7</th>
                                        <td>Email</td>
                                        <td>{info?.linkedin}</td>
                                    </tr>
                                    <tr>
                                        <th>8</th>
                                        <td>Hobby</td>
                                        <td>{info?.hobby}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </>}
                    {!infoverify &&

                        <>   <div className="card flex-shrink-0 mt-6 w-80 lg:w-96 max-w-sm  shadow-2xl bg-base-100">
                            <div className="card-body">
                                <p className='text-xl text-center font-semibold'>Add your information</p>
                                <form onSubmit={postInfoOfUser}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Education</span>
                                        </label>
                                        <input type="text" name='education' placeholder="education" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <input type="text" name='location' placeholder="city/district" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="number" name='number' placeholder="phone number with country code" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">LinkedIn Profile</span>
                                        </label>
                                        <input type="link" name='linkedin' placeholder="linkedin profile link" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Hobby</span>
                                        </label>
                                        <input type="text" name='hobby' placeholder="your hobby" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </>
                    }


                </div>
            </div>
            {updateModal && <UpdateModal updateModal={updateModal} info={info} setInfo={setInfo} setUpdateModal={setUpdateModal} setReloads={setReloads} reloads={reloads}></UpdateModal>}
        </>
    );
};

export default MyProfile;