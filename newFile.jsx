import React, { useEffect, useState } from "react";
// import React from 'react';
import './App.css';
// import FatchData from "./Pages/FatchData";
// import CategoryCard from "./CategoryCard";

// import Home from "./Pages/Home";
// import State from './Pages/State';
// import Fragments from './Pages/Fragments';
// import Clipbord from './Pages/Clipbord';
// import Focus from './Pages/Focus';
// import Keybord from './Pages/Keybord';
// import Style from './Pages/Style';
// import ReactBootstrap from './Pages/ReactBootstrap';
// import DataPattarn from './Pages/DataPattarn';
// import Button from "./Pages/Button";


// import APIfetch from "./Pages/APIfetch";
// import Catagories from "./API/Catagories";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => setCategories(data.categories)) 
      // .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Meal Categories</h1>
      <div>
        {categories.map((category) => (
          <div key={category.idCategory} style={{ marginBottom: "20px" }}>
            <h2>{category.strCategory}</h2>
            <img 
              src={category.strCategoryThumb} 
              alt={category.strCategory} 
              style={{ width: "200px", borderRadius: "10px" }} 
            />
            <p>{category.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
