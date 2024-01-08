
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {  Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Homebase = () => {
  const [productData, setProductData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5120/api/Product')
      .then((result) => {
        // Update image URLs to contain only the file name
        const modifiedData = result.data.map((product) => {
          const fileName = product.imageUrl.split('\\').pop(); // Adjust for other platforms if needed
          return { ...product, imageUrl: fileName };
        });

        setProductData(modifiedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
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

 
  return (
    <>
      <Navbar/>
      <div className='container my-3'>
        <div className='row'>
          {productData.map((product) => (
            <div className='column' key={product.id}>
              <div className='card1'>
                <img src={product.imageUrl} alt={product.title} style={{ height: '170px' }} />
                <h3 className='my-3'>{product.title}</h3>
                <p>
                  by <span style={{ color: 'orange' }}>{product.author}</span>
                </p>
                <p className='text-dark text-opacity-75 text-center mb-0'>
                  List Price:<span className='text-decoration-line-through'>₹{product.listPrice}</span>
                </p>
                <p>As Low as:₹{product.price}</p>
                <button className='btn btn-dark' style={{ width: '180px', height: '40px' }}>
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


const Homeuser = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5120/api/Product')
      .then((result) => {
        // Update image URLs to contain only the file name
        const modifiedData = result.data.map((product) => {
          const fileName = product.imageUrl.split('\\').pop(); // Adjust for other platforms if needed
          return { ...product, imageUrl: fileName };
        });

        setProductData(modifiedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar user/>
      <div className='container my-3'>
        <div className='row'>
          {productData.map((product) => (
            <div className='column' key={product.id}>
              <div className='card1'>
                <img src={product.imageUrl} alt={product.title} style={{ height: '170px' }} />
                <h3 className='my-3'>{product.title}</h3>
                <p>
                  by <span style={{ color: 'orange' }}>{product.author}</span>
                </p>
                <p className='text-dark text-opacity-75 text-center mb-0'>
                  List Price:<span className='text-decoration-line-through'>₹{product.listPrice}</span>
                </p>
                <p>As Low as:₹{product.price}</p>
                <Link to={`/details/${product.id}`} className='btn btn-dark' style={{ width: '180px', height: '40px' }}>
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


const Homeadmin = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();



  useEffect(() => {
    axios
      .get('http://localhost:5120/api/Product')
      .then((result) => {
        // Update image URLs to contain only the file name
        const modifiedData = result.data.map((product) => {
          const fileName = product.imageUrl.split('\\').pop(); // Adjust for other platforms if needed
          return { ...product, imageUrl: fileName };
        });

        setProductData(modifiedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBackToList = () => {
    navigate('/details');
  };

  return (
    <>
      <Navbar admin/>
      <div className='container my-3'>
        <div className='row'>
          {productData.map((product) => (
            <div className='column' key={product.id}>
              <div className='card1'>
                <img src={product.imageUrl} alt={product.title} style={{ height: '170px' }} />
                <h3 className='my-3'>{product.title}</h3>
                <p>
                  by <span style={{ color: 'orange' }}>{product.author}</span>
                </p>
                <p className='text-dark text-opacity-75 text-center mb-0'>
                  List Price:<span className='text-decoration-line-through'>₹{product.listPrice}</span>
                </p>
                <p>As Low as:₹{product.price}</p>
                {/* <button type='button' className='btn btn-dark' onClick={handleBackToList} style={{ width: '180px', height: '40px' }}>
                  Details
                </button> */}
                <Link to={`/details/${product.id}`} className='btn btn-dark' style={{ width: '180px', height: '40px' }}>
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default function Home(props) {
  if (props.user){
    return <Homeuser />
  }
  if (props.admin){
    return <Homeadmin />
  }
  else{
    return <Homebase />
  }
}






