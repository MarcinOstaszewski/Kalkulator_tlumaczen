import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

require('../sass/main.scss');

document.addEventListener('DOMContentLoaded', function () {

    class Main extends React.Component {
        render() {
            return (
                <div>
< section className = "section-main" > 
    <div className="hero">
    <div className="main-nav">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="main-logo">
                        TRANS
                        <br/>LINGUS
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="main-menu">
                            <div className="menu-list">
                                <ul>
                                    <li>
                                        <a href="#">O NAS</a>
                                    </li>
                                    <li>
                                        <a href="#">REFERENCJE</a>
                                    </li>
                                    <li>
                                        <a href="#">ZAUFALI NAM</a>
                                    </li>
                                    <li>
                                        <a href="#">KONTAKT</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-calc">
                                WYCENA ON-LINE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="main-header">
                            <h1>O NAS</h1>
                        </div>
                    </div>
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-6">
                        <div className="main-description">
                            <p className="main-description-paragraph">Tworzymy tłumaczenia
                                <br/>od 12 lat!
                                    <br/>Nasze doświadczenie
                                        <br/>to gwarancja
                                            <br/>Twojego zadowolenia</p>
                                            <button className="main-description-button">WIĘCEJ</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-calculator">
                    <div className="container">
                        <div className="calculator">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="input-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="calculator-title-box">WYCENA ON-LINE</div>
                                                <div className="calculator-text">Wklej tekst do tłumaczenia</div>
                                                <textarea className="calculator-textarea" value="Eniam dolor sit amet...">Eniam dolor sit amet...</textarea>
                                                <div className="calculator-text-length">Długość tekstu:
                                                    <strong className="calculator-monospace">
                                                        6800 znaków = 4 s.
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="language-select">
                                                    <div className="calculator-from-language">
                                                        Z języka:
                                                    </div>
                                                    <select className="language from">
                                                        <option value=" niemiecki ">niemiecki</option>
                                                        <option value="polski ">polski</option>
                                                        <option value="rosyjski ">rosyjski</option>
                                                        <option value="urundi ">urundi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 ">
                                                <div className="language-select">
                                                    <div className="calculator-to-language ">
                                                        Na język:
                                                    </div>
                                                    <select className="language to ">
                                                        <option value="polski ">polski</option>
                                                        <option value="niemiecki ">niemiecki</option>
                                                        <option value="rosyjski ">rosyjski</option>
                                                        <option value="urundi ">urundi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="pricing-table ">
                                        <div className="row">
                                            <div className="pricing-table-row-header">
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-headers">Termin:</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-headers">Zwykły</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-headers">Pilny</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-headers">Ekspres</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="pricing-table-row-transl">
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-transl-cell">Tłumaczenie</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-transl-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-transl-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-transl-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="pricing-table-row-redact-lang">
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-redact-cell">+ redakcja językowa</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-redact-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-redact-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-redact-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="pricing-table-row-redact-merit">
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-merit-cell">+ redakcja merytoryczna</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-merit-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-merit-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-merit-cell">
                                                        <span className="price-net">158 zł netto</span>

                                                        <span className="price-with-vat">207 zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chosen-table">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="text-explanation">
                                                    Wpisz swój adres email, wciśnij ZAMAWIAM,
                                                    <br/>
                                                        następnie podaj dane Twojej firmy,
                                                        <br/>
                                                            aby otrzymać gotową fakturę pro-forma.
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">

                                                        <div className="row chosen">
                                                            <div className="col-lg-3">
                                                                <div className="chosen-title">WYBIERAM</div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="chosen-service">
                                                                    <span className="medium-text">tłumaczenie językowe
                                                                        <br/>z redakcją językową</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="chosen-time">
                                                                        <span className="small-italic">czas realizacji</span>
                                                                        <br/>24-48 godzin</div>
                                                                    </div>
                                                                    <div className="col-lg-3">
                                                                        <div className="chosen-price">158 zł netto
                                                                            <br/>
                                                                                <span className="price-with-vat">207 zł z VAT</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <form
                                                                        className="company-data"
                                                                        action="file:///home/marcin/Pulpit/CodersLab/ZajeciaModuly/Biuro_tlumaczen/mock_ups/default-action">
                                                                        <label className="company-data-label" for="email">Podaj swój email</label>
                                                                        <input
                                                                            className="company-data-input"
                                                                            name="email"
                                                                            type="text"
                                                                            placeholder="Twój email"/>
                                                                            <label className="company-data-label" for="company">Podaj nazwę firmy</label>
                                                                            <input
                                                                                className="company-data-input"
                                                                                name="company"
                                                                                type="text"
                                                                                placeholder="nazwa firmy"/>
                                                                                <label className="company-data-label" for="NIP">Podaj NIP firmy</label>
                                                                                <input
                                                                                    className="company-data-input"
                                                                                    name="NIP"
                                                                                    type="text"
                                                                                    placeholder="NIP firmy"/>
                                                                                    <label className="company-data-label" for="street">Podaj nazwę ulicy</label>
                                                                                    <input
                                                                                        className="company-data-input"
                                                                                        name="street"
                                                                                        type="text"
                                                                                        placeholder="Nazwa ulicy"/>
                                                                                    <label className="company-data-label" for="number">Podaj numer domu</label>
                                                                                    <input
                                                                                        className="company-data-input"
                                                                                        name="number"
                                                                                        type="number"
                                                                                        placeholder="Numer domu"/>
                                                                                    <label className="company-data-label" for="locale">Podaj numer lokalu</label>
                                                                                    <input
                                                                                        className="company-data-input"
                                                                                        name="locale"
                                                                                        type="number"
                                                                                        placeholder="Numer lokalu"/>
                                                                                    </form>
                                                                                    </div>
                                                                                        <div className="col-lg-12">
                                                                                            <div className="order-button">
                                                                                                ZAMAWIAM
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>

                                                            <section className="section-about-us">
                                                                <div className="container">
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
                                                            </section>

                                                            <section className="section-credentials">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className="row">
                                                                                <div className="col-lg-4">
                                                                                    <div className="section-credentials-header">
                                                                                        <h2 className="section-credentials-header-text">REFERENCJE</h2>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
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
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>

                                                            <section className="section-partners">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className="row">
                                                                                <div className="col-lg-4">
                                                                                    <div className="section-partners-header">
                                                                                        <h2 className="section-partners-header-text">ZAUFALI NAM</h2>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <img src="img/FAKE LOGO 1_bl-noBG-01.png" alt="fake-logo-1"/></div>
                                                                            <div className="col-lg-2">
                                                                                <img src="img/FAKE LOGO 2.png" alt="fake-logo-1"/></div>
                                                                                <div className="col-lg-2">
                                                                                    <img src="img/FAKE LOGO 3-01.png" alt="fake-logo-1"/></div>
                                                                                    <div className="col-lg-2">
                                                                                        <img src="img/FAKE LOGO 1_bl-noBG-01.png" alt="fake-logo-1"/></div>
                                                                                        <div className="col-lg-2">
                                                                                            <img src="img/FAKE LOGO 2.png" alt="fake-logo-1"/></div>
                                                                                            <div className="col-lg-2">
                                                                                                <img src="img/FAKE LOGO 3-01.png" alt="fake-logo-1"/></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>

                                                                                    <section className="section-contact">
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
                                                                                    </section>
                </div>
            )
        }
    }

    class App extends React.Component {
        render() {
            return (
                <Main />
            )
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});