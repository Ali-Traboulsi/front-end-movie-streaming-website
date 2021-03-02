import React from 'react';
import './footer.modules.css'

let Footer =()=>{
    return(
        <div className = 'footer-wrapper'>
            <p className = 'footer-top'><a href='#'>Questions? Contact us.</a></p>
            <ul className = 'footer-links row'>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">FAQ</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Help Center</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Account</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Media Center</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Investor Relations</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Jobs</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Ways to Watch</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Terms of Use</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Privacy</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Cookie Preferences</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Corporate Information</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Contact Us</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Speed Test</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Legal Notices</a></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><a href="#">Netflix Originals</a></li>
            </ul>
            <p className = 'footer-country'>Hasan Awwad Cinema</p>
        </div>
    )
}

export default Footer;

