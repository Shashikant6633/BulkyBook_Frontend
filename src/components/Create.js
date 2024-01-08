import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();

    const[data,setData] = useState([]);
    const [name, setName] = useState('');
    const [order, setOrder] = useState('');
    const [nameError, setNameError] = useState('');
    const [orderError, setOrderError] = useState('');

 useEffect(() => {
        getData();
    }, []);
 
    const getData = () => {
        axios
            .get('http://localhost:5120/api/Category')
            .then((result) => {
                setData(result.data);
                //toast.success('Villa has been created');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleSave = () => {
        // Validation checks
        let isValid = true;

        if (!name || name.length > 30) {
            setNameError('Category name is required and should be at most 30 characters');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!order || order < 1 || order > 99) {
            setOrderError('Display order is required and should be between 1 and 99');
            isValid = false;
        } else {
            setOrderError('');
        }

        if (!isValid) {
            return;
        }

        // Save data
        const url = 'http://localhost:5120/api/Category';
        const data = {
            name: name,
            displayOrder: order,
        };

        axios.post(url, data)
            .then(() => {
                navigate('/category');
                toast.success('Category has been added');

            })
            .catch((error) => {
                toast.error(error.message);
            });
    };



    const handleBackToList = () => {
        navigate('/category');
    };

    return (
        <div className="container">
            {/* <ToastContainer /> */}
            <div className="card shadow border-0 mt-4">
                <div className="card-header bg-info bg-gradient ml-0 py-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-white py-2">Create Category</h2>
                        </div>
                    </div>
                </div>

                <div className="card-body p-4">
                    <form className="row">
                        <div className="p-3">
                            <div className="form-floating py-2 col-12">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    maxLength={30}
                                    className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                />
                                <label className="ms-2">Category Name</label>
                                {nameError && <div className="invalid-feedback">{nameError}</div>}
                            </div>

                            <div className="form-floating py-2 col-12">
                                <input
                                    type="number"
                                    name="order"
                                    value={order}
                                    onChange={(e) => setOrder(e.target.value)}
                                    max={99}
                                    className={`form-control ${orderError ? 'is-invalid' : ''}`}
                                />
                                <label className="ms-2">Display Order</label>
                                {orderError && <div className="invalid-feedback">{orderError}</div>}
                            </div>

                            <div className="row pt-3">
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-dark mx-2"
                                        style={{ width: '150px' }}
                                        onClick={handleSave}
                                    >
                                        Create
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handleBackToList}
                                    >
                                        Back To List
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Create;