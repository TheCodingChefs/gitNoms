import { useState, useEffect } from 'react';

import Recipe from '../display/recipe/Recipe';

const Search = ({search, darkMode}) => {

    const API_URL = 'https://git-noms-api.herokuapp.com/recipes';

    const [results, setResults] = useState([]);
    const [filterResults, setFilterResults] = useState([]);

    const [temp, setTemp] = useState([]);

    const getRecipes = async () => {
        try {
            const res = await fetch (API_URL);
            const data = await res.json();
            setResults(data);
            
        }
        catch (err) {
            console.log(err);
        }
    }
   
    useEffect(() => {
        
        getRecipes();
        
    }, []);
    
    useEffect(() => {

        const filterByName = (arr) => {
            
            if (arr.length === 0) return;

            const newArr = arr.filter(function (el) {
                return el.title.toLowerCase().includes(search.toLowerCase())
            })

            console.log(newArr);
            setFilterResults(newArr);
            setTemp(newArr)
        }

        filterByName(results);

        const filterByIngredient = (arr) => {

            if (arr.length === 0) return;

            const newArr = arr.filter(function (el) {
                return el.ingredients.toLowerCase().includes(search.toLowerCase())
            })
            console.log(newArr);
            setFilterResults(newArr);
            //    setTemp(newArr) 
            //    console.log(temp);
            }
        
            filterByIngredient(results)
        

    }, [results]);


    return (
        <div className="search-results" theme={darkMode ? "dark" : "light"}>
            {filterResults.map((recipe) => {
                return(
                    <Recipe recipe={recipe} />
                )
            })}
        </div>
    );
};

export default Search;