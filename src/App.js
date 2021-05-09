import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div>
      <Slideshow />
      <Header />
    </div>
  );
}

export default App;
