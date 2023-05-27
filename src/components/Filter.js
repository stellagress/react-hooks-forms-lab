import React, {useState} from "react";



function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
      />
      <select name="filter">
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}


// function Filter({ onCategoryChange, items }) {
//   const {search, setSearch} = useState("")

//   const filteredItems = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))



//   function onSearchChange(event){
//     setSearch(event.target.value)
//   }

//   // <Filter onCategoryChange={handleCategoryChange} />


//   return (
//     <div className="Filter">
//       <input 
//       type="text" 
//       value={search} 
//       onChange={onSearchChange}
//       placeholder="Search..." />
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//       <ul>
//         {filteredItems.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default Filter;






// import React from "react";

// function SearchBar({ search }) {
//   return (
//     <form style={{ padding: "10px", display: "flex", flexDirection: "column" }}>
//       <input type="text" placeholder="Search..." value={search} />
//       <label>
//         <input type="checkbox" />
//         Only show products in stock
//       </label>
//     </form>
//   )
// }

// export default SearchBar







// import React from "react";

// function Filter({ onCategoryChange }) {
//   return (
//     <div className="Filter">
//       <input type="text" name="search" placeholder="Search..." />
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;
