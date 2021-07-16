import Button from 'react-bootstrap/Button';


import { useState } from 'react';

const AdvancedSearch = () => {

    const [allergens, setAllergens] = useState([]);

    const allergens = ['Milk', 'Egg', 'Fish', 'Shellfish', 'Tree nuts', 'Wheat', 'Peanuts', 'Soybeans'];

    handleToggle = (allergen) => {



    } 
    
    

    return (
        <div className='advanced-search'>
            <form action="">
                {allergens.map((allergen) => {
                    return(
                        <div>
                            <label htmlFor={allergen}>{allergen}</label>
                            <input onChange={() => {handleToggle(allergen)}} className='allergens-checkbox' value={allergen}type="checkbox" name={allergen} id={allergen} />
                        </div>
                    )
                })}
            </form>
                <Button className='advanced-search-btn' variant='outline-primary'>Search</Button>
        </div>
            
    );
};

export default AdvancedSearch;