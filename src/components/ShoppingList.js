import React, {useEffect, useMemo, useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [shoppingList, setShoppingList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()

  useEffect(() => {
    setShoppingList(items)
  }, [])

  const getFilteredList = () => {
    if (!selectedCategory) {
      return shoppingList
    }
    return shoppingList.filter((item) => item.category === selectedCategory)
  }

  const filteredList = useMemo(getFilteredList, [selectedCategory, shoppingList])

  const handleOnChange = (e) => {
    setSelectedCategory(e.target.value)
    
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleOnChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
