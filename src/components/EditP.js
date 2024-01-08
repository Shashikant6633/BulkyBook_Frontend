import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditP = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isbn, setISBN] = useState('');
    const [listPrice, setListPrice] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [price50, setPrice50] = useState('');
    const [price100, setPrice100] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:5120/api/Product/${id}`)
            .then((result) => {
                const { title, description, author, isbn, listPrice, price, price50, price100, category, imageUrl } = result.data;
                setTitle(title);
                setDescription(description);
                setISBN(isbn);
                setAuthor(author);
                setListPrice(listPrice);
                setPrice(price);
                setPrice50(price50);
                setPrice100(price100);
                setCategory(category);
                setImageUrl(imageUrl);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:5120/api/Product')
            .then((result) => {
                setData(result.data)
                // toast.success('Category has been added')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSave = () => {
        // Validate form inputs
        const isValid = validateInputs();

        if (isValid) {
            // If validation passes, proceed with saving data
            const url = `http://localhost:5120/api/Product/${id}`;
            const data = {
                id,
                title,
                description,
                isbn,
                author,
                listPrice,
                price,
                price50,
                price100,
                category,
                imageUrl
            };

            axios
                .put(url, data)

                .then(() => {
                    // Redirect to VillaListPage with a success parameter
                    navigate('/Product?success=true');
                    // console.log('Response:', response.data);
                    // navigate('/Product', { state: { success: true } });
                    toast.success('Product Edited');
                })

                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const validateInputs = () => {
        let isValid = true;

        // Reset all error messages
        // setNameError('');
        // setDisplayOrderError('');

        // // Validation logic for each input field
        // if (name.trim().length === 0) {
        //   setNameError('Name is required');
        //   isValid = false;
        // } else if (name.length > 50) {
        //   setNameError('Name should not exceed 50 characters');
        //   isValid = false;
        // }

        // if (displayOrder.length > 100) {
        //   setDisplayOrderError('Order should not exceed 100 characters');
        //   isValid = false;
        // }

        return isValid;
    };

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
                            <h2 className="text-white py-2">Edit Product</h2>
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
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                            className={"form-control"} />
                                        <label className="ms-2">Title</label>
                                    </div>


                                    <div className=" py-2 col-12">
                                        <label htmlFor="description" className="ms-2 text-muted">Product Description</label>
                                        <textarea type="text"
                                            name="description"
                                            onChange={(e) => setDescription(e.target.value)}
                                            value={description}
                                            className={"form-control"}></textarea>

                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="text"
                                            name="isbn"
                                            onChange={(e) => setISBN(e.target.value)}
                                            value={isbn}
                                            className={"form-control"} />
                                        <label className="ms-2">ISBN</label>
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="text"
                                            name="author"
                                            onChange={(e) => setAuthor(e.target.value)}
                                            value={author}
                                            className={"form-control"} />
                                        <label asp-for="Product.author" className="ms-2">Author</label>
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="number"
                                            name="listPrice"
                                            onChange={(e) => setListPrice(e.target.value)}
                                            value={listPrice}
                                            className={"form-control"} />
                                        <label className="ms-2">List Price</label>
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="number"
                                            name="price1"
                                            onChange={(e) => setPrice(e.target.value)}
                                            value={price}
                                            className={"form-control"} />
                                        <label className="ms-2">Price for 1-50</label>
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="number"
                                            name="price50"
                                            onChange={(e) => setPrice50(e.target.value)}
                                            value={price50}
                                            className={"form-control"} />
                                        <label className="ms-2">Price for 50+</label>
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="number"
                                            name="price100"
                                            onChange={(e) => setPrice100(e.target.value)}
                                            value={price100}
                                            className={"form-control"} />
                                        <label className="ms-2">Price for 100+</label>
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
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                required
                                            >
                                                <option value="">--Select Category--</option>
                                                {additionalData.map((item) => (
                                                    <option key={item.id} value={item.category}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Category"
                                                value={category} // Use a separate state for custom category input
                                                onChange={(e) => setCategory(e.target.value)} // Update the separate state
                                                required
                                            />
                                        )}


                                        {/* <span className="text-danger">{errors.select}</span>  */}
                                    </div>

                                    <div className="form-floating py-2 col-12">
                                        <input type="file" name="image"
                                            // value={imageUrl}
                                            onChange={(e) => setImageUrl(e.target.value)}

                                            className={"form-control"} />
                                        <label className="ms-2"></label>
                                    </div>

                                    <div className="row pt-3">
                                        <div className="text-center">

                                            <button type="button" className="btn btn-dark mx-2" onClick={handleSave} style={{ width: "150px" }} >Update</button>

                                            <a href='/Product' className="btn btn-secondary border-secondary">
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
export default EditP;