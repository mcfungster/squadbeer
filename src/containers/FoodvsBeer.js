// Component for requesting specific foods ordered and how many of each type of beer was ordered with said food
import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputExternal from './inputExternal';
import { HorizontalBar } from 'react-chartjs-2';
import { fetchFoodsByBeer } from '../actions/actionFile';

const dataSet = {
  labels: [],
  datasets: [
    {
      label: 'Beer to Foods Map',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      hoverBorderWidth: 4,
      data: []
    }
  ]
};

class FoodToBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputChange: ''
    };
  }

  mapDataToDataSet(foodData) {
    if(foodData !== null) {
      dataSet.labels = foodData.x;
      dataSet.datasets[0].data = foodData.y;
    }
  }

  render() {
    return (
      <div>
        What kinds of beer do people order with this kind of food?
        <InputExternal dispatchAction={fetchFoodsByBeer} />
        <HorizontalBar data={this.mapDataToDataSet(this.props.data)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps)(FoodToBeer);