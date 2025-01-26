import CategoryPage from "./pages/CategoryPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MealsPage from "./pages/MealsPage";
import NavBar from "./NavBar";
import RecipePage from "./pages/RecipePage";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} element={<CategoryPage/>}/>
                <Route path="/:category" element={<MealsPage/>}/>
                <Route path="/meal/:id" element={<RecipePage/>}/>
            </Routes>
        </BrowserRouter>

    );

}

export default App;
