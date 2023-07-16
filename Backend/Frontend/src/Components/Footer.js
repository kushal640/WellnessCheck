import React, { Component } from 'react'

import '../App.css'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                <div className="footer-newsletter">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h4><center>Health World</center></h4>
                    <p>Your health is our priority - trust us to deliver accurate and reliable checkup results.</p>
                    <p>We are committed to promoting preventive healthcare and early detection of potential health issues.</p>
                    <p>Your journey to better health starts here - let us guide you every step of the way.</p>
                    <p>Privacy and confidentiality are of utmost importance to us - your data is secure with us.</p>
                </div>
                <div className="col-lg-6">
                    <form action="" method="post"> <input type="email" name="email"/><input type="submit" value="Subscribe"/> </form>
                </div>
            </div>
        </div>
    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
