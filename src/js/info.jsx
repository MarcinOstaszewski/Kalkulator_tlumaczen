import React from 'react';
import ReactDOM from 'react-dom';

export class Info extends React.Component {
        render() {
            return (
                <div>
                    < section className = "section-about-us" > <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="section-about-us-header">
                                            <h2 className="section-about-us-header-text">O NAS</h2>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="section-about-us-main-text">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptate
                                        quisquam quis, fugiat porro velit itaque doloremque a at nulla quas fugit
                                        impedit! Quas sunt similique deserunt fugiat fuga corrupti! Lorem, ipsum dolor
                                        sit amet consectetur adipisicing elit. Officia, voluptate quisquam quis, fugiat
                                        porro velit itaque doloremque a at nulla quas fugit impedit! Quas sunt similique
                                        deserunt fugiat fuga corrupti! Lorem, ipsum dolor sit amet consectetur
                                        adipisicing Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <img src="img/1804_opt.jpg" alt="team-hands" className="about-us-image"/>
                            </div>
                        </div>
                    </div> 
                < /section>

                <section className="section-credentials">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="section-credentials-header">
                                            <h2 className="section-credentials-header-text">REFERENCJE</h2 > 
                                        </div> 
                                    < /div>
                                </div > 
                            </div> 
                            < div className = "col-lg-12" > 
                                <div className="section-credentials-main-text">
                                    <p className="quote">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Officia, voluptate quisquam quis, fugiat porro velit itaque doloremque. Officia,
                                        voluptate quisquam quis, fugiat porro velit itaque doloremque a at...</p>
                                    <p className="company">Firmus Concretnus</p>
                                    <p className="quote">At nulla quas fugit impedit! Cras sit amet consectetur
                                        adipisicing elit. Quas sunt similique deserunt fugiat fuga corrupti! Lorem,
                                        ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <p className="company">Aliud Corporationis</p>
                                </div> 
                            < /div>
                        </div > 
                    </div> 
                < /section>

                <section className="section-partners">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="section-partners-header">
                                            <h2 className="section-partners-header-text">
                                                ZAUFALI NAM
                                            </h2 > 
                                        </div>
                                    < /div>
                                </div > 
                            </div> 
                            < div className = "col-lg-2" > 
                                <img src="img/FAKE-LOGO-1-bl-noBG-01.png" alt="fake-logo-1"/>
                            < /div>
                            <div className="col-lg-2">
                                <img src="img/FAKE_LOGO_2.png" alt=" fake - logo - 2 "/>
                            </div>
                            < div className = "col-lg-2" >
                                < img src = "img/FAKE-LOGO-3-01.png" alt = "fake-logo-3" />
                            < /div>
                            <div className="col-lg-2">
                                < img src = "img/FAKE-LOGO-1-bl-noBG-01.png " alt = "fake-logo-1" />
                            < /div>
                            < div className = "col-lg-2" >
                                <img src="img/FAKE LOGO 2.png" alt="fake-logo-1"/>
                            < /div>
                            <div className="col-lg-2">
                                < img src = "img/FAKE-LOGO-3-01.png" alt = "fake-logo-3 " />
                            </div>
                        < /div>
                </div > 
    </section> 
    < section className = "section-contact" > 
    <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-4">
                    <div className="section-contact-header">
                        <h2 className="section-contact-header-text">KONTAKT</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="section-contact-main-text">
                <p className="addres">TransLingus Biuro Tłumaczeń</p>
                <p className="addres">ul. Tłumaczeniowa 23</p>
                <p className="addres">12-345 Warszawa</p>
                <p className="addres">NIP:234-45-56-123</p>

            </div>
        </div>
        <div className="col-lg-2">
            <div className="section-contact-main-text">
                <ul>
                    <li>
                        <a className="contact-links" href="#">O NAS</a>
                    </li>
                    <li>
                        <a className="contact-links" href="#">REFERENCJE</a>
                    </li>
                    <li>
                        <a className="contact-links" href="#">ZAUFALI NAM</a>
                    </li>
                    <li>
                        <a className="contact-links" href="#">KONTAKT</a>
                    </li>

                </ul>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="section-contact-main-text">
                <p className="pricing">WYCENA ON-LINE</p>

            </div>
        </div>
        <div className="col-lg-3">
            <div className="section-contact-main-text">
                <p className="copy">copyrights TransLingus</p>
                <p className="copy">code and design</p>
                <p className="copy">by MarcinOstaszewski</p>
            </div>
        </div>
    </div>
</div> 
< /section>
</div>
                )
    }
}


