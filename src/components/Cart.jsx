import React, { useState,useEffect} from 'react';
import '../stye/cart.css'

const Cart = ({ cart, setcart }) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const quantity = item.quantity || 1; 
      return acc + item.price * quantity;
    }, 0);
    
    setPrice(total);
  }, [cart]);
  
  const increaseQuantity = (id) => {
    setcart((preves) =>
      preves.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity ? item.quantity + 1 :1} : item
      )
    );
  };   
  const decreaseQuantity = (id) => {
    setcart((preves) =>
      preves.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity:  item.quantity - 1 }
          : item
      )
    );
  };
  const removeitem = (id) => {
    setcart(cart.filter(item => item.id !== id)); 
  };  

  return (
    <div>
      {cart?.map((item) => (
        <div className='cart_box' key={item.id}>
          <div className='cart_imag'>
            <img src={item.img} alt={item.title} /> 
                <p>{item.title}</p>
          </div>
          <div className='quantity_controls'>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <span>{item.quantity||1}</span>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </div>
          <div>
            <span>{item.price}</span>
            <button onClick={()=>removeitem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <h3>Total:{price}Rs</h3>
      </div>
    </div>
  );
};

export default Cart;
