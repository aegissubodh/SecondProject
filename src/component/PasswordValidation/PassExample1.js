import React, { useState } from "react";
import validator from 'validator'

const PassExample1 = () => {

    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        //console.log(value);

    }

    return (
        <div style={{
            marginLeft: '200px',
        }}>
            <pre>
                <h2>Checking Password Strength in ReactJS</h2>
                <span>Enter Password: </span><input type="password"
                    onChange={(e) => validate(e.target.value)}></input> <br />
                {errorMessage === '' ? null :
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorMessage}</span>}
                <span>Enter Confirm Password:</span><input type="password" onChange={(e) => validate(e.target.value)} />
                <br /><span style={{ fontWeight: "bold", color: 'red', marginRight: "200" }}>{errorMessage}</span>
                <button onClick={onSubmit}>Submit</button>
            </pre>
        </div>
    );
}

export default PassExample1;
