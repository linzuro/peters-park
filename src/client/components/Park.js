import React, { Component } from 'react';
import { fetchCats } from '../store/cats';

export default class Park extends Component {

  constructor() {
    super();
    this.state = {
      // your state here
    }
  }
  componentDidMount(){
    console.log("hi")
    fetchCats()
  }

  render() {
    return (
      <div>
      </div>
    );

  }
}
