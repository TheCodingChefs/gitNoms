import Button from 'react-bootstrap/Button';


import { useState } from 'react';

const AdvancedSearch = () => {

    const [checked, setChecked] = useState(false);

    const allergens = ['Milk', 'Egg', 'Fish', 'Shellfish', 'Tree nuts', 'Wheat', 'Peanuts', 'Soybeans'];
    
    

    return (
        <div className='advanced-search'>
            <div className="allergen-buttons">
                {allergens.map((allergen) => {
                    return(
                        <div>
                            <label htmlFor={allergen}>{allergen}</label>
                            <input className='allergens-checkbox' value={allergen}type="checkbox" name={allergen} id={allergen} />
                        </div>
                    )
                })}
            </div>
                <Button className='advanced-search-btn' variant='outline-primary'>Search</Button>
        </div>
            
    );
};

export default AdvancedSearch;