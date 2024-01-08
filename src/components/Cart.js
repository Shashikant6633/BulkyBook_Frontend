// import React from 'react';
// import { useCart } from './CartContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'


// const Cart = () => {
//     const { cartItems, handlePlus, handleMinus, removeFromCart, updateQuantity } = useCart();

//     const incrementQuantity = async (itemId) => {
//         // Trigger the handlePlus action
//         handlePlus(itemId);

//         // Get the updated quantity from the state
//         const updatedItem = cartItems.find((item) => item.id === itemId);
//         const newQuantity = updatedItem ? updatedItem.count : 1;

//         // Update the quantity in the backend
//         await updateQuantity(itemId, newQuantity);
//       };



//   return (
//     <div className="container">
//       <br />
//       <div className="card shadow border-0">
//       <div className="card-header bg-secondary bg-gradient text-light ml-0 py-4 text-center">
//                         <div className="row px-4">
//                             <div className="col-12">
//                                 <h5 className="pt-2 text-white">Shopping Cart</h5>
//                             </div>
//                         </div>
//                     </div>
//         <div className="card-body my-4">
//           <div className="row mb-3 pb-3">
//             <div className="col-md-2 offset-md-1">
//               <a
//                 href="/admin"
//                 className="btn btn-outline-primary text-uppercase mb-5 btn-sm"
//               >
//                 <small>Continue Shopping</small>
//               </a>
//             </div>
//             <div className="col-md-10 offset-md-1">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="row border-bottom pb-3">
//                   <div className="d-none d-lg-block col-lg-1 text-center py-2">
//                     {/* {item.product && item.product.productImages &&
//                       item.product.productImages.length > 0 ? (
//                       <img
//                         src={item.product.productImages[0].imageUrl}
//                         alt="Product"
//                         className="card-img-top rounded w-100"
//                       />
//                     ) : (
//                       <img
//                         src="https://placehold.co/500x600/png"
//                         alt="Placeholder"
//                         className="card-img-top rounded w-100"
//                       />
//                     )} */}
//                     <img src={item.product.imageUrl} className="card-img-top rounded w-100"></img>
//                   </div>
//                   <div className="col-12 col-lg-6 pt-md-3">
//                     <h5 className="text-uppercase text-secondary">
//                       <strong>{item.product.title}</strong>
//                     </h5>
//                     <p>
//                       <small
//                         dangerouslySetInnerHTML={{
//                           __html: item.product.description,
//                         }}
//                       ></small>
//                     </p>
//                   </div>
//                   <div className="col-12 col-lg-5 text-center row">
//                     <div className="col-3 text-md-right pt-2 pt-md-4">
//                       <h6 className="fw-semibold">
//                         {/* {(item.price !== undefined ? item.price.toLocaleString('en-US', {
//                           style: 'currency',
//                           currency: 'USD',
//                         }) : 'N/A')} */}
//                         {(item.product && item.product.price !== undefined ? `₹${item.product.price}` : 'N/A')}

//                         <span className="text-muted">&nbsp;x&nbsp;</span>
//                         {(item.count !== undefined ? item.count : 'N/A')}
//                       </h6>
//                     </div>
//                     <div className="col-6 col-sm-4 col-lg-6 pt-2">
//                       <div className="w-75 btn-group" role="group">
//                         <button
//                         s   onClick={() => handlePlus(item.id)}

