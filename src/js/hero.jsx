import React from 'react';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <section className = "section-main" >
                <div className="hero">
                    <div className="main-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    <div className="main-logo">
                                        TRANS
                                        <br/>LINGUS
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10">
                                    <div className="main-menu">
                                        <div className="burger" onClick={this.showMobileMenuList}>
                                            <div className="burger-bar"></div>
                                            <div className="burger-bar"></div>
                                            <div className="burger-bar"></div>
                                        </div>
                                        <div className="menu-list" id="menu-list">
                                            <ul>
                                                <li>
                                                    <a href="#section-about-us">O NAS</a>
                                                </li>
                                                <li>
                                                    <a href="#section-credentials">REFERENCJE</a>
                                                </li>
                                                <li>
                                                    <a href="#section-partners">ZAUFALI NAM</a>
                                                </li>
                                                <li>
                                                    <a href="#section-contact">KONTAKT</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu-calc">
                                            <a href="#section-calculator">WYCENA<br/>ON-LINE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-info">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-5">
                                    <div className="main-header header-font">
                                        <h1>O NAS</h1>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-9">
                                    &nbsp;
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="main-description">
                                        <p className="main-description-paragraph">Tworzymy tłumaczenia
                                            <br/>od ponad 12 lat!
                                            <br/>Nasze doświadczenie
                                            <br/>to gwarancja
                                            <br/>Twojego zadowolenia
                                        </p>
                                        <button className="main-description-button">
                                            <a href="#section-about-us">WIĘCEJ</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        )
    }
}

module.exports = Hero;