import React from 'react';
import '../stye/card.css'

const Card = ({ item,handleClick }) => {
    const{title,author,price,img}=item
  return (
    <div className='cards'>
     <div className='img_box'>
        <img src={img} alt={item.name} />
    </div>
    <div className='detail'>
        <p>{title}</p>
        <p>{author}</p>
        <p>Price-{price} Rs</p>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
    
    </div>
  );
};

export default Card;
