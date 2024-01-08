import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
 
  // State for form inputs and errors
  const [name, setName] = useState('');
  const [displayOrder, setDisplayOrder] = useState('');
 
  const [nameError, setNameError] = useState('');
  const [displayOrderError, setDisplayOrderError] = useState('');

 
  const[data,setData] = useState([]);
 
  // Fetch data for editing when component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:5120/api/Category/${id}`)
      .then((result) => {
        const { name, displayOrder} = result.data;
        setName(name);
        setDisplayOrder(displayOrder);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
 
  useEffect(() => {
    getData();
}, [])
 
const getData = () =>
{
    axios.get('http://localhost:5120/api/Category')
    .then((result)=>{
        setData(result.data)
       // toast.success('Category has been added')
    })
    .catch((error)=>{
        console.log(error)
    })
}
 
  // Function to validate form inputs
  const validateInputs = () => {
    let isValid = true;
 
    // Reset all error messages
    setNameError('');
    setDisplayOrderError('');
 
    // Validation logic for each input field
    if (name.trim().length === 0) {
      setNameError('Name is required');
      isValid = false;
    } else if (name.length > 50) {
      setNameError('Name should not exceed 50 characters');
      isValid = false;
    }
 
    if (displayOrder.length > 100) {
      setDisplayOrderError('Order should not exceed 100 characters');
      isValid = false;
    }
 
    return isValid;
  };
 
  // Function to handle form submission
  const handleSave = () => {
    // Validate form inputs
    const isValid = validateInputs();
 
    if (isValid) {
      // If validation passes, proceed with saving data
      const url = `http://localhost:5120/api/Category/${id}`;
      const data = {
        id,
        name,
        displayOrder
      };
 
      axios
        .put(url, data)
        .then(() => {
          // Redirect to VillaListPage with a success parameter
          navigate('/category?success=true');
          toast.success('Category Edited');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
 
  // Function to handle navigation back to the list
  const handleBackToList = () => {
    navigate('/category');
  };
 
  return (
    <div className="w-100 card border-0 p-4">
        {/* <ToastContainer></ToastContainer> */}
      <div className="card-header bg-dark bg-gradient ml-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white py-2">Edit Category</h2>
          </div>
        </div>
      </div>
      <div className="card-body border p-4">
        <form method="post" className="row" encType="multipart/form-data" noValidate="novalidate">
          <div className="p-3">
            {/* Name Input */}
            <div className="form-floating py-1 col-12">
              <input
                onChange={(e) => setName(e.target.value)}
                className={`form-control border shadow ${nameError ? 'is-invalid' : ''}`}
                type="text"
                value={name}
              />
              <label className="ms-2" htmlFor="Name">
                Category Name
              </label>
              <span className="text-danger field-validation-valid">{nameError}</span>
            </div>
 
            {/* Description Input */}
            <div className="form-floating py-1 col-12">
              <input
                onChange={(e) => setDisplayOrder(e.target.value)}
                className={`form-control border shadow ${displayOrderError ? 'is-invalid' : ''}`}
                type="number"
                value={displayOrder}
              />
              <label className="ms-2" htmlFor="DisplayOrder">
                DisplayOrder
              </label>
              <span className="text-danger field-validation-valid">{displayOrderError}</span>
            </div>
 

          </div>
        </form>
 
        {/* Render buttons for save and back to list */}
        <div className="row pt-3">
          <div className="text-center">
            <button
              type="button"
              className="btn btn-dark mx-2"
              style={{ width: '150px' }}
              onClick={handleSave}
            >
              Update
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
    </div>
  );
};
 
export default Edit;