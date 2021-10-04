import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Classes from './components/Classes/Classes'
import Services from './components/Services/Services';
import About from './components/About/About';
import Notfound from './components/NotFound/Notfound';
import JoinClass from './components/JoinClass/JoinClass';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ minHeight: '95vh' }}>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/classes">
              <Classes></Classes>
            </Route>
            <Route exact path="/class/:classId">
              <JoinClass></JoinClass>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
