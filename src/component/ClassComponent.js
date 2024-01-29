import React from "react";

class Classcomponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }
  increment =() =>{
    this.state({count:this.state.count +1});
  }
  render(){
    return(<>
      <div></div>
      <button  onClick ={this.increment}className="counter">+</button>
      <button className="counter">-</button>
      <h2>{this.state.count}</h2>
      </>
    )
   
  }
}

export default Classcomponent;