//                         //onClick={() => incrementQuantity(item.id)}
//                         // onClick={() => incrementQuantity(item.id)}
//                           className="btn btn-outline-primary bg-gradient py-2"
//                         >
//                           <FontAwesomeIcon icon={faPlus} />
//                         </button>{' '}
//                         &nbsp;
//                         <button
//                           onClick={() => handleMinus(item.id)}
//                           className="btn btn-outline-primary bg-gradient py-2"
//                         >
//                           <FontAwesomeIcon icon={faMinus} />
//                         </button>
//                       </div>
//                     </div>
//                     <div className="col-3 col-sm-4 col-lg-2 offset-lg-1 text-right pt-2">
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="btn btn-danger bg-gradient py-2"
//                       >
//                         <FontAwesomeIcon icon={faTrash} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="card-footer bg-white border-0">
//             <div className="row">
//               <div className="col-md-4 offset-md-4">
//                 <ul className="list-group mb-4">
//                   <li className="d-flex justify-content-between align-items-center">
//                     <h5 className="text-dark fw-semibold text-uppercase">
//                       Total (₹)
//                     </h5>
//                     <h4 className="text-dark fw-bolder">
//                     {`₹${cartItems.reduce(
//   (total, item) => total + ((item.product.price !== undefined && item.count !== undefined) ? item.product.price * item.count : 0),
//   0
// )}`}

//                     </h4>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-2 offset-md-5">
//                 <a
//                   href="/YourSummaryAction"
//                   className="btn btn-primary border-0 bg-gradient w-100 py-2"
//                 >
//                   Summary
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useState } from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa,faCcMastercard } from '@fortawesome/free-brands-svg-icons';

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";

library.add(fas);

