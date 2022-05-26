import React from 'react';
import { toast } from 'react-toastify';

const AddaProduct = () => {

    const addProduct = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const img = event.target.image.value;
        const price = event.target.price.value;
        const availableQuantity = event.target.quantity.value;
        const description = event.target.description.value;
        const minimumOrderQuantity = event.target.minOrder.value;

        const total = { name, img, price, availableQuantity, description, minimumOrderQuantity };
        // console.log(total);

        fetch('http://localhost:5000/parts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(total)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Product added successfully');
                    event.target.reset();
                }
            })


    }



    return (
        <div className='container mx-auto mb-32'>
            <h1 className='text-center my-5 text-2xl text-primary font-semibold'>Add a product</h1>

            <div class="card flex-shrink-0 my-16 w-80 lg:w-96 max-w-sm mx-auto shadow-2xl bg-base-100">
                <div class="card-body">
                    <p className='text-xl text-center font-semibold'>Please Add Details</p>
                    <form onSubmit={addProduct}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Products Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" class="input input-bordered" required />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Image Link</span>
                            </label>
                            <input type="text" name='image' placeholder="image's url" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="stocks quantity" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="$price" class="input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Minimum Orders</span>
                            </label>
                            <input type="number" name='minOrder' defaultValue='1000' placeholder="min order" class="input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea type="text" name='description' placeholder="products details" class="input input-bordered" required />
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddaProduct;