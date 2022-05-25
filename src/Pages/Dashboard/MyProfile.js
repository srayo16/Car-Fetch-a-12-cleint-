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
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/information?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data);
                setInfoVerify(true);
                // console.log(data);
            })
    }, [email])


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

        fetch('http://localhost:5000/information', {
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
                    window.location.reload();
                }
            })
    }


    return (
        <>

            <div class="hero my-h-screen bg-base-100 container mx-auto">
                <div class="hero-content flex-col lg:flex-col">
                    <div class="text-center lg:text-left">
                        <h1 class="text-3xl text-center font-bold">Your Name: {user?.displayName}</h1>
                        <p class="pt-6 text-xl font-bold text-center">Your Email: {user?.email}</p>

                    </div>

                    {infoverify && <>
                        <label for="updateModal" class="btn btn-outline btn-primary modal-button mt-5" onClick={() => setUpdateModal(info)}>Edit</label>
                        <div class="overflow-x-auto container mx-auto mb-5">

                            <table class="table table-compact lg:table-normal w-full">

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

                        <>   <div class="card flex-shrink-0 mt-6 w-80 lg:w-96 max-w-sm  shadow-2xl bg-base-100">
                            <div class="card-body">
                                <p className='text-xl text-center font-semibold'>Add your information</p>
                                <form onSubmit={postInfoOfUser}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Education</span>
                                        </label>
                                        <input type="text" name='education' placeholder="education" class="input input-bordered" required />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Location</span>
                                        </label>
                                        <input type="text" name='location' placeholder="city/district" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Phone Number</span>
                                        </label>
                                        <input type="number" name='number' placeholder="phone number with country code" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">LinkedIn Profile</span>
                                        </label>
                                        <input type="link" name='linkedin' placeholder="linkedin profile link" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Hobby</span>
                                        </label>
                                        <input type="text" name='hobby' placeholder="your hobby" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control mt-6">
                                        <button type='submit' class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </>
                    }


                </div>
            </div>
            {updateModal && <UpdateModal updateModal={updateModal} info={info} setInfo={setInfo} setUpdateModal={setUpdateModal}></UpdateModal>}
        </>
    );
};

export default MyProfile;