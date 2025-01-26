import {useState} from "react";
import Category from "../Category";

function CategoryPage() {

    let [categories, setCategories] = useState([]);
    let [showLoading, setShowLoading] = useState(false);

    //on click fetch `www.themealdb.com/api/json/v1/1/categories.php` and display the categories in the ul
    const fetchCategories = async () => {
        setShowLoading(true);
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            setCategories(data.categories);
        } catch (error) {
            console.log(error);
        } finally {
            setShowLoading(false);
        }
    };

    const clearContent = () => {
        setCategories([]);
    };

    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={fetchCategories}>View Meal Categories</button>
                    &nbsp;
                    <button className="btn btn-danger" onClick={clearContent}>Clear Categories</button>
                </div>
            </div>
            <div>
                <div>
                    {categories.length === 0 ? <p>Click the button to view meal categories</p> : null}
                    {showLoading ? <p>Loading...</p> : null}
                    {categories.map((category, index) => (
                        <Category key={index} category={category}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
