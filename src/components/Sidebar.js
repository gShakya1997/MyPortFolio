import React from "react";
import dp from "../assets/dp.jpg"
import resume from "../assets/resume.png"
import fb from "../assets/fb.png"
import instagram from "../assets/instagram.png"
import github from "../assets/github.png"
import downloadResume from "../assets/resume2020.pdf"

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:gunjan.shakya3@gmail.com")
    }
    return (
        <div className="app_sidebar">
            <img src={dp} alt="Profile picture" className="sidebar_display_picture" />
            <div className="sidebar_name"> Gunjan Shakya </div>
            <div className="sidebar_about_me"> 
            A  passionate developer with knowledge of programming language. I am quick learner and flexible enough to work in team to achieve certain goal. 
            </div>
            <div className="sidebar_item sidebar_title"> Android Developer </div>
            <a href={downloadResume} download="resume2020.pdf">
                <div className="sidebar_item">
                    <img src={resume} alt="Resume" className="sidebar_icon" />Resume
                </div>
            </a>
            <figure className="sidebar_social-icon my-2">
                <a href=""><img src={fb} alt="Facebook" className="sidebar_icon mr-3"/></a>
                <a href=""><img src={instagram} alt="Instagram" className="sidebar_icon mr-3"/></a>
                <a href=""><img src={github} alt="Github" className="sidebar_icon"/></a>
            </figure>
            <div className="contact">
                <div className="sidebar_item">gunjan.shakya3@gmail.com</div>
                <div className="sidebar_item">+9779860915753</div>
            </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email me</div>
        </div>
    );
}

export default Sidebar;