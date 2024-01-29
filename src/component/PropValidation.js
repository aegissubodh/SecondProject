 import React from "react";
 import PropTypes from "prop-types";
 
 function MyComponent({name,age,isStudent}){
    return(<>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <p>isStudent:{isStudent}</p>
    </>

    )
}

MyComponent.propTypes = {
    name: PropTypes.string.isRequired, // String is required
    age: PropTypes.number.isRequired, // Number is required
    isStudent: PropTypes.bool, // Boolean is optional
  };

   export default function PropValidation(){
    return(
        <MyComponent name ={"praveen"} age ={30}/>
    )
  }