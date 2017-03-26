import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getBarTypes from '../actions/barTypeActions';

class BarTypeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barType: this.props.barType
    };
    // this.props.getBarTypes();
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    if (event.option !== this.state.barType) {
      this.setState({ barType: event.option });
    }
  }

  render() {
    const options = this.props.barTypeOptions
      .map(opt => <option value="test" >{ opt }</option>);

    return (
      <form>
        <select
          value={this.state.barType}
          onChange={this.changeHandler}
          placeholder="select the type of establishment"
        >
          { options }
        </select>
      </form>
    );
  }
}

BarTypeDropdown.defaultProps = {
  barType: 'bar/pub',
  barTypeOptions: [
    'bar/pub',
    'trendy bar',
    'dive bar',
    'sports bar',
    'trendy restaurant',
    'trashy restaurant',
    'nightclub',
    'adult bar'
  ]
};

BarTypeDropdown.propTypes = {
  barType: React.PropTypes.string,
  barTypeOptions: React.PropTypes.array
};


function mapStateToProps(state) {
  return {
    barType: state.barType,
    barTypeOptions: state.barTypes
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBarTypes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BarTypeDropdown);