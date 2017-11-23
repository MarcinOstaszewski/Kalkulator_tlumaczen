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

import Info from './info.jsx';
import Calculator from './calculator.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class Main extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                email : '',
                company : '',
                nip : 1,
                street : '',
                number : 0,
                locale : 0,
                textArea : '',
                pagePrice : 46,
                textAreaPages : 1,
                vat : 1.23,
                redactPrice : 1.5,
                meritPrice : 2,
                urgentPrice : 1.5,
                expressPrice : 2,
                chosenService : '',
                inVisible : 'not-visible',
                realisationTimeMin : 24,
                realisationTimeMax : 48,
            }
        }
        
        handleChange = (event) => {
            console.log(event.target.value);
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    
        changeTextArea = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
                textAreaPages : (Math.floor(event.target.value.length / 1800) < 1) ? 1 : Number((event.target.value.length / 1800).toFixed(1)),
                realisationTimeMin : (Math.ceil(this.state.textAreaPages / 6 ) * 24),
                realisationTimeMax : (Math.ceil(this.state.textAreaPages / 6 ) * 24 + 24),
            })
        }
        
        calculateVat = (netPrice) => {
            return Math.floor(netPrice * this.state.vat);
        }

        handleCellClick = (event) => {
            console.log(event.target.id);
            this.setState({
                chosenService : event.target.id,
                inVisible : ''
            });
            return "tralata";
        }

        translationDirection = (event) => {
            console.log("Tranlacji kierunek wybrany");
            console.log(event.target);
        }
        realisationTime = (event) => {
            this.setState({
                realisationTimeMin : (Math.ceil(this.state.textAreaPages / 6 ) * 24),
                realisationTimeMax : (Math.ceil(this.state.textAreaPages / 6 ) * 24 + 24),
            })
        }

        render() {
            let translationPrice = Math.floor(this.state.textAreaPages * this.state.pagePrice);
            let redactionPrice = Math.floor(translationPrice * this.state.redactPrice);
            let meritoryPrice = Math.floor(translationPrice * this.state.meritPrice);
            let transUrgentPrice = Math.floor(translationPrice * this.state.urgentPrice);
            let redactUrgentPrice = Math.floor(redactionPrice * this.state.urgentPrice);
            let meritUrgentPrice = Math.floor(meritoryPrice * this.state.urgentPrice);
            let transExpressPrice = Math.floor(translationPrice * this.state.expressPrice);
            let redactExpressPrice = Math.floor(redactionPrice * this.state.expressPrice);
            let meritExpressPrice = Math.floor(meritoryPrice * this.state.expressPrice);

            // let realisationTime = (Math.ceil(this.state.textAreaPages / 6 ) * 24);

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
                                                        <button className="main-description-button"><a href="#section-about-us" >WIĘCEJ</a></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


        < section className = "section-calculator" > 
            <div className="container">
                <div className="calculator">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="input-area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="calculator-title-box">
                                            <a name="section-calculator">WYCENA ON-LINE</a>
                                        </div>
                                        <div className="calculator-text">
                                            Wklej tekst do tłumaczenia
                                        </div>
                                        < textarea className = "calculator-textarea" name = "textArea" onChange={this.changeTextArea} value={this.state.textArea}></textarea>
                                        <div className="calculator-text-length">
                                            Długość tekstu: <strong className="calculator-monospace">{this.state.textArea.length} znaków <br/>
                                                 to w zaokrągleniu {this.state.textAreaPages} str. </strong><span class="minimum-text">(min. 1 str.)</span>
                                        </div>
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="language-select">
                                            <form action="this.translationDirection">
                                                <input type="radio" name="from-polish" value="from-polish" />Z polskiego na: 
                                                <input type="radio" name="to-polish" value="to-polish" />Na polski z: 
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <select className="chosen-language">
                                            <option value="angielski">angielski</option>
                                            <option value="francuski">francuski</option>
                                            <option value="niemiecki ">niemiecki</option>
                                            <option value="rosyjski ">rosyjski</option>
                                            <option value="wloski">włoski</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className="col-lg-8 ">
                            <div className="pricing-table ">
                                <div className="row">
                                    <div className="pricing-table-row-header">
                                        <div className="col-lg-3">
                                            <div className="pricing-table-headers">
                                                Termin:<br/>
                                                <span className="realisation-time">czas realizacji</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-headers">
                                                Zwykły<br/>
                                                <span className="realisation-time">{ this.state.realisationTimeMin } - { this.state.realisationTimeMax + 24} godz.</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-headers">
                                                Pilny<br/>
                                                <span className="realisation-time">{this.state.realisationTimeMin } - { this.state.realisationTimeMax } godz.</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-headers">
                                                Ekspres<br/>
                                                <span className="realisation-time">maks. { this.state.realisationTimeMin } godz. </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="pricing-table-row-transl">
                                        <div className="col-lg-3">
                                            <div className="pricing-table-transl-cell">Tłumaczenie zwykłe</div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-transl-cell hover" id="translBasic" onClick={this.handleCellClick}>
                                                <span className="price-net" id="tr-1-net">{translationPrice} zł netto</span>

                                                <span className="price-with-vat" id="tr-1-br">{this.calculateVat(translationPrice)} zł z VAT</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-transl-cell hover" id="translUrgent" onClick={this.handleCellClick}>
                                                <span className="price-net" id="tr-2-net">{transUrgentPrice} zł netto</span>

                                                <span className="price-with-vat" id="tr-2-br">{this.calculateVat(transUrgentPrice)} zł z VAT</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-transl-cell hover" id="translExpress" onClick={this.handleCellClick}>
                                                <span className="price-net">{transExpressPrice} zł netto</span>

                                                <span className="price-with-vat">{this.calculateVat(transExpressPrice)} zł z VAT</span>
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
                                            <div className="pricing-table-redact-cell hover" id="redactBasic" onClick={this.handleCellClick}>
                                                <span className="price-net">{redactionPrice} zł netto</span>

                                                <span className="price-with-vat">{this.calculateVat(redactionPrice)} zł z VAT</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-redact-cell hover" id="redactUrgent" onClick={this.handleCellClick}>
                                                <span className="price-net">{redactUrgentPrice} zł netto</span>

                                                <span className="price-with-vat">{this.calculateVat(redactUrgentPrice)} zł z VAT</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-redact-cell hover" id="redactExpress" onClick={this.handleCellClick}>
                                                <span className="price-net">{redactExpressPrice} zł netto</span>

                                                <span className="price-with-vat">{this.calculateVat(redactExpressPrice)} zł z VAT</span>
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
                                            <div className="pricing-table-merit-cell hover" id="meritBasic" onClick={this.handleCellClick}>
                                                <span className="price-net">{meritoryPrice} zł netto</span>

                                                <span className="price-with-vat">{this.calculateVat(meritoryPrice)} zł z VAT</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-merit-cell hover" id="meritUrgent" onClick={this.handleCellClick} onClick={this.handleCellClick}>
                                                <span className="price-net">{meritUrgentPrice} zł netto</span>

                                                <span className="price-with-vat">{this.calculateVat(meritUrgentPrice)} zł z VAT</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="pricing-table-merit-cell hover" id="meritExpress" onClick={this.handleCellClick}>
                                                <span className="price-net">{meritExpressPrice} zł netto</span>

                                                <span className="price-with-vat">{this.calculateVat(meritExpressPrice)} zł z VAT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={this.state.inVisible}>
                                <div className="chosen-table">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="text-explanation">
                                                Wpisz swój adres email, podaj dane Twojej firmy
                                                <br/>
                                                i wciśnij ZAMAWIAM,
                                                <br/>
                                                aby otrzymać maila z gotową fakturą pro-forma.
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row chosen">
                                                <div className="col-lg-3">
                                                    <div className="chosen-title">TWÓJ WYBÓR:</div>
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
                                                        <br/>{ this.state.realisationTimeMin } - { this.state.realisationTimeMax } godz.</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="chosen-price">{translationPrice} zł netto
                                                        <br/>
                                                        <span className="price-with-vat">{this.calculateVat(translationPrice)} zł z VAT</span>
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
                                                    onChange = { this.handleChange }
                                                    value = { this.state.email } />
                                                <label className="company-data-label" for="company">Podaj nazwę firmy</label>
                                                <input
                                                    className="company-data-input"
                                                    name="company"
                                                    type="text"
                                                    onChange = { this.handleChange }
                                                    value = { this.state.company } />
                                                <label className="company-data-label" for="NIP">Podaj NIP firmy</label>
                                                <input
                                                    className="company-data-input"
                                                    name="nip"
                                                    type="number"
                                                    onChange = { this.handleChange }
                                                    value = { this.state.nip } />
                                                <label className="company-data-label" for="street">Podaj nazwę ulicy</label>
                                                <input
                                                    className="company-data-input"
                                                    name="street"
                                                    type="text"
                                                    onChange = { this.handleChange }
                                                    value = {this.state.street } />
                                                <label className="company-data-label" for="number">Podaj numer domu</label>
                                                <input
                                                    className="company-data-input"
                                                    name="number"
                                                    type="number"
                                                    onChange = {this.handleChange } 
                                                    value = { this.state.number } />
                                                <label className="company-data-label" for="locale">Podaj numer lokalu</label>
                                                <input
                                                    className="company-data-input"
                                                    name="locale"
                                                    type="number"
                                                    onChange = {this.handleChange }
                                                    value = { this.state.locale }/>
                                            </form>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="order-button">
                                                ZAMAWIAM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            < /div>
                        </div>
                    </div>
                </div>
            </div>
        < /section>



        < section className = "section-about-us" > <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-about-us-header">
                                <h2 className="section-about-us-header-text" ><a name="section-about-us">O NAS</a></h2>
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
        </div> < /section>

                        <section className="section-credentials">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="section-credentials-header">
                                                    <h2 className="section-credentials-header-text"><a name="section-credentials">REFERENCJE</a></h2 > 
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
                                                    <a name="section-partners">ZAUFALI NAM</a>
                                                </h2 > 
                                            </div> 
                                        < /div>
                                    </div > 
                                </div> 
                            < div className = "col-lg-2" > <img src="img/FAKELOGO01.png" alt="fake-logo-1"/> 
                        < /div>
                        <div className="col-lg-2">
                            <img src="img/FAKELOGO02.png " alt=" fake - logo - 2 "/>
                        < /div>
                        < div className = "col-lg-2" >
                            < img src = "img/FAKELOGO03.png " alt = " fake - logo - 3 " />
                        < /div>
                        <div className="col-lg-2">
                        < img src = "img/FAKELOGO01.png " alt = " fake - logo - 1 " />
                        < /div>
                        < div className = "col-lg-2" >
                        < img src = "img/FAKELOGO02.png " alt = " fake - logo - 2 " />
                        < /div>
                        <div className="col-lg-2">
                        < img src = "img/FAKELOGO03.png " alt = " fake - logo - 3 " />
                        < /div>
                    < /div > 
                </div > 
            < /section> 
            < section className = "section-contact" > 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="section-contact-header">
                                        <h2 className="section-contact-header-text"><a name="section-contact">KONTAKT</a></h2 > 
                                        </div> 
                                    < /div>
                                </div > 
                            </div> 
                        < div className = "col-lg-4" > 
                            <div className="section-contact-main-text">
                                <p className="addres">TransLingus Biuro Tłumaczeń</p>
                                <p className="addres">ul. Tłumaczeniowa 23</p>
                                <p className="addres">12-345 Warszawa</p>
                                <p className="addres">NIP:234-45-56-123</p>

                            </div> 
                        < /div>
                            <div className="col-lg-2">
                                <div className="section-contact-main-text">
                                    <ul>
                                        <li>
                                            <a className="contact-links" href="#section-about-us">O NAS</a> </li> 
                                            < li > <a className="contact-links" href="#section-credentials">REFERENCJE</a> < /li>
                                        <li>
                                            <a className="contact-links" href="#section-partners">ZAUFALI NAM</a> </li> 
                                            < li > <a className="contact-links" href="#section-contact">KONTAKT</a> < /li>

                                    </ul > 
                                </div> 
                            < /div>
                            <div className="col-lg-3">
                                <div className="section-contact-main-text">
                                    <p className="pricing"><a className="contact-links" href="#section-calculator">WYCENA ON-LINE</a></p > 
                                </div> 
                            < /div>
                            <div className="col-lg-3">
                                <div className="section-contact-main-text">
                                    <p className="copy">copyrights TransLingus</p > <p className="copy">code and design</p> < p className = "copy" > by MarcinOstaszewski < /p>
                                </div > 
                            </div>
                        < /div>
                    </div >
                < /section>

            </div>
            )
        }
    } 
    

    class App extends React.Component {
        render() {
            return (
                <div>
                    <Main />
                    {/* <Calculator />
                    <Info /> */}
                </div >
            )
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});