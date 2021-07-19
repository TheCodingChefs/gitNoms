import './App.css';
import './Dark.css';

import Navigation from './components/navigation/Navigation';
import Display from './components/display/Display';
import Search from './components/search/Search';
import About from './components/about/About';
import AdvancedSearch from './components/search/advancedSearch/AdvancedSearch';

import { useState } from 'react';
import { Route } from 'react-router-dom';

import Form from './components/add/Add';

function App() {

  const [search, setSearch] = useState('');
  const [allergenFilter, setAllergenFilter] = useState([]);

  // Dark mode
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);   

  return (
    <div className="App">

        <Navigation setSearch={setSearch} search={search} toggleDarkMode={toggleDarkMode} />

        <Route path={`/search/${search}`} exact render={() => 
          <Search search={search} /> }/>
        <Route path={`/about`} exact render={() => 
          <About darkMode={darkMode} /> }/>
        <Route path='/' exact component= {Display} />
        <Route path={'/add'} exact render={() => <Form darkMode={darkMode}/>} />
        <Route path={`/advanced`} exact render={() =>
          <AdvancedSearch darkMode={darkMode} setAllergenFilter={setAllergenFilter}/> } />

    </div>
  );
}

export default App;
