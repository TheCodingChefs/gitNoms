import { useState, useEffect } from "react";

import Recipe from "./recipe/Recipe";

const Display = () => {
    const API_URL = process.env.API_URL || 'http://localhost:4000/recipes';
    const [recipeData, setRecipeData] = useState([]);

    const getRecipes = async () => {
        try{
            const res = await fetch (API_URL);
            const data = await res.json();
            setRecipeData(data);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(()=> {

        getRecipes();

    }, []);
    return (
        <div className="recipe-container">
            {recipeData.map((recipe) => {
                return(
                    <Recipe getRecipes= {getRecipes}recipe={recipe} />
                )
            })}
        </div>
    );
};

export default Display;