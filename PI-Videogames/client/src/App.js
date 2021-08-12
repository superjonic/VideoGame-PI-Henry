import './App.css';
import Welcome from './components/Welcome';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import GameDetail from './components/GameDetail';
import {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { getVideogames } from './actions';
import axios from 'axios';



function App() {
 

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getVideogames())
  })

  // function getGenres(){
  //    axios.get('http://localhost:3001/genres')
  // }

  // useEffect(() => {
  //   getGenres()
  // })
  

  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/'> <Welcome /> </Route>

      <Route path='/home'> <Home /> </Route>

      <Route path="/gamedetail/:id"> <GameDetail /> </Route> 

      <Route path='/createvideogame'> <Form /> </Route>
  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
