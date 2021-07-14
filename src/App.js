import './App.css';

import Navigation from './components/navigation/Navigation';
import Display from './components/display/Display';
import Search from './components/search/Search';

import { useState } from 'react';
import { Route } from 'react-router-dom'

function App() {

  const [search, setSearch] = useState('');

  return (
    <div className="App">


        <Navigation setSearch={setSearch} />
        <Display />
        <Route path='/search-results' exact render={() => <Search search={search} /> }/>
    </div>
  );
}

export default App;
