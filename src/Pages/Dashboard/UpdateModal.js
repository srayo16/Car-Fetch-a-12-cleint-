import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const UpdateModal = ({ updateModal, setUpdateModal, }) => {
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


        fetch(`http://localhost:5000/information/${email}`, {
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
                    window.location.reload();
                }

            })
    }


    return (
        <>

            <input type="checkbox" id="updateModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setUpdateModal(null)}>✕</label>
                    <p class="py-4">
                        <p className='text-xl text-center font-semibold'>Edit your information</p>
                        <form onSubmit={updateOne}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education</span>
                                </label>
                                <input type="text" name='education' defaultValue={updateModal?.education} placeholder="education" class="input input-bordered" required />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Location</span>
                                </label>
                                <input type="text" name='location' defaultValue={updateModal?.location} placeholder="city/district" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input type="number" name='number' defaultValue={updateModal?.number} placeholder="phone number with country code" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">LinkedIn Profile</span>
                                </label>
                                <input type="link" name='linkedin' defaultValue={updateModal?.linkedin} placeholder="linkedin profile link" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Hobby</span>
                                </label>
                                <input type="text" name='hobby' defaultValue={updateModal?.hobby} placeholder="your hobby" class="input input-bordered" required />
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </p>


                </div>
            </div>
        </>
    );
};

export default UpdateModal;