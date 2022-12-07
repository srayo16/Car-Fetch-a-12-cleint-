import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const UpdateModal = ({ updateModal, setUpdateModal, setReloads, reloads }) => {
    const email = updateModal?.email;
    // console.log(info)
    const updateOne = event => {
        event.preventDefault();

        const education = event.target.education.value;
        const location = event.target.location.value;
        const number = event.target.number.value;
        const linkedin = event.target.linkedin.value;
        const hobby = event.target.hobby.value;

        const update = { education, location, number, linkedin, hobby };


        fetch(`https://car-fetch-a-12-server.onrender.com/information/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(edited => {
                // console.log(edited);
                if (edited?.modifiedCount > 0) {
                    setUpdateModal(null);
                    toast.success("Edit successful");
                    setReloads(!reloads);
                    // window.location.reload();
                }

            })
    }


    return (
        <>

            <input type="checkbox" id="updateModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setUpdateModal(null)}>✕</label>
                    <p className="py-4">
                        <p className='text-xl text-center font-semibold'>Edit your information</p>
                        <form onSubmit={updateOne}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input type="text" name='education' defaultValue={updateModal?.education} placeholder="education" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name='location' defaultValue={updateModal?.location} placeholder="city/district" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name='number' defaultValue={updateModal?.number} placeholder="phone number with country code" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">LinkedIn Profile</span>
                                </label>
                                <input type="link" name='linkedin' defaultValue={updateModal?.linkedin} placeholder="linkedin profile link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Hobby</span>
                                </label>
                                <input type="text" name='hobby' defaultValue={updateModal?.hobby} placeholder="your hobby" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </p>


                </div>
            </div>
        </>
    );
};

export default UpdateModal;