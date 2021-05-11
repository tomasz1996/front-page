// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Gallery from './components/Gallery';
import Header from './components/Header'
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div>
      <Header />
      <Slideshow />
      <Gallery />
    </div>
  );
}

export default App;
