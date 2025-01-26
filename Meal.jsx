import {Link} from "react-router-dom";
import React from "react";

export function Meal({meal}) {
    return (
            <div className={"col"} >
                <div className={"card h-100"}>
                <img src={meal.strMealThumb} className="card-img-top" width={"auto"} alt={meal.strMeal}/>
                <div className="card-body">
                    <Link className={"btn btn-outline-primary"} to={'/meal/' + meal.idMeal}>{meal.strMeal}</Link>
                </div>
                </div>
            </div>
    );
}
