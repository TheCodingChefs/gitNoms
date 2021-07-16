import './App.css';

import Navigation from './components/navigation/Navigation';
import Display from './components/display/Display';
import Search from './components/search/Search';
import About from './components/about/About';

import { useState } from 'react';
import { Route } from 'react-router-dom';

import Form from './components/add/Add';

function App() {

  const [search, setSearch] = useState('');

  return (
    <div className="App">


        <Navigation setSearch={setSearch} search ={search} />

        <main>
          <Route path={`/search/${search}`} exact render={() => <Search search={search} /> }/>
          <Route path='/' exact component= {Display} />
          <Route path='/about' exact component= {About} />
          <Route path='/add' component={Form}/>
        </main>

    </div>
  );
}

export default App;
