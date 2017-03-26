import React from 'react';
import { BrowserRouter, Route } from 'react-router';
import { connect } from 'react-redux';
import BarSpecificChart from './containers/barSpecificChart.js'
// import BeerToFood from './containers/BeervsFood.js';
import Form from './containers/inputExternal.js'
import BeerToFood from './containers/BeervsFood';
import FoodToBeer from './containers/FoodvsBeer';
import BarTypeChart from './components/barTypeChart';
import BarTypeDropdown from './components/barTypeDropdown';

const App = () => {
  return (
    <div>
      <BarTypeChart />
   		<Form />
   		<BarSpecificChart />
    </div>
  )
}

function select({ app }) {
  return { ...app };
}

export default connect(select)(App);
