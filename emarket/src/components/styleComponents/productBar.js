import React, { Component, useState } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types'
import { Collapse } from 'react-collapse';
import IdfConverter from '../converter/idfConverterOriginal';
import Card from './productCardUI';
import WindowParams from '../checkBoxen/loadWindowParams';
import EASEEParams from '../checkBoxen/loadPanelParams';
import FermacellParams from '../checkBoxen/loadFermacelParams';
import img1 from '../../img/easy_panel.jpg';
import img2 from '../../img/Fermacell_panel.png';
import img3 from '../../img/HVAC_4.jpg';

export default class Products extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpened: this.props.isOpened,
    }
  }

  static propTypes = {
    isOpened: PropTypes.bool
  };

  static defaultProps = {
    isOpened: false
  };

/* onSubmit = (e) => {
  e.preventDefault();
  let arr = [];
  for (var key in this.state) {
    if(this.state[key] === true) {
      arr.push(key);
    }
  }
  let data = {
    check: arr.toString() 
  };
  axios.post('http://localhost:4000/checks/add', data)
        .then(res => console.log(res.data))
        .then("DATA ADDED!")
  } */

 
change = e =>{
  this.setState({
      [e.target.name]: e.target.value
  });
};

newSubmit = () => {
  console.log(this.state)
}


render(){
const {isOpened} = this.state;
return(
  <div className='container-fluid d-flex justify-content-center' >
    <div className='row'>
      <div className='col-md-4'>
        <Card imgsrc={img1} title="EASEE Panel" description="External panel"/>
        <EASEEParams/>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-4'>
        <Card imgsrc={img2} title="Fermacel Panel" description="External panel" />
        <FermacellParams/>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-4'>
        <Card imgsrc={img3} title="BGTEC Window" description="Smart window with the possibility to rotate"/>
        <WindowParams/>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-4'>
        <IdfConverter />
      </div>
    </div>
  </div>
  )}
}