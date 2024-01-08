import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';
import Cart from './Cart';
 
const Details = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [productData, setProductData] = useState(null);
    const [count, setCount] = useState(1);
    
    
 
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         if (id) {
    //           const response = await axios.get(`http://localhost:5120/api/Product/${id}`);
    //           setProductData(response.data);
    //         }
    //       } catch (error) {
    //         console.error('Error fetching product data:', error);
    //       }
    //     };
 
    //     fetchData();
    //   }, [id]);
 
    useEffect(() => {
        const fetchData1 = async () => {
            try {
                if (id) {
                    const response = await axios.get(`http://localhost:5120/api/Product/${id}`);
                    const productData = response.data;
 
                    // Extract the filename from the "fakepath" and update the imageUrl
                    const imageUrl = productData.imageUrl.split('\\').pop();
                    setProductData({ ...productData, imageUrl });
 
                    // Log the updated image URL
                    console.log('Updated Image URL:', imageUrl);
                    console.log('Product Data:', productData);
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
 
        fetchData1();
    }, [id]);
 
 
 
    const handleCountChange = (e) => {
        // Ensure count is a positive integer
        const newCount = Math.max(1, parseInt(e.target.value, 10) || 1);
        setCount(newCount);
    };

 

    const handleAddToCart = async () => {
        try {
          const response = await axios.post('http://localhost:5120/api/CartItem', {
            name: productData.title,
            price: productData.price,
            quantity: count,
          });
    
          if (response.status === 201) {
            console.log('Item added to cart:', response.data);
    
            // Update the cart state
            addToCart({
              id: productData.id,
              product: productData,
              count,
            });
    
            // Optionally, you can navigate to the cart page
            navigate('/cart');
          } else {
            console.error('Failed to add item to cart');
          }
        } catch (error) {
          console.error('Error adding item to cart:', error);
        }
      };
      
    


    // const handleAddToCart = async () => {
    //     if (productData) {
    //       try {
    //         const response = await fetch(`http://localhost:5120/api/Cart/${id}`, {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({
    //             productId: productData.id,
    //             count,
    //             userId: productData.userId, // Replace with the actual user ID
    //           }),
    //         });
      
    //         if (response.ok) {
    //           addToCart({
    //             id: productData.id,
    //             product: productData,
    //             count,
    //           });
    //           console.log('Item added to cart:', productData);
      
    //           // Use the useNavigate hook to navigate to the cart page
    //         //  const navigate = useNavigate();
    //           navigate('/cart');
    //         } else {
    //           console.error('Failed to add item to cart');
    //         }
    //       } catch (error) {
    //         console.error('Network error while adding item to cart', error);
    //       }
    //     }
    //   };




      
      
    return (
        <div>
            {productData ? (
                <form method="post">
                    <input hidden asp-for="ProductId" />
                    <div className="card shadow border-0 mt-4 mb-4">
                        <div className="card-header bg-dark bg-gradient text-light py-4">
                            <div className="row">
 
                                <div className="col-12 text-center" key={productData.id}>
                                    <h3 className="text-white text-uppercase">{productData.title}</h3>
                                    <p className="text-white-50 fw-semibold mb-0">by {productData.author}</p>
                                </div>
 
                            </div>
 
                        </div>
                        <div className="card-body">
                            <div className="py-3">
                                <div className="row">
                                    <div className="col-6 col-md-2 offset-lg-1 pb-1">
                                        <a asp-action="Index" href='/admin' className="btn btn-outline-primary bg-gradient mb-5 fw-semibold btn-sm text-uppercase">
                                            <small>Back to home</small>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
 
                                    <div className="col-12 col-lg-3 offset-lg-1 text-center mb-3" >
 
 
 
 
 
 
 
                                        {/* <img src={productData.imageUrl} className="d-block w-100" alt="..." /> */}
                                        {/* <img src={`http://localhost:5120/${productData.imageUrl}`} /> */}
 
                                        <div className="">
 
                                            {/* <img src={(productData.imageUrl)} className="d-block w-100" alt={productData.title} /> */}
 
                                            {/* <img src={productData.imageUrl} className="d-block w-100" alt={productData.title} /> */}
 
                                            <img src={`/${productData.imageUrl}`} className="d-block w-100" alt={productData.title} />
 
                                        </div>
 
 
                                    </div>
 
 
 
                                    <div className="col-12 col-lg-6 offset-lg-1">
 
                                        <div className="col-12 col-md-6 pb-4">
                                            <span className="badge badge-pill badge-dark text-dark">{productData.category}</span>
                                        </div>
                                        <div className="row ps-2">
                                            <h6 className="text-dark text-opacity-50 ">ISBN : {productData.isbn}</h6>
                                        </div>
                                        <div className="row ps-2">
                                            <h6 className="text-dark text-opacity-50  pb-2">
                                                List Price:
                                                <span className="text-decoration-line-through">
                                                    {productData.listPrice}
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="row text-center ps-2">
                                            <div className="p-1 col-3 col-lg-2 bg-white border-bottom">
                                                <div className="text-dark text-opacity-50 fw-semibold">Quantity</div>
                                            </div>
                                            <div className="p-1 col-3 col-lg-2 bg-white border-bottom">
                                                <div className="text-dark text-opacity-50 fw-semibold">1-50</div>
                                            </div>
                                            <div className="p-1 col-3 col-lg-2 bg-white border-bottom">
                                                <div className="text-dark text-opacity-50 fw-semibold">51-100</div>
                                            </div>
                                            <div className="p-1 col-3 col-lg-2 bg-white border-bottom">
                                                <div className="text-dark text-opacity-50 fw-semibold">100+</div>
                                            </div>
                                        </div>
                                        <div className="row text-center ps-2">
                                            <div className="p-1 col-3 col-lg-2 bg-white text-warning fw-bold">
                                                <div>Price</div>
                                            </div>
                                            <div className="p-1 col-3 col-lg-2 bg-white text-warning fw-bold">
                                                <div>{productData.price}</div>
                                            </div>
                                            <div className="p-1 col-3 col-lg-2 bg-white text-warning fw-bold">
                                                <div>{productData.price50}</div>
                                            </div>
                                            <div className="p-1 col-3 col-lg-2 bg-white text-warning fw-bold">
                                                <div>{productData.price100}</div>
                                            </div>
                                        </div>
                                        <div className="row pl-2 my-3">
                                            <p className="text-secondary lh-sm">{productData.description}</p>
                                        </div>
                                        <div className="row pl-2 mb-3">
                                            <div className="col-md-4">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text bg-dark text-white border-0 fw-semibold" id="inputGroup-sizing-default">
                                                        Count
                                                    </span>
                                                    <input
                                                        asp-for="Count"
                                                        type="number"
                                                        value={count} // Use state for value
                                                        onChange={handleCountChange} // Handle changes
                                                        className="form-control text-end"
                                                        aria-label="Sizing example input"
                                                        aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 pb-1">
                                            <button
                          type="button"
                          onClick={handleAddToCart}
                          className="btn btn-dark bg-gradient w-100 py-2 text-uppercase fw-semibold"
                        >
                          Add to Cart
                        </button>
                                            </div>
                                        </div>
                                    </div>
 
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <p>Loading...</p>
            )}
           
 
        </div>
    )
}
 
export default Details