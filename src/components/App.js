import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Signin from './Signin';
import Singup from './Signup';
import Image from './Image';

import '../css/bootstrap.min.css';
import 'tachyons';
class App extends Component {
  constructor()
  {
    super();
    this.state = {
      input:'',
      isSignIn:false,
      route:'signup'
    }
  }

  changeimg = (event) =>{
    this.setState({input:event.target.value});
  }

  onclickevent = (event) =>{
    console.log('event');
  }

  onChangeRoute = (route) => {
    if(route==='signout'){
      this.setState({isSignIn:false});      
    }else if(route==='home'){
      this.setState({isSignIn:true});
    }
    this.setState({route:route});
  }

  render() {
    const {input, isSignIn, route} = this.state;
    console.log("state sdfg "+isSignIn);
    return (<>
      <Navigation onChangeRoute={this.onChangeRoute} isSignIn={isSignIn}/>
      {route==='home'
       ?<div>
          <Home onchangeimg={this.changeimg} clickfunction={this.onclickevent}/>
          <Image img={input}/> 
        </div>
       :(
         route==='signup'
        ? <Singup onChangeRoute={this.onChangeRoute}/>
        : <Signin  onChangeRoute={this.onChangeRoute}/>
       )
      }
    </>);
  }
}

export default App;