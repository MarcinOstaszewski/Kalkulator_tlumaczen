import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        return ( 
            <section className="section-contact" > 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="section-contact-header">
                                        <h2 className="section-contact-header-text header-font">
                                            <a name="section-contact"><h2>KONTAKT</h2></a>
                                        </h2> 
                                    </div> 
                                </div>
                            </div> 
                        </div> 
                    </div> 
                    <div className="row">
                        <div className = "col-lg-4 col-md-4 col-sm-5" > 
                            <div className="section-contact-main-text">
                                <p className="addres">TransLingus Biuro Tłumaczeń</p>
                                <p className="addres">ul. Tłumaczeniowa 23</p>
                                <p className="addres">12-345 Warszawa</p>
                                <p className="addres">NIP: 234-45-56-123</p>
                                <p className="addres">mob. 634-333-555</p>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3">
                            <div className="section-contact-main-text">
                                <ul>
                                    <li>
                                        <a className="contact-links" href="#section-calculator">WYCENA ON-LINE</a>
                                    </li>
                                    <li>
                                        <a className="contact-links" href="#section-about-us">O NAS</a> 
                                    </li> 
                                    <li>
                                        <a className="contact-links" href="#section-credentials">REFERENCJE</a> 
                                    </li>
                                    <li>
                                        <a className="contact-links" href="#section-partners">ZAUFALI NAM</a>
                                        </li> 
                                    <li>
                                        <a className="contact-links" href="#section-contact">KONTAKT</a>
                                    </li>
                                </ul> 
                            </div> 
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="section-contact-main-text">
                                <p className="copy">copyrights TransLingus</p> 
                                <p className="copy">code and design</p> 
                                <p className="copy">by <a className="contact-links" href="https://github.com/MarcinOstaszewski"><span className="bold">MarcinOstaszewski</span></a></p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Contact;