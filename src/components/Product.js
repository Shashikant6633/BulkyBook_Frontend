
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect, useRef } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';


const Product = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const successParam = queryParams.get('success');

    const [data, setData] = useState([]);

const toastShownRef = useRef(false);


const getData = () => {
    axios
        .get('http://localhost:5120/api/Product')
       // .get('http://localhost:5120/api/Category')
        .then((result) => {
            setData(result.data);

            

        })
        .catch((error) => {
            console.log(error);
        });
};

useEffect(() => {
    getData();

    return () => {
        // Clear the toastShown value when the component is unmounted
        localStorage.removeItem('toastShown');
    };
}, []); // Run once on component mount

useEffect(() => {
    if (successParam === 'true' && !toastShownRef.current) {
       //   toast.success('Category has been added');
          toastShownRef.current = true;
          localStorage.setItem('toastShown', 'true');
    }
}, [successParam]);


const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this product") === true) {
        try {
            await axios.delete(`http://localhost:5120/api/Product/${id}`);
            toast.success("Product has been deleted");
            await getData(); // Wait for data to be updated
        } catch (error) {
            toast.error(error.message);
        }
    }
};

  return (
    <>
     <Navbar admin />
    <div className='container'>
       
        <ToastContainer></ToastContainer>
      <div className="card shadow border-0 my-4">
    <div className="card-header bg-dark bg-gradient ml-0 py-3">
        <div className="row">
            <div className="col-12 text-center">
                <h2 className="text-light">Product List</h2>
            </div>
        </div>
    </div>

    <div className="card-body p-4">
        <div className="row pb-3">
            <div className="col-6">
            </div>


            <div className="col-6 text-end">
                <a className="btn btn-dark" href='/createP'>
                <FontAwesomeIcon icon={faCirclePlus} className='mx-2' /> Create New Product
                </a>
                <br />
                {/* <label>Search:</label> */}
                {/* <input type='search' className='my-3'></input> */}
            </div>
        </div>

        <table id="tblData" className="table table-bordered table-striped" width="100%">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>ISBN</th>
                    <th>Price</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
               
            {
                                data && data.length > 0 ?
                                    data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                {/* <td>{index + 1}</td> */}
                                                {/* <td>{item.id}</td>  We will not show id to the user */}
                                                <td>{item.title}</td>
                                                <td>{item.isbn}</td>
                                                <td>{item.price}</td>
                                                <td>{item.author}</td>
                                                <td>{item.category}</td>
                                              
                                                <td>
                                                    <Link to={`/editP/${item.id}`} className="btn btn-primary" style={{width:"150px"}}><FontAwesomeIcon icon={faPenToSquare} className='mx-2' />Edit</Link> &nbsp;
                                                    {/* <a className="btn btn-primary" href='/edit' onClick={()=>handleEdit(item.id)}>Edit</a> */}
                                                    {/* <button className="btn btn-primary" onClick={handleBackToEdit}>Edit</button> &nbsp; */}
                                                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)} style={{width:"150px"}}><FontAwesomeIcon icon={faTrash} className='mx-2'/>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    'Loading.....'
                            }
           
       </tbody>

        </table>
    </div></div>
    </div>
    </>
  )
}
export default Product;
