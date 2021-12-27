import './App.css';
import './components/compStyle.css';
import Funcomp from './components/function';
import Clscomp from './components/class';
import React from 'react';

class Newcomp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      funcComp : false,
       classComp : false
    }
}

render(){
  return (
    <div className="App">
      <h1 className="heading"> Styling using Function and class Component</h1>
      <button className="button" onClick={()=>{this.setState({funcComp: !this.state.funcComp})}}>To see styling in functional components</button>
      <button className="button1" onClick={()=>{this.setState({classComp: !this.state.classComp})}}>To see styling in class components</button>
      <br></br>
      {this.state.funcComp===true
      ?
      <Funcomp/>
      :
      null}
      {this.state.classComp===true
      ?
      <Clscomp/>
      :
      null}
    </div>
  );
}
}

export default Newcomp
