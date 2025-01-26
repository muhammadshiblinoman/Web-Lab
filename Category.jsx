import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

const Category = ({ category }) => {
    return (
        <div className="row my-4 shadow-sm bg-white py-3">
            <div className= "col-3 margin-bottom-10">
                <img src={category.strCategoryThumb} className={"w-100"}  alt={category.strCategory} />
            </div>
            <div className="col-9 p-2">
                <h2 className={"bi-arrow-right-circle"}><Link className={"text-decoration-none"} to={'/'+category.strCategory}> {category.strCategory}</Link> </h2>
                <p>{category.strCategoryDescription}</p>
            </div>
        </div>
    );
};

export default Category;
