import { combineReducers } from 'redux';
import TopBeers from './topBeers';
import barType from './barTypeReducer';
import TopFoods from './topFoods'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  topBeers: TopBeers,
  topFoods: TopFoods,
  routing:routerReducer,
  barType
});

export default rootReducer;
