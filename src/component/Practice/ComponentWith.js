import React from "react";

class ComponentWith extends React.Component{
    constructor(props){
        super(props)
            this.state={
                count:0
            }
        
    }

    increment = ()=>{
        this.setState({count:this.state.count+1})
    }

    decrement = ()=>{
        this.setState({count:this.state.count-1})
    }

    render(){
        return(<>
        <div class="d-flex justify-content-start my-4">
            <div>this is our class component</div>
            <button  onClick={this.increment}>+</button>
            <h2>{this.state.count}</h2>
            <button onClick={this.decrement}>-</button>
            </div>
        
            </>
        )
    }
   
}
export default ComponentWith