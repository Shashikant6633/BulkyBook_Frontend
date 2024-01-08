import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isbn, setISBN] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [price1, setPrice1] = useState('');
    const [price50, setPrice50] = useState('');
    const [price100, setPrice100] = useState('');
    const [select, setSelect] = useState('');
    const [image, setImage] = useState('');

    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [isbnError, setIsbnError] = useState('');
    const [authorError, setAuthorError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [price1Error, setPrice1Error] = useState('');
    const [price50Error, setPrice50Error] = useState('');
    const [price100Error, setPrice100Error] = useState('');
    // const [isbnError, setIsbnError] = useState('');


    const handleSave = () => {
        //  Validation checks
        let isValid = true;

        if (!title || title.length > 30) {
            setTitleError('Title is required and should be at most 30 characters');
            isValid = false;
        } else {
            setTitleError('');
        }

        if (!description || description.length > 100) {
            setDescriptionError('Description is required and should be at most 100 characters');
            isValid = false;
        } else {
            setDescriptionError('');
        }

        if (!isbn || isbn.length > 10) {
            setIsbnError('ISBN is required and should be at most 10 characters');
            isValid = false;
        } else {
            setIsbnError('');
        }

        if (!author || author.length > 10) {
            setAuthorError('Author name is required');
            isValid = false;
        } else {
            setAuthorError('');
        }

        if (!price || price > 1000) {
            setPriceError('The field List Price must be between 1 and 1000.');
            isValid = false;
        } else {
            setPriceError('');
        }

        if (!price1 || price1 > 1000) {
            setPrice1Error('The field Price for 1-50 must be between 1 and 1000.');
            isValid = false;
        } else {
            setPrice1Error('');
        }

        if (!price50 || price50 > 1000) {
            setPrice50Error('The field Price for 50+ must be between 1 and 1000.');
            isValid = false;
        } else {
            setPrice50Error('');
        }

        if (!price100 || price100 > 1000) {
            setPrice100Error('The field Price for 100+ must be between 1 and 1000.');
            isValid = false;
        } else {
            setPrice100Error('');
        }

        // if (!order || order < 1 || order > 99) {
        //     setOrderError('Display order is required and should be between 1 and 99');
        //     isValid = false;
        // } else {
        //     setOrderError('');
        // }

        // if (!isValid) {
        //     return;
        // }

        // Save data
        const url = 'http://localhost:5120/api/Product';
        const data = {
            "title": title,
            "description": description,
            "isbn": isbn,
            "listPrice": price,
            "author": author,
            "price": price1,
            "price50": price50,
            "price100": price100,
            "category": select,
            "imageUrl": image,
        };

        axios.post(url, data)
            .then(() => {
                navigate('/Product');
                toast.success('Product has been added');


            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get('http://localhost:5120/api/Product')
            .then((result) => {
                setData(result.data);
                //toast.success('Villa has been created');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    // const handleImageChange = (e) => {
    //     // Handle image file change and update the state
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
     
    //     reader.onloadend = () => {
    //         setImage(reader.result);
    //     };
     
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setImage(file);
       
    //     // Extract filename from the fake path
    //     const filename = e.target.value.split('\\').pop();
    //     console.log('Selected file:', filename);
       
    //     // Display a preview of the selected image if needed
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       // Handle image preview or any other logic
    //     };
    //     reader.readAsDataURL(file);
    //   };

    const [additionalData, setAdditionalData] = useState([]);

    // Function to fetch data from the second API endpoint
    useEffect(() => {
        axios.get('http://localhost:5120/api/Category')
            .then((result) => {
                setAdditionalData(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className='container'>
            <div className="card shadow border-0 my-4">
                <div className="card-header bg-info bg-gradient ml-0 py-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-white py-2">Create Product</h2>
                        </div>
                    </div>
                </div>

                <div className="card-body p-4">
                    <form method="post" className="row" enctype="multipart/form-data">
                        <input asp-for="Product.Id" hidden />
                        <input asp-for="Product.ImageUrl" hidden />

                        <div className="row">
                            <div className="col-10">
                                <div className="border p-3">

                                    {/* <!--  <div asp-validation-summary="All"></div> -->  <!--This is used to show all the validation methods at single location--> */}
                                    <div className="form-floating py-2 col-12">
                                        <input type="text"
                                            name="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className={`form-control ${titleError ? 'is-invalid' : ''}`}
                                        // className='form-control'
                                        />
                                        <label className="ms-2">Title</label>

                                        {titleError && <div className="invalid-feedback">{titleError}</div>}
                                    </div>


                                    <div className=" py-2 col-12">
                                        <label htmlFor="description" className="ms-2 text-muted">Product Description</label>
                                        <textarea type="text"
                                            name="description"
                                            value={description}
                                            //id='Discription'
                                            onChange={(e) => setDescription(e.target.value)}
                                            className={`form-control ${descriptionError ? 'is-invalid' : ''}`}

                                        ></textarea>
                                        {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
                                        {/* <span className="text-danger">{errors.description}</span>  */}
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="text"
                                            name="isbn"
                                            value={isbn}
                                            onChange={(e) => setISBN(e.target.value)}
                                            // className={`form-control ${errors.isbn ? 'is-invalid' : ''}`}
                                            className={`form-control ${isbnError ? 'is-invalid' : ''}`}
                                        />
                                        <label className="ms-2">ISBN</label>
                                        {isbnError && <div className="invalid-feedback">{isbnError}</div>}

                                        {/* <span className="text-danger">{errors.isbn}</span>  */}
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="text"
                                            name="author"
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                            // className={`form-control ${errors.author ? 'is-invalid' : ''}`} 
                                            className={`form-control ${authorError ? 'is-invalid' : ''}`}
                                        />
                                        <label className="ms-2">Author</label>
                                        {authorError && <div className="invalid-feedback">{authorError}</div>}

                                        {/* <span className="text-danger">{errors.author}</span>  */}
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="number"
                                            name="price"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            // className={`form-control ${errors.listPrice ? 'is-invalid' : ''}`}
                                            className={`form-control ${priceError ? 'is-invalid' : ''}`}
                                        />
                                        <label className="ms-2">List Price</label>
                                        {priceError && <div className="invalid-feedback">{priceError}</div>}

                                        {/* <span className="text-danger">{errors.listPrice}</span>  */}
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="number"
                                            name="price1"
                                            value={price1}
                                            onChange={(e) => setPrice1(e.target.value)}
                                            // className={`form-control ${errors.price1 ? 'is-invalid' : ''}`} 
                                            className={`form-control ${price1Error ? 'is-invalid' : ''}`}
                                        />
                                        <label className="ms-2">Price for 1-50</label>
                                        {price1Error && <div className="invalid-feedback">{price1Error}</div>}

                                        {/* <span className="text-danger">{errors.price1}</span>  */}
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="number"
                                            name="price50"
                                            value={price50}
                                            onChange={(e) => setPrice50(e.target.value)}
                                            // className={`form-control ${errors.price50 ? 'is-invalid' : ''}`}  
                                            className={`form-control ${price50Error ? 'is-invalid' : ''}`}
                                        />
                                        <label className="ms-2">Price for 50+</label>
                                        {price50Error && <div className="invalid-feedback">{price50Error}</div>}

                                        {/* <span className="text-danger">{errors.price50}</span>  */}
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="number"
                                            name="price100"
                                            value={price100}
                                            onChange={(e) => setPrice100(e.target.value)}
                                            // className={`form-control ${errors.price100 ? 'is-invalid' : ''}`}  
                                            className={`form-control ${price100Error ? 'is-invalid' : ''}`}
                                        />
                                        <label className="ms-2">Price for 100+</label>

                                        {price100Error && <div className="invalid-feedback">{price100Error}</div>}
                                        {/* <span className="text-danger">{errors.price100}</span>  */}
                                    </div>

                                    <div className="form-floating py-2 col-12">

                                        {/* <select type="select"
                                name="select"
                                value={select}
                                onChange={(e) => setSelect(e.target.value)}
                                // className={`form-control ${errors.select ? 'is-invalid' : ''}`}
                                className='form-control'
                                >
                                <option selected>--Select Category--</option>
                                <option >Action</option>
                                <option >Sci-Fi</option>
                                <option >Spiritual</option>
                            </select>
                            <label asp-for="Product.CategoryId" className="ms-2"></label> */}

                                        {/* <label htmlFor="">Category</label> */}
                                        {additionalData.length > 0 ? (
                                            <select
                                                className="form-control"
                                                value={select}
                                                onChange={(e) => setSelect(e.target.value)}
                                                required
                                            >
                                                <option value="">--Select Category--</option>
                                                {additionalData.map((item) => (
                                                    <option key={item.id} value={item.select}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Category"
                                                value={select} // Use a separate state for custom category input
                                                onChange={(e) => setSelect(e.target.value)} // Update the separate state
                                                required
                                            />
                                        )}


                                        {/* <span className="text-danger">{errors.select}</span>  */}
                                    </div>

                                     <div className="form-floating py-2 col-12">
                                        <input type="file" name="image"
                                            value={image}
                                            //onChange={(e) => setImage(e.target.value)}
                                            onChange={(e) => setImage(e.target.value)}
                                            // className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                            className='form-control'
                                        />
                                        <label className="ms-2"></label>

                                        {/* <span className="text-danger">{errors.image}</span>  */}
                                 </div> 

                                

                                    <div className="row pt-3">
                                        <div className="text-center">

                                            <button type="button" className="btn btn-dark mx-2" style={{ width: "150px" }} onClick={handleSave}>Create</button>

                                            <a href='/product' asp-action="Index" className="btn btn-secondary border-secondary">
                                                Back To List?
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-2">
                <img src="@Model.Product.ImageUrl" alt='img' width="100%" style={{borderRadius:"5px", border:"1px solid #bbb9b9"}}/>
            </div> */}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Create