const Cart = () => {
  const { cartItems, handlePlus, handleMinus, removeFromCart } = useCart();

  const updateQuantityInBackend = async (id, newQuantity) => {
    const url = `http://localhost:5120/api/CartItem/${id}`;
    const data = {
      id: id,
      quantity: newQuantity,
    };

    try {
      await axios.put(url, data);
    } catch (error) {
      console.error('Failed to update quantity in the backend:', error);
      // Handle the error, show an error message to the user, etc.
    }
  };


  const incrementQuantity = (itemId) => {
    handlePlus(itemId);

    const updatedItem = cartItems.find((item) => item.id === itemId);
    const newQuantity = updatedItem ? updatedItem.count : 1;

    updateQuantityInBackend(itemId, newQuantity);
  };

  const decrementQuantity = (itemId) => {
    handleMinus(itemId);

    const updatedItem = cartItems.find((item) => item.id === itemId);
    const newQuantity = updatedItem ? updatedItem.count : 1;

    updateQuantityInBackend(itemId, newQuantity);
  };

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + ((item.product.price !== undefined && item.count !== undefined) ? item.product.price * item.count : 0),
      0
    );
  };


  return (
    <div className="container">
      <br />
      <div className="card shadow border-0">
        <div className="card-header bg-secondary bg-gradient text-light ml-0 py-4 text-center">
          <div className="row px-4">
            <div className="col-12">
              <h5 className="pt-2 text-white">Shopping Cart</h5>
            </div>
          </div>
        </div>
        <div className="card-body my-4">
          <div className="row mb-3 pb-3">
            <div className="col-md-2 offset-md-1">
              <a
                href="/user"
                className="btn btn-outline-primary text-uppercase mb-5 btn-sm"
              >
                <small>Continue Shopping</small>
              </a>
            </div>
            <div className="col-md-10 offset-md-1">
              {cartItems.map((item) => (
                <div key={item.id} className="row border-bottom pb-3">
                  <div className="d-none d-lg-block col-lg-1 text-center py-2">
                    <img src={item.product.imageUrl} className="card-img-top rounded w-100" alt="Product" />
                  </div>
                  <div className="col-12 col-lg-6 pt-md-3">
                    <h5 className="text-uppercase text-secondary">
                      <strong>{item.product.title}</strong>
                    </h5>
                    <p>
                      <small
                        dangerouslySetInnerHTML={{
                          __html: item.product.description,
                        }}
                      ></small>
                    </p>
                  </div>
                  <div className="col-12 col-lg-5 text-center row">
                    <div className="col-3 text-md-right pt-2 pt-md-4">
                      <h6 className="fw-semibold">
                        {(item.product && item.product.price !== undefined ? `₹${item.product.price}` : 'N/A')}
                        <span className="text-muted">&nbsp;x&nbsp;</span>
                        {(item.count !== undefined ? item.count : 'N/A')}
                      </h6>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-6 pt-2">
                      <div className="w-75 btn-group" role="group">
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="btn btn-outline-primary bg-gradient py-2"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>{' '}
                        &nbsp;
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="btn btn-outline-primary bg-gradient py-2"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </div>
                    </div>
                    <div className="col-3 col-sm-4 col-lg-2 offset-lg-1 text-right pt-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-danger bg-gradient py-2"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-footer bg-white border-0">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <ul className="list-group mb-4">
                  <li className="d-flex justify-content-between align-items-center">
                    <h5 className="text-dark fw-semibold text-uppercase">
                      Total (₹)
                    </h5>
                    <h4 className="text-dark fw-bolder">
                      {`₹${cartItems.reduce(
                        (total, item) => total + ((item.product.price !== undefined && item.count !== undefined) ? item.product.price * item.count : 0),
                        0
                      )}`}
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 offset-md-5">
                {/* <a
                  href="/YourSummaryAction"
                  className="btn btn-primary border-0 bg-gradient w-100 py-2"
                >
                  Pay Now
                </a> */}
                <button 
                  className="btn btn-block btn-primary"
                  onClick={() => handleShowModal()}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} >
        <Modal.Header closeButton >
          <Modal.Title>Payment Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* <p>Selected Villa: {selectedVilla && selectedVilla.name}</p>
                    <p>Selected Nights: {selectedNights}</p>
                    <p>Total Price: ₹ {totalPrice}</p> */}
          {/* Your form fields go here */}
          <MDBContainer fluid className="p-5" style={{ backgroundColor: "#eee" }}>
            <MDBCard >
              <MDBCardBody style={{ textAlign: 'left' }}>
                <MDBRow className="d-flex justify-content-left pb-5">
                  <MDBCol className="mb-4 mb-md-0 col-12">
                    <div className="py-4 d-flex flex-row">
                      {/* <h5>
                        <Paypal size={30} className="ms-2"></Paypal>
                        <b>&nbsp;ELIGIBLE</b>
                      </h5> */}
                      <span className="ps-2">Pay</span>
                    </div>
                    <h4 className="text-success"> ₹{calculateTotalPrice() - (calculateTotalPrice() / 10)} </h4>
                    <h4>Bulky Book</h4>


                    <hr />
                    <div className="pt-2">

                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                        </div>
                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                          <p className="mb-0">
                          <FontAwesomeIcon icon={faCcVisa} style={{color: "#1a1f71",}} />
                               Visa Debit Card
                          </p>
                          <div className="ms-auto">************3456</div>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                        </div>
                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                          <p className="mb-0">
                          <FontAwesomeIcon icon={faCcMastercard} />
                            Mastercard Office
                          </p>
                          <div className="ms-auto">************1038</div>
                        </div>
                      </div>

                      <div
                        className="rounded d-flex flex-column p-2"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <div className="p-2 me-3">
                          <h4>Order Recap</h4>
                        </div>
                        <div className="p-2 d-flex">
                          <MDBCol size="8">Price</MDBCol>
                          <div className="ms-auto">- ₹ {calculateTotalPrice()}</div> 
                        </div>

                        <div className="p-2 d-flex">
                          <MDBCol size="8">Discount Price</MDBCol>
                           <div className="ms-auto">- ₹ {(calculateTotalPrice() / 10)}</div> 
                        </div>
                        <div className="border-top px-2 mx-2"></div>


                        <div className="p-2 d-flex pt-3">
                          <MDBCol size="8">
                            <b>Total</b>
                          </MDBCol>
                          <div className="ms-auto">
                            <b className="text-success">₹ {calculateTotalPrice() - (calculateTotalPrice() / 10)}</b>
                          </div>
                        </div>
                      </div>

                    </div>
                  </MDBCol>

                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="success" >
            Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
