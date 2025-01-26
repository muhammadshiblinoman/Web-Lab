import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const mealCache = {};

function RecipePage() {

    let {id} = useParams();
    let [showLoading, setShowLoading] = useState(false)
    let [meal, setMeal] = useState(null);


    useEffect(() => {
        if (mealCache[id]) {
            setMeal(mealCache[id]);
        } else {
            fetchMeal(id);
        }
    }, [id]);

    const fetchMeal = (id) => {
        setShowLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            mealCache[id] = data.meals[0];
            setMeal(data.meals[0])
        })
        .catch(error => console.log(error))
        .finally(() => setShowLoading(false));
    }


    return (
        <div className="container">

            {showLoading ? <p> Loading...</p> : null}

            {meal ?
                <div>

                    <div className="row pt-2">
                        <div className="col-12 text-end">
                            <Link to={"/" + meal.strCategory} className="btn btn-primary"> <i
                                className={"bi-arrow-left-circle"}></i> Back</Link>
                        </div>
                    </div>

                    <div className={"col-12"}>
                        <h1>{meal.strMeal}</h1>
                        <hr/>

                        <div className="row">
                            <div className="col-3">
                                <img src={meal.strMealThumb} className="img-fluid d-inline-block  me-2 mt-2 rounded"
                                     alt={meal.strMeal}/>

                            </div>

                            <div className="col-6">
                                <div className={"d-flex justify-content-between"}>
                                    <h3>Instructions </h3>
                                    <a style={{fontSize: "2rem"}} className={"align-middle"} href={meal.strYoutube}
                                       target={"_blank"}>
                                        <i className={"bi bi-youtube text-danger"}></i> </a>

                                </div>
                                <p className={"lh-lg"}>{meal.strInstructions}</p>

                            </div>

                            <div className={"col-3"}>
                                <h3 className={"text-muted"}>Ingredients</h3>
                                <ul className={"alert alert-warning list-unstyled"}>
                                    {Object.keys(meal).map((key, index) => {
                                        if (key.includes("strIngredient") && meal[key] !== "") {
                                            return <li className={"bi-dash-lg"}
                                                       key={index}>{meal[key]} - {meal["strMeasure" + key.split("strIngredient")[1]]}</li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}

export default RecipePage;
