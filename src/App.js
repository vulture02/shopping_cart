import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import './App.css'
import Cart from './components/Cart';

const App = () => {
  const [cart, setcart] = useState([]);
  const [warning, setwarning] = useState(false);
  const [show,setshow]=useState(true);

  const handleClick = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        ispresent = true;
      }
    });

    if (ispresent) {
      setwarning(true)
      setTimeout(()=>{
        setwarning(false)
      },2000)
      return
    }

    setcart([...cart, item]);
  };

  return (
    <div>
      <NavBar size={cart.length} setshow={setshow} />
      {
        show ? <Shop handleClick={handleClick} />:<Cart cart={cart} setcart={setcart}/>
      }
     
     {warning && <div className='warning'>Item already present</div>} 
    </div>
  );
};

export default App;
