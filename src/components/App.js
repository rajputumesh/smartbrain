import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Image from './Image';

import '../css/bootstrap.min.css';
import 'tachyons';
class App extends Component {
  constructor()
  {
    super();
      this.state = {
        'img':''
      }
  }

  changeimg = (event) =>{
    this.setState({'img':event.target.value});
    console.log(event.target.value);
  }

  onclickevent = (event) =>{
    this.changeimg();
    console.log('on click');
  }

  render() {
    const {img} = this.state;
    return (<>
      <Navigation />
      <Home onchangeimg={this.changeimg} clickfunction={this.onclickevent}/>
      <Image img={img}/>
    </>);
  }
}

export default App;