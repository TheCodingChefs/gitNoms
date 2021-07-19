import Button from 'react-bootstrap/Button';


import { useState } from 'react';

const AdvancedSearch = ({darkMode}) => {

    const [allergens, setAllergens] = useState([]);

    const allergensArr = ['Milk', 'Egg', 'Fish', 'Shellfish', 'Tree nuts', 'Wheat', 'Peanuts', 'Soybeans'];

    const handleToggle = (allergen) => {

        console.log(allergen);
        if(!allergens.includes(allergen)) {
            setAllergens([...allergens, allergen])
        } else {
            allergens.splice(allergens.indexOf(allergen), 1);
        }

        console.log(allergens);

    }
    
    const handleClick = () => {
        console.log(allergens);
    }
    
    return (
        <div className='advanced-search' theme={darkMode ? "dark" : "light"}>
            <form action="">
            <div className='allergen-buttons'>
                {allergensArr.map((allergen) => {
                    return(
                        <div>
                            <label htmlFor={allergen}>{allergen}</label>
                            <input onChange={() => {handleToggle(allergen)}} className='allergens-checkbox' value={allergen}type="checkbox" name={allergen} id={allergen} />
                        </div>
                    )
                })}
                </div>
                <Button onClick ={handleClick}className='advanced-search-btn' variant='outline-primary'>Search</Button>
            </form>
        </div>
            
    );
};

export default AdvancedSearch;