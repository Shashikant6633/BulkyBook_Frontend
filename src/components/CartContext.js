
// import React, { createContext, useContext, useReducer, useEffect } from 'react';

// // Define the initial state for the cart
// const initialCartState = {
//   cartItems: [],
// };

// // Define actions to manipulate the cart state
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     case 'UPDATE_QUANTITY':
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, count: action.payload.count }
//             : item
//         ),
//       };
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== action.payload),
//       };
//     case 'PLUS_ONE':
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === action.payload ? { ...item, count: item.count + 1 } : item
//         ),
//       };
//     case 'MINUS_ONE':
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === action.payload && item.count > 1 ? { ...item, count: item.count - 1 } : item
//         ),
//       };
//     case 'LOAD_CART':
//       return {
//         ...state,
//         cartItems: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Create the CartContext
// const CartContext = createContext();

// // Create the CartProvider component
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialCartState);

//   // Load data from local storage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
//     }
//   }, []); // Empty dependency array to run only once on mount

//   // Save data to local storage whenever cartItems change
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(state.cartItems));
//   }, [state.cartItems]);

//   const addToCart = (item) => {
//     dispatch({ type: 'ADD_TO_CART', payload: item });
//   };

//   const updateQuantity = (id, count) => {
//     dispatch({ type: 'UPDATE_QUANTITY', payload: { id, count } });
//   };

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: id });
//   };

//   const handlePlus = (id) => {
//     dispatch({ type: 'PLUS_ONE', payload: id });
//   };

//   const handleMinus = (id) => {
//     dispatch({ type: 'MINUS_ONE', payload: id });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems: state.cartItems,
//         addToCart,
//         updateQuantity,
//         removeFromCart,
//         handlePlus,
//         handleMinus
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Create a custom hook to use the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };






// import React, { createContext, useContext, useReducer, useEffect } from 'react';

// // Define the initial state for the cart
// const initialCartState = {
//   cartItems: [],
// };

// // Define actions to manipulate the cart state
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     case 'UPDATE_QUANTITY':
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, count: action.payload.count }
//             : item
//         ),
//       };
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== action.payload),
//       };
//     case 'PLUS_ONE':
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === action.payload ? { ...item, count: item.count + 1 } : item
//         ),
//       };
//     case 'MINUS_ONE':
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === action.payload && item.count > 1 ? { ...item, count: item.count - 1 } : item
//         ),
//       };
//     case 'LOAD_CART':
//       return {
//         ...state,
//         cartItems: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Create the CartContext
// const CartContext = createContext();

// // Create the CartProvider component
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialCartState);

//   // Load data from local storage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
//     }
//   }, []);

//   // Save data to local storage whenever cartItems change
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(state.cartItems));
//   }, [state.cartItems]);

//   const apiUrl = 'http://localhost:5120/api/Cart';

//   const addToCart = async (item) => {
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any authentication headers if needed
//         },
//         body: JSON.stringify(item),
//       });

//       if (response.ok) {
//         // Item added successfully to the backend, now update the local state
//         dispatch({ type: 'ADD_TO_CART', payload: item });
//       } else {
//         console.error('Failed to add item to cart');
//       }
//     } catch (error) {
//       console.error('Network error while adding item to cart', error);
//     }
//   };

//   // Add similar API calls for other actions (updateQuantity, removeFromCart, handlePlus, handleMinus)

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems: state.cartItems,
//         addToCart,
//         // Add other action functions here
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Create a custom hook to use the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };





// import React, { createContext, useContext, useReducer, useEffect } from 'react';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return [...state, action.payload];
  
//       case 'REMOVE_FROM_CART':
//         return state.filter(item => item.id !== action.payload);

//         case 'PLUS_ONE':
//             return {
//               ...state,
//               cartItems: state.cartItems.map((item) =>
//                 item.id === action.payload ? { ...item, count: item.count + 1 } : item
//               ),
//             };
//           case 'MINUS_ONE':
//             return {
//               ...state,
//               cartItems: state.cartItems.map((item) =>
//                 item.id === action.payload && item.count > 1 ? { ...item, count: item.count - 1 } : item
//               ),
//             };
//           case 'LOAD_CART':
//             return {
//               ...state,
//               cartItems: action.payload,
//             };
  
//       default:
//         return state;
//     }
//   };
  

// const CartProvider = ({ children }) => {
//   const [cartItems, dispatch] = useReducer(cartReducer, [], (initial) => {
//     // Load cart items from local storage on initial render
//     const storedCart = localStorage.getItem('cart');
//     return storedCart ? JSON.parse(storedCart) : initial;
//   });

//   // Update local storage whenever the cart items change
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//   };

//   const handlePlus = (id) => {
//         dispatch({ type: 'PLUS_ONE', payload: id });
//       };
    
//       const handleMinus = (id) => {
//         dispatch({ type: 'MINUS_ONE', payload: id });
//       };  

//   const removeFromCart = (productId) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export { CartProvider, useCart };


//Working Code


// import React, { createContext, useContext, useReducer,useEffect } from 'react';

// // Create a context
// const CartContext = createContext();

// // Define your cart reducer function
// const cartReducer = (state, action) => {
//   switch (action.type) {

//     case 'ADD_TO_CART':
//         return [...state, action.payload];
  
//       case 'REMOVE_FROM_CART':
//         return state.filter(item => item.id !== action.payload);


