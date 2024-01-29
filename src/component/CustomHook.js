import React, { useState } from "react";


const useFormInput = (InitialValue) => {
    const [value, setValue] = useState(InitialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleFocus =(e) =>{
        console.log("i am in focus");
          e.target.style.background="yellow";
    }
    const handleblur=(e)=>{
        e.target.style.background="white";
    }   
    
    return {
        value,
        onChange: handleChange,
        onFocus:handleFocus,
        onBlur:handleblur
    }

}


const MyForm = () => {

    const username = useFormInput('');
    const password = useFormInput('')
    const handleSubmit = (e) => {
        //alert("submit is working")
        e.preventDefault();
        console.log('Username:', username.value);
        console.log('Password:', password.value);
        // Add your form submission logic here
    };



    return (
        <>
            <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input  type="text" {...username} />
      </label>
      <br />
      <label>
        Password:
        <input type="current-password" {...password} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
        </>
    )
}

export default MyForm;

// //You have to create a component for password change option.
// 1. This should have three fields
// a. old password
// b. new password
// c. confirm password
// 2. "new password" and "confirm password" should be same
// 3. Password should not be less than 8 characters
// 4. Password must containe  at least an alphabet, a number, a symbol and at least one lower & uppercase character; i.e. Welcome$1234