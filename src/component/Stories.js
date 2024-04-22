import React from "react";
import './Stories.css';
import comma from '../component/assets/comma.svg';

const Stories =() =>{
    return(
        <div className="container">
        <p className="mt-3">SUCCESS STORIES</p>
        <div className="box mt-5">
        <img className="mx-auto d-block mt-3 img2" src ={comma} alt ="commaimg"/>
        <pre className="para h3 text-center text-white mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam<br/>
        {" "}consequat semper est, vitae lobortis erat commodo id. Aliquam<br/> 
        {" "}{" "}rutrum odio eu ex venenatis eleifend. Donec ullamcorper <br/>
         {" "}{""}{" "}{""}aliquet ipsum id consequat.</pre>
         <p className="text-center text-white h5 mt-4">Name</p>
         <p className="text-center text-white h5 mt-4">Course Name</p>
         <div className="circle">
         <span class="rounded-circle" style={{width:"75px"}}></span>
         <span class="rounded-circle" style={{width:"75px"}}></span>
         <span class="rounded-circle" style={{width:"75px"}}></span>
         <span class="rounded-circle" style={{width:"75px"}}></span>
         <span class="rounded-circle" style={{width:"75px"}}></span>
         <span class="rounded-circle" style={{width:"75px"}}></span>
         </div>
         
            
        </div>
        </div>
    
    )
}

export default Stories;