//     case 'HANDLE_PLUS':
//       // Increment the quantity of an item in the cart
//       return state.map((item) =>
//         item.id === action.payload ? { ...item, count: item.count + 1 } : item
//       );

//     case 'HANDLE_MINUS':
//       // Decrement the quantity of an item in the cart
//       return state.map((item) =>
//         item.id === action.payload ? { ...item, count: Math.max(1, item.count - 1) } : item
//       );

//     default:
//       return state;
//   }
// };


// const loadCartFromLocalStorage = () => {
//     const cartData = localStorage.getItem('cart');
//     return cartData ? JSON.parse(cartData) : [];
//   };
  
//   const CartProvider = ({ children }) => {
//     const [cartItems, dispatch] = useReducer(cartReducer, [], loadCartFromLocalStorage);
  
//     useEffect(() => {
//       localStorage.setItem('cart', JSON.stringify(cartItems));
//     }, [cartItems]);
  
//     const contextValue = {
//       cartItems,
//       addToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item }),
//       removeFromCart: (itemId) => dispatch({ type: 'REMOVE_FROM_CART', payload: itemId }),
//       handlePlus: (itemId) => dispatch({ type: 'HANDLE_PLUS', payload: itemId }),
//       handleMinus: (itemId) => dispatch({ type: 'HANDLE_MINUS', payload: itemId }),
//     };
  
//     return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
//   };
  
//   const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//       throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
//   };
  
//   export { CartProvider, useCart };


// import React, { createContext, useContext, useReducer, useEffect } from 'react';

// // Create a context
// const CartContext = createContext();

// // Define your cart reducer function
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];

//     case 'REMOVE_FROM_CART':
//       return state.filter((item) => item.id !== action.payload);

//     case 'HANDLE_PLUS':
//       return state.map((item) =>
//         item.id === action.payload ? { ...item, count: item.count + 1 } : item
//       );

//     case 'HANDLE_MINUS':
//       return state.map((item) =>
//         item.id === action.payload ? { ...item, count: Math.max(1, item.count - 1) } : item
//       );

//     case 'INCREMENT_QUANTITY':
//       return state.map((item) =>
//         item.id === action.payload ? { ...item, count: item.count + 1 } : item
//       );

//     case 'UPDATE_QUANTITY':
//       return state.map((item) =>
//         item.id === action.payload.itemId ? { ...item, count: action.payload.newQuantity } : item
//       );

//     default:
//       return state;
//   }
// };

// const loadCartFromLocalStorage = () => {
//   const cartData = localStorage.getItem('cart');
//   return cartData ? JSON.parse(cartData) : [];
// };

// const CartProvider = ({ children }) => {
//   const [cartItems, dispatch] = useReducer(cartReducer, [], loadCartFromLocalStorage);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const contextValue = {
//     cartItems,
//     addToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item }),
//     removeFromCart: (itemId) => dispatch({ type: 'REMOVE_FROM_CART', payload: itemId }),
//     handlePlus: (itemId) => dispatch({ type: 'HANDLE_PLUS', payload: itemId }),
//     handleMinus: (itemId) => dispatch({ type: 'HANDLE_MINUS', payload: itemId }),
//     incrementQuantity: async (itemId) => {
//       try {
//         const response = await fetch(`http://localhost:5120/api/CartItem/IncrementQuantity/${itemId}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           dispatch({ type: 'INCREMENT_QUANTITY', payload: itemId });
//         } else {
//           console.error('Failed to increment quantity');
//         }
//       } catch (error) {
//         console.error('Error incrementing quantity:', error);
//       }
//     },
//     updateQuantity: async (itemId, newQuantity) => {
//       try {
//         const response = await fetch(`http://localhost:5120/api/CartItem/${itemId}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ quantity: newQuantity }),
//         });

//         if (response.ok) {
//           dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, newQuantity } });
//         } else {
//           console.error('Failed to update quantity');
//         }
//       } catch (error) {
//         console.error('Error updating quantity:', error);
//       }
//     },
//   };

//   return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export { CartProvider, useCart };




import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create a context
const CartContext = createContext();

// Define your cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);

       case 'UPDATE_QUANTITY':
      // Update the quantity of an item in the cart
      return state.map((item) =>
        item.id === action.payload.itemId ? { ...item, count: action.payload.newQuantity } : item
      );

    case 'HANDLE_PLUS':
      return state.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );

    case 'HANDLE_MINUS':
      return state.map((item) =>
        item.id === action.payload ? { ...item, count: Math.max(1, item.count - 1) } : item
      );

    default:
      return state;
  }
};

const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], loadCartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantityBackend = async (itemId, newQuantity) => {
    try {
      const url = `http://localhost:5120/api/CartItem/${itemId}`;
      console.log('Updating quantity in the backend. URL:', url);

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: newQuantity }), // Update this property name if needed
      });

      if (!response.ok) {
        console.error('Failed to update quantity in the backend');
      }
    } catch (error) {
      console.error('Error updating quantity in the backend:', error);
    }
  };

  const contextValue = {
    cartItems,
    addToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item }),
    removeFromCart: (itemId) => dispatch({ type: 'REMOVE_FROM_CART', payload: itemId }),
    handlePlus: (itemId) => dispatch({ type: 'HANDLE_PLUS', payload: itemId }),
    handleMinus: (itemId) => dispatch({ type: 'HANDLE_MINUS', payload: itemId }),
    updateQuantityBackend,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
