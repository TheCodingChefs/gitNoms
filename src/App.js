import './App.css';
import { Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Display from './components/display/Display'
import Form from './components/add/Add'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Display />
        {/* <Route path='/add' component={Form}/> */}
    </div>
  );
}

export default App;
