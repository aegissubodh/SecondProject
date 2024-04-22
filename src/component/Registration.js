import React from "react";
import './Registration.css';
import Map from '../component/assets/Map.svg';
import logo from '../component/assets/logo.svg';

const Registration = () => {
    return (
        <div className="container mt-4">
            <img src={Map} alt="logo" />
            <img className="float-start ml-5 finallogo overlay" src={logo} alt="" />
            <div className="overlay data h4">
                <p className="">ADDRESS</p>
                <p className="">PHONE NUMBER</p>
                <p className="">MAID ID</p>
            </div>
            <div className="registrationbox overlay">
                <div className="mt-3 container p-4">
                    <div style={{ borderBottom: '3px solid #AF51BB', width: '70px' }}></div>
                    <p className="text-body3 mt-3 h3" style={{ fontFamily: 'Crimson Text' }}> REGISTRATION</p>


                </div>

            </div>

        </div>
    )
}

export default Registration;