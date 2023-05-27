
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }

    if (
      searchTerm.trim() !== "" &&
      !item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="ShoppingList">
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;



















// import React, { useState } from "react";
// import ItemForm from "./ItemForm";
// import Filter from "./Filter";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//     function handleItemFormSubmit(newItem) {
//     setItems((prevItems) => [...prevItems, newItem]);
//   }

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   function handleSearchChange(event) {
//     setSearchTerm(event.target.value);
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory !== "All" && item.category !== selectedCategory) {
//       return false;
//     }

//     if (
//       searchTerm.trim() !== "" &&
//       !item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     ) {
//       return false;
//     }

//     return true;
//   });

//   return (
//     <div className="ShoppingList">
//       <ItemForm onItemFormSubmit={handleItemFormSubmit} />
//       <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;









// import React, { useState } from "react";
// import ItemForm from "./ItemForm";
// import Filter from "./Filter";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });

//   return (
//     <div className="ShoppingList">
//       <ItemForm />
//       <Filter onCategoryChange={handleCategoryChange} />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
