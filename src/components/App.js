import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withLastLocation } from "react-router-last-location";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import getOKR from "../services/getOKR";
import AllyOKR from "./AllyOKR";
import DropDownSelection from "./DropDownSelection";
import DetailModal from "./DetailModal";


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getOKR();
  }

  render() {
    return (
      <div className="lg-container" style={{ padding: '60px' }}>
        <div className='row'>
          <div className='col-10 col-md-8'>
            <AllyOKR />
          </div>
          <div className='col-4 col-md-4'>
            <DropDownSelection />
          </div>
        </div>
        <Switch>
          <Route path="/okr-detail" exact={true} component={DetailModal} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOKR: bindActionCreators(
      getOKR,
      dispatch
    )
  };
};

export default withLastLocation(
  connect(null, mapDispatchToProps)(App)
);
