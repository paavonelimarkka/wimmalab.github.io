// libs
import React from 'react';
// components
import { FaGithubSquare, FaLinkedinSquare, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/lib/fa';
// assets
import ContactUs from '../img/landingimg.jpg';
import WimmaLogo from '../img/logo/wimmalablogo.png';
import CyberTrust from '../img/logo/cyber-trust-jamk.png';
import JAMK from '../img/logo/jamk-logo.png';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';

export default class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <hr />
                    <div className="contact-container">
                        <div className="left-side">
                            <h5>Marko "Narsu" Rintamäki</h5>
                                <p>marko.rintamaki (at) jamk.fi</p>
                                <span className="team-icon">
                                    <a href="https://www.linkedin.com/in/narsuman/?ppe=1" target="_blank" rel="noopener noreferrer">
                                    <LinkedIn/>
                                    </a>
                                </span>
                                <hr />
                            <h5>Lauri Mäkinen</h5>
                            <p>lauri.makinen (at) jamk.fi</p>
                                <span className="team-icon">
                                    <a href="https://www.linkedin.com/in/lauri-m%C3%A4kinen-8aa6a311b/" target="_blank" rel="noopener noreferrer">
                                    <LinkedIn/>
                                    </a>
                                </span>
                                <hr />
                            <h5>Campus Dynamo</h5>
                            <h5>Piippukatu 2</h5>
                            <h5>40100 Jyväskylä Finland</h5>
                            <br />
                                <p>wimmalab (at) gmail.com</p>
                        </div>
                        <div className="right-side">
                            <img src={ContactUs} alt="ContactUs"></img>
                        </div>
                        <span className="arrow-up">
                            <a href="#page-top">
                                <i></i>
                            </a>
                        </span>
                    </div>
                </div>

                <div className="footer">
                    <a className="wimmalogo" href="#page-top"><img src={WimmaLogo} alt='logo'></img></a>
                    <h5>Supported by</h5>
                    <div className="supported-by">
                        <div className="supported-by-logo"><a href="http://cybertrust.fi/"><img src={CyberTrust} alt='cybertrust'/></a></div>
                        <div className="supported-by-logo"><a href="https://www.jamk.fi/en/Home/"><img src={JAMK} alt='jamk' /></a></div>
                    </div>

                    <h5>You can also find us here</h5>
                    <div className="social-links">
                        <span><a href="https://github.com/wimmalab"><FaGithubSquare /></a></span>
                        <span><a href="https://www.linkedin.com/company-beta/22308846/"><FaLinkedinSquare /></a></span>
                        <span><a href="https://www.facebook.com/wimmalab/"><FaFacebookSquare /></a></span>
                        <span><a href="https://twitter.com/wimmalab"><FaTwitterSquare /></a></span>
                        <span><a href="https://www.instagram.com/wimmalab/"><FaInstagram /></a></span>
                        <span><a href="https://www.youtube.com/channel/UCe0Ssog7DURm_aTiPO2hUFw"><FaYoutubeSquare /></a></span>
                    </div>
                </div>
            </section>
        );
    }
}
