import React from "react";

 function Square(props){
    const {color} = props;

    return(
        <div style={{width:"100px", height:"100px", backgroundColor:color}}/>
    )

 }
 function SquareText(props){
    const {color} = props;

    return(
        <div style={{color:color}}>Praveen</div>
    )

 }

 const WithColours =(WrappedComponent,color)=>{

        // Returns a new functional component with additional props
    return (props) => {

        // Passes additional props to the WrappedComponent
               return <WrappedComponent {...props} color={color}/>
            }
        }
    //using the HOC

    const ColorSquare =WithColours(Square,"pink");
    const ColorSquarText = WithColours(SquareText,"blue");
 
    export default function HOC(){
       return(
        <div style={{marginLeft:"700px"}}>
        <Square color="red"/>  {/* Regular Square */}
        <ColorSquare/>  {/* Square enhanced with the withColor HOC */}
        <ColorSquarText/>
    </div>
       )
    }
