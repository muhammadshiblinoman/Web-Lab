import React, { useEffect, useState } from "react";
// import React from 'react';
import './App.css';
// import FatchData from "./Pages/FatchData";
import CategoryCard from "./CategoryCard";

// import Home from "./Pages/Home";
// import State from './Pages/State';
// import Fragments from './Pages/Fragments';
// import Clipbord from './Pages/Clipbord';
// import Focus from './Pages/Focus';
// import Keybord from './Pages/Keybord';
// import Style from './Pages/Style';
// import ReactBootstrap from './Pages/ReactBootstrap';
// import DataPattarn from './Pages/DataPattarn';

// function App() {
//   return(
//     <div className="App">
//       {/* <Home/>
//       <State></State>
//       <Fragments/>
//       <Clipbord></Clipbord>
//       <Focus></Focus>
//       <Keybord></Keybord> */}
//       {/* <Style></Style> */}

//       {/* <ReactBootstrap></ReactBootstrap> */}

//       {/* <FatchData></FatchData> */}
//       <DataPattarn></DataPattarn>

//     </div>
//   )
// };




function App() {
  
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      // .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Meal Categories</h1>
      <div>
        {showAll &&
          categories.map((category) => (
            <CategoryCard
              key={category.idCategory}
              title={category.strCategory}
              description={category.strCategoryDescription}
              image={category.strCategoryThumb}
            />
          ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        style={{
          marginTop: "20px",
          padding: "15px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default App;
