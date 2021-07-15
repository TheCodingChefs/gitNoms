import './App.css';

import Navigation from './components/navigation/Navigation';
import Display from './components/display/Display';
import Search from './components/search/Search';

import { useState } from 'react';
import { Route } from 'react-router-dom';

import Form from './components/add/Add';

function App() {

  const [search, setSearch] = useState('');

  return (
    <div className="App">


        <Navigation setSearch={setSearch} />
        {/* <Display /> */}

        <Route path='/search-results' exact render={() => <Search search={search} /> }/>
        <Route path='/' exact component= {Display} />
        {/* <Route path='/add' component={Form}/> */}

    </div>
  );
}

export default App;
