import React from "react";
import './Mentor.css';

const Mentor  =() =>{
    return(
        <div className="container">
        <p className="mt-3">MENTOR'S</p>
        <div className="rectangle">
        <div className="p-1" style={{ marginLeft: '30px' }}>
        <div className="firstbox"></div>
        <div className="secondbox"></div>
        <div className="thirdbox"></div>
        <div className="fourthbox"></div>
        <div className="fifthbox"></div>
        </div>
        <pre className="text-body text-center h5" style={{ marginTop: '60px' }}>Mentor Name</pre>
        <pre className="text-body text-center h6">XXXXX</pre>
        <pre className="text-body text-center h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam<br/>
        consequat semper est, vitae lobortis erat commodo id.</pre>

        </div>
        </div>
    )
}

export default Mentor;