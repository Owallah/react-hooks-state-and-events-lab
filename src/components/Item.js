import React, {useState} from "react";

function Item({ name, category }) {

  const [isAdded, setIsAdded] = useState(false)

  const liClass = isAdded? "in-cart": ""

  const buttonText = isAdded? "Remove From Cart" : "Add to Cart"

  const buttonClass = isAdded? "remove" : "add"

  const handleClick = () => {
    setIsAdded(true)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
