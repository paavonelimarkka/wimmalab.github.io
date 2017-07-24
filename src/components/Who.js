// libs
import React from 'react';
// assets
import Laurimakinen from "../img/profile/Lauri_makinen.jpg";
import Narsu from "../img/profile/Marko_rintamaki.jpg";
import Paavonelimarkka from "../img/profile/Paavo_nelimarkka.jpg";
import Pasihyytiainen from "../img/profile/Pasi_hyytiainen.jpg";
import Juhopekki from "../img/profile/Juho_pekki.jpg";
// components
import LinkedIn from 'react-icons/lib/fa/linkedin-square';

export default class Who extends React.Component {
    render() {
        return (
            <div className="who-content">
                <h2>Our Team</h2>
                <hr />
                <div className="team-container">
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Narsu} alt={'narsu'} />
                        </div>
                        <div className="team-text">
                            <h5>Marko "Narsu" Rintamäki</h5>
                            <p>Product Owner</p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/narsuman/?ppe=1" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Laurimakinen} alt={'Lauri Mäkinen'} />
                        </div>
                        <div className="team-text">
                            <h5>Lauri Mäkinen</h5>
                            <p>Head Coach</p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/lauri-m%C3%A4kinen-8aa6a311b/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Paavonelimarkka} alt={'paavo-nelimarkka'} />
                        </div>
                        <div className="team-text">
                            <h5>Paavo Nelimarkka</h5>
                            <p>Team Coach</p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/paavonelimarkka/?ppe=1" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Juhopekki} alt={'Juho Pekki'} />
                        </div>
                        <div className="team-text">
                            <h5>Juho Pekki</h5>
                            <p>Team Coach</p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/juho-pekki-bb3801144/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                    <div className="team-member">
                        <div className="team-header">
                            <img src={Pasihyytiainen} alt={'Pasi Hyytiäinen'} />
                        </div>
                        <div className="team-text">
                            <h5>Pasi Hyytiäinen</h5>
                            <p>Team Coach</p>
                            <span className="team-icon"><a href="https://www.linkedin.com/in/pasihyytiainenfi/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
