import React from "react";
import './Programe.css';
import Group from '../component/assets/Group.svg'

const Programe = () => {
    return (
        <div className="d-flex mb-3 gap-4">
            <div class="p-2 flex-fill">

                <div class="cardcustom">
                    <div className="upper">
                        <p className="uprtext">With Job Placement</p>

                    </div>
                    <img class="cardimg" style={{ width: "300px", height: "300" }} src={Group} />
                    <p className="mobile">Mobile Application Developer</p>
                    <p className="course">Duration of Course</p>
                    <div>
                        <span class="rounded-1"><p className="upcoming">Upcoming Cohort</p>
                            <p className="update">Date</p>
                        </span>
                        <span class="rounded-2">
                            <p className="upcoming">Fees</p>
                            <p className="update">₹</p>
                        </span>
                    </div>
                    <div className="viewcourse">
                        <p className="job">View Course</p>
                    </div>
                </div>
            </div>


            <div class="p-2 flex-fill">

                <div class="cardcustom">
                    <div className="upper">
                        <p className="uprtext">With Job Placement</p>

                    </div>
                    <img class="cardimg" style={{ width: "300px", height: "300" }} src={Group} />
                    <p className="mobile">Mobile Application Developer</p>
                    <p className="course">Duration of Course</p>
                    <div>
                        <span class="rounded-1"><p className="upcoming">Upcoming Cohort</p>
                            <p className="update">Date</p>
                        </span>
                        <span class="rounded-2">
                            <p className="upcoming">Fees</p>
                            <p className="update">₹</p>
                        </span>
                    </div>
                    <div className="viewcourse">
                        <p className="job">View Course</p>
                    </div>
                </div>
            </div>


            <div class="p-2 flex-fill">

                <div class="cardcustom">
                    <div className="upper">
                        <p className="uprtext">With Job Placement</p>

                    </div>
                    <img class="cardimg" style={{ width: "300px", height: "300" }} src={Group} />
                    <p className="mobile">Mobile Application Developer</p>
                    <p className="course">Duration of Course</p>
                    <div>
                        <span class="rounded-1"><p className="upcoming">Upcoming Cohort</p>
                            <p className="update">Date</p>
                        </span>
                        <span class="rounded-2">
                            <p className="upcoming">Fees</p>
                            <p className="update">₹</p>
                        </span>
                    </div>
                    <div className="viewcourse">
                        <p className="job">View Course</p>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Programe;