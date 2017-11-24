import React from 'react';
import ReactDOM from 'react-dom';

require('../sass/main.scss');

import Contact from './contact.jsx';
import Partners from './partners.jsx';
import Credentials from './credentials.jsx';
import AboutUs from './aboutus.jsx';

document.addEventListener('DOMContentLoaded', function () {

    // class ErrorEmail extends React.Component {
    //     constructor(props) {
    //         super(props);

    //         this.state = {
    //             errorMessage : ''
    //         }
    //     }
        
    //     render() {
    //         return (
    //             <div>
    //                 {this.state.errorMessage}
    //             </div>
    //         )
    //     }
    // }

    class Main extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                textArea : '',
                pagePrice : 36,
                textAreaPages : 1,
                vat : 1.23,
                redactPrice : 1.5,
                meritPrice : 2,
                urgentPrice : 1.5,
                expressPrice : 2,
                inVisible : 'not-visible',
                chosenLanguage: 'angielski',
                suffix : '',
                languageGroupMultiplier: 100,
                chosenService : '',
                chosenServiceDescripion : '',
                chosenTimeMinMax : '',
                realisationTimeMin : 24,
                realisationTimeMax : 48,
                chosenServicePrice : 0,
                translationDirection : 1.2,
                email : '',
                company : '',
                nip : 1,
                street : '',
                number : 0,
                locale : 0,
                mailErrorMessage : '',
                companyErrorMessage : '',
                nipErrorMessage : '',
                streetErrorMessage : '',
                numberErrorMessage : '',
                localeErrorMessage : '',
            }
        }
        
        changeTextArea = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
                textAreaPages : (Math.floor(event.target.value.length / 1800) < 1) ? 1 : Number((event.target.value.length / 1800).toFixed(1)),
                realisationTimeMin : (Math.ceil(this.state.textAreaPages / 6 ) * 24),
                realisationTimeMax : (Math.ceil(this.state.textAreaPages / 6 ) * 24 + 24)
            })
        }
        
        setTranslationDirection = (event) => {
            this.setState({
                translationDirection : Number(event.target.value),
                suffix : (this.state.translationDirection == 1) ? '' : 'ego'
            });   // suffix jest ustawiany odwrotnie niż powinien, bo zmiana działa 'z opóźnieniem' ;)
        }

        handleLanguageChange = (event) => {
            this.setState({
                chosenLanguage : event.target.value.slice(4),
                languageGroupMultiplier : Number(event.target.value.slice(0,3)),
                inVisible : 'not-visible',

            })
        }

        calculateVat = (netPrice) => {
            return Math.floor(netPrice * this.state.vat);
        }

        handleCellClick = (event) => {
            let tempPrice, tempMinTime, tempMaxTime, tempServiceDescr;
            let tj = "tłumaczenie na "+ this.state.chosenLanguage;
            let rj = " z redakcją językową ";
            let rm = "i merytoryczną";

            switch (event.currentTarget.id) {
                case "translBasic" : 
                    tempPrice = this.translationPrice;
                    tempMinTime = this.state.realisationTimeMin+" - "+(this.state.realisationTimeMax+24);
                    tempServiceDescr = tj;
                    break;
                case "translUrgent" :
                    tempPrice = this.transUrgentPrice;
                    tempMinTime = this.state.realisationTimeMin+" - "+this.state.realisationTimeMax;
                    tempServiceDescr = tj;
                    break;
                case "translExpress" : 
                    tempPrice = this.transExpressPrice;
                    tempMinTime = this.state.realisationTimeMin;
                    tempServiceDescr = tj;
                    break;
                case "redactBasic" :
                    tempPrice = this.redactionPrice;
                    tempMinTime = this.state.realisationTimeMin+" - "+(this.state.realisationTimeMax+24);
                    tempServiceDescr = tj + rj;
                    break;
                case "redactUrgent" :
                    tempPrice = this.redactUrgentPrice;
                    tempMinTime = this.state.realisationTimeMin+" - "+this.state.realisationTimeMax;
                    tempServiceDescr = tj + rj;
                    break;
                case "redactExpress" : 
                    tempPrice = this.redactExpressPrice;
                    tempMinTime = this.state.realisationTimeMin;
                    tempServiceDescr = tj + rj;
                    break;
                case "meritBasic" :
                    tempPrice = this.meritoryPrice;
                    tempMinTime = this.state.realisationTimeMin+" - "+(this.state.realisationTimeMax+24);
                    tempServiceDescr = tj + rj + rm;
                    break;
                case "meritUrgent" :
                    tempPrice = this.meritUrgentPrice;
                    tempMinTime = this.state.realisationTimeMin+" - "+this.state.realisationTimeMax;
                    tempServiceDescr = tj + rj + rm;
                    break;
                case "meritExpress" : 
                    tempPrice = this.meritExpressPrice;
                    tempMinTime = this.state.realisationTimeMin;
                    tempServiceDescr = tj + rj + rm;
                    break;
                default: 
            }
            this.setState({
                chosenService : event.currentTarget.id,
                inVisible : '',
                chosenServicePrice : tempPrice,
                chosenTimeMinMax : tempMinTime,
                chosenServiceDescripion : tempServiceDescr,
            });
            return ;
        }

        realisationTime = (event) => {
            this.setState({
                realisationTimeMin : (Math.ceil(this.state.textAreaPages / 6 ) * 24),
                realisationTimeMax : (Math.ceil(this.state.textAreaPages / 6 ) * 24 + 24),
            })
        }

        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        onSubmit = (e) => {
            e.preventDefault;
            console.log(this.state);
            alert("dane wysłane -----")
        }
        validateEmail = () => {
            if (this.state.company.length < 4) this.setState({emailErrorMessage : "Email musi zawierać co najmniej 4 znaki"});
        }
        validateCompany = () => {
            if (this.state.company.length < 4) this.setState({companyErrorMessage : "Nazwa firmy musi zawierać co najmniej 4 znaki"});
        }
        validateNip = () => {
            if (this.state.street.length !== 10) this.setState({nipErrorMessage : "NIP musi zawierać dokładnie 10 cyfr"});
        }
        validateStreet = () => {
            if (this.state.street.length < 4) this.setState({streetErrorMessage : "Nazwa ulicy musi zawierać co najmniej 4 znaki"});
        }
        validateNumber = () => {
            if (this.state.street.length < 1) this.setState({streetErrorMessage : "Nazwa ulica musi zawierać co najmniej 1 znak"});
        }
        validateLocale = () => {
            if (this.state.street.length < 1) this.setState({streetErrorMessage : "Nazwa ulica musi zawierać co najmniej 1 znak"});
        }
        render() {
            
            this.translationPrice = Math.floor(this.state.textAreaPages * this.state.pagePrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
            this.redactionPrice = Math.floor(this.translationPrice * this.state.redactPrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
            this.meritoryPrice = Math.floor(this.translationPrice * this.state.meritPrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
            this.transUrgentPrice = Math.floor(this.translationPrice * this.state.urgentPrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
            this.redactUrgentPrice = Math.floor(this.redactionPrice * this.state.urgentPrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
            this.meritUrgentPrice = Math.floor(this.meritoryPrice * this.state.urgentPrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
            this.transExpressPrice = Math.floor(this.translationPrice * this.state.expressPrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
            this.redactExpressPrice = Math.floor(this.redactionPrice * this.state.expressPrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
            this.meritExpressPrice = Math.floor(this.meritoryPrice * this.state.expressPrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);

            return ( 
            <div>
                <section className = "section-main" > 
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
                                                <a href="#section-calculator">WYCENA ON-LINE</a>
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
                                                <br/>Twojego zadowolenia
                                            </p>
                                            <button className="main-description-button"><a href="#section-about-us" >WIĘCEJ</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className = "section-calculator" > 
                    <div className="container">
                        <div className="calculator">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="input-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="calculator-title-box">
                                                    <a name="section-calculator"><h2>WYCENA ON-LINE</h2></a>
                                                </div>
                                                <div className="calculator-text">
                                                    Wklej tekst do tłumaczenia
                                                </div>
                                                < textarea className = "calculator-textarea" name = "textArea" onChange={this.changeTextArea} value={this.state.textArea}></textarea>
                                                <div className="calculator-text-length">
                                                    Długość tekstu: <strong className="calculator-monospace">{this.state.textArea.length} znaków <br/>
                                                    to w zaokrągleniu {this.state.textAreaPages} str. </strong><span className="minimum-text">(min. 1 str.)</span>
                                                </div> 
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="language-select">
                                                    <select className="chosen-language" onChange={this.setTranslationDirection} value={this.state.select}>
                                                        <option  value="1.2">Tłumaczenie z polskiego na:</option>
                                                        <option value="1">Tłumaczenie na polski z:</option>
                                                    </select>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <select className="chosen-language" onChange={this.handleLanguageChange} value={this.state.select}>
                                                    <option value="100.angielski">angielski{this.state.suffix}</option>
                                                    <option value="100.francuski">francuski{this.state.suffix}</option>
                                                    <option value="100.niemiecki ">niemiecki{this.state.suffix}</option>
                                                    <option value="100.rosyjski ">rosyjski{this.state.suffix}</option>
                                                    <option value="110.hiszpański">hiszpański{this.state.suffix}</option>
                                                    <option value="110.ukraiński">ukraiński{this.state.suffix}</option>
                                                    <option value="110.włoski">włoski{this.state.suffix}</option>
                                                    <option value="120.białoruski">białoruski{this.state.suffix}</option >
                                                    <option value="125.czeski">czeski{this.state.suffix}</option>
                                                    <option value="125.duński">duński{this.state.suffix}</option>
                                                    <option value="125.litewski">litewski{this.state.suffix}</option >
                                                    <option value="130.łotewski">łotewski{this.state.suffix} < /option>
                                                    <option value="135.niderlandzki">niderlandzki{this.state.suffix} < /option>
                                                    <option value="130.norweski">norweski{this.state.suffix}</option>
                                                    <option value="125.portugalski">portugalski{this.state.suffix}</option>
                                                    <option value="125.szwedzki">szwedzki{this.state.suffix}</option>
                                                    <option value="125.rumuński">rumuński{this.state.suffix}</option >
                                                    <option value="135.węgierski">węgierski{this.state.suffix} < /option>
                                                    <option value="140.chiński">chiński{this.state.suffix}</option>
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
                                                        <span className="realisation-time">{ this.state.realisationTimeMin } - { this.state.realisationTimeMax } godz.</span>
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
                                                    <div className="pricing-table-transl-cell">Tłumaczenie zwykłe
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-transl-cell hover" id="translBasic" onClick={this.handleCellClick}>
                                                        <span className="price-net" id="tr-1-net">{this.translationPrice} zł netto</span>

                                                        <span className="price-with-vat" id="tr-1-br">{this.calculateVat(this.translationPrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-transl-cell hover" id="translUrgent" onClick={this.handleCellClick}>
                                                        <span className="price-net" id="tr-2-net">{this.transUrgentPrice} zł netto</span>

                                                        <span className="price-with-vat" id="tr-2-br">{this.calculateVat(this.transUrgentPrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-transl-cell hover" id="translExpress" onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.transExpressPrice} zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.transExpressPrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="pricing-table-row-redact-lang">
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-redact-cell">+ redakcja językowa
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-redact-cell hover" id="redactBasic" onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.redactionPrice} zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactionPrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-redact-cell hover" id="redactUrgent" onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.redactUrgentPrice} zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactUrgentPrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-redact-cell hover" id="redactExpress" onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.redactExpressPrice} zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactExpressPrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="pricing-table-row-redact-merit">
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-merit-cell">+ redakcja merytoryczna
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-merit-cell hover" id="meritBasic" onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.meritoryPrice} zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.meritoryPrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-merit-cell hover" id="meritUrgent" onClick={this.handleCellClick} onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.meritUrgentPrice} zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.meritUrgentPrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pricing-table-merit-cell hover" id="meritExpress" onClick={ this.handleCellClick }>
                                                        <span className="price-net">{ this.meritExpressPrice } zł netto</span>

                                                        <span className="price-with-vat">{ this.calculateVat(this.meritExpressPrice) } zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ this.state.inVisible }>
                                <div className="chosen-table">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row chosen">
                                                <div className="col-lg-3">
                                                    <div className="chosen-title">TWÓJ WYBÓR:</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="chosen-service">
                                                        <span className="medium-text">{ this.state.chosenServiceDescripion } </span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="chosen-time">
                                                        { this.state.chosenTimeMinMax } godz.<br/>
                                                        <span className="small-italic">czas realizacji</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="chosen-price">{this.state.chosenServicePrice} zł netto
                                                        <br/>
                                                        <span className="price-with-vat">{this.calculateVat(this.state.chosenServicePrice)} zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="text-explanation">
                                                Wpisz swój adres email, podaj dane Twojej firmy
                                                i wciśnij ZAMAWIAM,
                                                aby otrzymać maila z gotową fakturą pro-forma.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form
                                                className="company-data"
                                                onSubmit={this.onSubmit}>
                                                <label className="company-data-label" htmlFor="email">Podaj swój email</label>
                                                <p className="error-message">{this.state.emailErrorMessage}</p>
                                                <input
                                                    onBlur={this.validateEmail}
                                                    className="company-data-input"
                                                    name="email"
                                                    type="text"
                                                    onChange = { this.handleChange }
                                                    value = { this.state.email } />
                                                <label className="company-data-label" htmlFor="company">Podaj nazwę firmy</label>
                                                <p className="error-message">{this.state.companyErrorMessage}</p>
                                                <input
                                                    onBlur={this.validateCompany}
                                                    className="company-data-input"
                                                    name="company"
                                                    type="text"
                                                    onChange = { this.handleChange }
                                                    value = { this.state.company } />
                                                <label className="company-data-label" htmlFor="NIP">Podaj NIP firmy</label>
                                                <p className="error-message">{this.state.nipErrorMessage}</p>
                                                <input
                                                    onBlur={this.validateNip}
                                                    className="company-data-input"
                                                    name="nip"
                                                    type="number"
                                                    onChange = { this.handleChange }
                                                    value = { this.state.nip } />
                                                <label className="company-data-label" htmlFor="street">Podaj nazwę ulicy</label>
                                                <p className="error-message">{this.state.streetErrorMessage}</p>
                                                <input
                                                    onBlur={this.validateStreet}
                                                    className="company-data-input"
                                                    name="street"
                                                    type="text"
                                                    onChange = { this.handleChange }
                                                    value = {this.state.street } />
                                                <label className="company-data-label" htmlFor="number">Podaj numer domu</label>
                                                <p className="error-message">{this.state.numberErrorMessage}</p>
                                                <input
                                                    onBlur={this.validateNumber}
                                                    className="company-data-input"
                                                    name="number"
                                                    type="number"
                                                    onChange = {this.handleChange } 
                                                    value = { this.state.number } />
                                                <label className="company-data-label" htmlFor="locale">Podaj numer lokalu</label>
                                                <p className="error-message">{this.state.localeErrorMessage}</p>
                                                <input
                                                    onBlur={this.validateLocale}
                                                    className="company-data-input"
                                                    name="locale"
                                                    type="number"
                                                    onChange = {this.handleChange }
                                                    value = { this.state.locale }/>
                                                <button className="order-button">
                                                    ZAMAWIAM 
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                  
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
                <div>
                    <Main />
                    <AboutUs />
                    <Credentials />
                    <Partners />
                    <Contact />
                </div >
            )
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});