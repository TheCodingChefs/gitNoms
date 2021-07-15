import { useState, useEffect } from 'react';

import Recipe from '../display/recipe/Recipe';

const Search = ({search}) => {

    const API_URL = process.env.API_URL || 'http://localhost:4000/recipes';

    const [results, setResults] = useState([]);
    const [filterResults, setFilterResults] = useState([]);

    const getRecipes = async () => {
        try {
            const res = await fetch (API_URL);
            const data = await res.json();
            setResults(data);
            console.log(data[0].title);
            console.log(data[0].title.contains('Shrimp'));

            
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
        }

        filterByName(results);

    }, [results])

    return (
        <div>
            {filterResults.map((recipe) => {
                return(
                    <Recipe recipe={recipe} />
                )
            })}
        </div>
    );
};

export default Search;