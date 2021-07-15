import { useState, useEffect } from 'react';

const Search = ({search}) => {

    const API_URL = process.env.API_URL || 'http://localhost:4000/recipes';

    const [results, setResults] = useState([]);
    const [filterResults, setFilterResults] = useState([]);

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
            if (!arr) return;
            console.log(arr);
            // setFilterResults([...filterResults, arr.filter(recipe => recipe.name.contains(search))]);
            console.log(filterResults);
        }

        filterByName(results);

    }, [results])

    return (
        <div>
            {search}
            Hi
        </div>
    );
};

export default Search;