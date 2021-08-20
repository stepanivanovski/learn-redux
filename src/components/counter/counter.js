import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

import './counter.css'
import minus from './Minus.png'
import plus from './Vector.png'
import reset from './Group.png'


const Counter = ({counter, inc, dec, res}) => {
  return (
    <React.Fragment>
      <div className="counter__block">{counter}</div>
      <div className="counter__btn-wrapper">
        <button 
          className="counter__btn counter__btn_green"
          onClick={dec}>
            <img src={minus} alt="minus"/>
        </button>
        <button 
          className="counter__btn counter__btn_yellow"
          onClick={inc}>
            <img src={plus} alt="minus"/>
        </button>
        <button 
          className="counter__btn counter__btn_red"
          onClick={res}>
            <img src={reset} alt="reset"/>
        </button>
      </div>
      
    </React.Fragment>  
  )
}

function mapStateProps(state) {
  return {
    counter: state
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateProps, mapDispatchProps)(Counter);
