import React from "react";
import './Footer.css';
import Transparentlogo from '../component/assets/Transparentlogo.svg';

const Footer = () => {
    return (
        <div className="container">
            <div className="footerpart mt-5">
                <div className="innerbox">
                    <img src={Transparentlogo} className="mt-3" style={{ width: "200px", height: "200" }} alt="" />
                    <p style={{ color: 'white' }}>Join Intelity community and start your<br />
                        successful career with us today! Here you <br />
                        will find experienced teachers, friendly <br />
                        atmosphere and develop yourself!</p>
                    <button style={{ fontFamily: 'Crimson Text', color: '#DADADA' }} type="button" className="btn btn-primary">Start Hiring</button>
                    <button style={{ fontFamily: 'Crimson Text', color: '#DADADA' }} type="button" class="applybtn">Apply for Course</button>

                </div>

            </div>
        </div>
    )
}

export default Footer;