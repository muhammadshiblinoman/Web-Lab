import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Meal} from "../Meal";


function MealsPage() {
    let {category} = useParams();
    let [showLoading, setShowLoading] = useState(false);
    let [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals(category);
    }, [category]);

    const fetchMeals = (cat) => {
        setShowLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            .then(response => response.json())
            .then(data => {
                setMeals(data.meals);
                setShowLoading(false);
            })
            .catch(error => {
                console.log(error);
            }).finally(() => {
                setShowLoading(false);
            });
    };

    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-10">
                    <h1> View Meals for {category} </h1>
                </div>
                <div className="col-2 text-end">
                    <Link to={"/"} className="btn btn-primary">
                        <i className={"bi-arrow-left-circle"}></i> Back
                    </Link>
                </div>
            </div>
            <div>
                <div className={"my-2 row row-cols-2 row-cols-lg-4 row-cols-md-3 g-4"}>
                    {showLoading ? <p>Loading...</p> : null}
                    {meals.map((meal, index) => (
                        <Meal key={index} meal={meal} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MealsPage;
