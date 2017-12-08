import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textArea: '',
            pagePrice: 36,
            textAreaPages: 1,
            vat: 1.23,
            redactPrice: 1.5,
            meritPrice: 2,
            urgentPrice: 1.5,
            expressPrice: 2,
            inVisible: 'not-visible',
            chosenLanguage: 'angielski',
            suffix: '',
            languageGroupMultiplier: 100,
            chosenService: '',
            chosenServiceDescripion: '',
            chosenTimeMinMax: '',
            realisationTimeMin: 24,
            realisationTimeMax: 48,
            chosenServicePrice: 0,
            translationDirection: 1.2,
            email: '',
            company: '',
            nip: '',
            street: '',
            number: 0,
            locale: 0,
            mailErrorMessage: '',
            companyErrorMessage: '',
            nipErrorMessage: '',
            streetErrorMessage: '',
            numberErrorMessage: '',
            localeErrorMessage: '',
            displayMobileMenuList: 0
        }
    }

    showMobileMenuList = () => {
        if (this.state.displayMobileMenuList === 0) {
            document
                .getElementById('menu-list')
                .classList
                .add("visible");
            this.setState({displayMobileMenuList: 1})
        } else {
            document
                .getElementById('menu-list')
                .classList
                .remove("visible");
            this.setState({displayMobileMenuList: 0})
        }
    }

    changeTextArea = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            textAreaPages: (Math.floor(event.target.value.length / 1800) < 1)
                ? 1
                : Number((event.target.value.length / 1800).toFixed(1)),
            realisationTimeMin: (Math.ceil(this.state.textAreaPages / 6) * 24),
            realisationTimeMax: (Math.ceil(this.state.textAreaPages / 6) * 24 + 24)
        })
    }

    setTranslationDirection = (event) => {
        this.setState({
            translationDirection: Number(event.target.value),
            suffix: (this.state.translationDirection == 1)
                ? ''
                : 'ego'
        }); // suffix jest ustawiany odwrotnie niż powinien, bo zmiana działa 'z opóźnieniem' ;)
    }

    handleLanguageChange = (event) => {
        this.setState({
            chosenLanguage: event
                .target
                .value
                .slice(4),
            languageGroupMultiplier: Number(event.target.value.slice(0, 3)),
            inVisible: 'not-visible'
        })
    }

    calculateVat = (netPrice) => {
        return Math.floor(netPrice * this.state.vat);
    }

    handleCellClick = (event) => {
        let tempPrice,
            tempMinTime,
            tempMaxTime,
            tempServiceDescr;
        let tj = "tłumaczenie na " + this.state.chosenLanguage;
        let rj = " z redakcją językową ";
        let rm = "i merytoryczną";

        switch (event.currentTarget.id) {
            case "translBasic":
                tempPrice = this.translationPrice;
                tempMinTime = this.state.realisationTimeMin + " - " + (this.state.realisationTimeMax + 24);
                tempServiceDescr = tj;
                break;
            case "translUrgent":
                tempPrice = this.transUrgentPrice;
                tempMinTime = this.state.realisationTimeMin + " - " + this.state.realisationTimeMax;
                tempServiceDescr = tj;
                break;
            case "translExpress":
                tempPrice = this.transExpressPrice;
                tempMinTime = this.state.realisationTimeMin;
                tempServiceDescr = tj;
                break;
            case "redactBasic":
                tempPrice = this.redactionPrice;
                tempMinTime = this.state.realisationTimeMin + " - " + (this.state.realisationTimeMax + 24);
                tempServiceDescr = tj + rj;
                break;
            case "redactUrgent":
                tempPrice = this.redactUrgentPrice;
                tempMinTime = this.state.realisationTimeMin + " - " + this.state.realisationTimeMax;
                tempServiceDescr = tj + rj;
                break;
            case "redactExpress":
                tempPrice = this.redactExpressPrice;
                tempMinTime = this.state.realisationTimeMin;
                tempServiceDescr = tj + rj;
                break;
            case "meritBasic":
                tempPrice = this.meritoryPrice;
                tempMinTime = this.state.realisationTimeMin + " - " + (this.state.realisationTimeMax + 24);
                tempServiceDescr = tj + rj + rm;
                break;
            case "meritUrgent":
                tempPrice = this.meritUrgentPrice;
                tempMinTime = this.state.realisationTimeMin + " - " + this.state.realisationTimeMax;
                tempServiceDescr = tj + rj + rm;
                break;
            case "meritExpress":
                tempPrice = this.meritExpressPrice;
                tempMinTime = this.state.realisationTimeMin;
                tempServiceDescr = tj + rj + rm;
                break;
            default:
        }
        this.setState({chosenService: event.currentTarget.id, inVisible: '', chosenServicePrice: tempPrice, chosenTimeMinMax: tempMinTime, chosenServiceDescripion: tempServiceDescr});
        return;
    }

    realisationTime = () => {
        this.setState({
            realisationTimeMin: (Math.ceil(this.state.textAreaPages / 6) * 24),
            realisationTimeMax: (Math.ceil(this.state.textAreaPages / 6) * 24 + 24)
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateEmail = () => {
        if (this.state.email.length < 4) {
            this.setState({emailErrorMessage: "Email musi zawierać co najmniej 4 znaki"})
        } else {
            this.setState({emailErrorMessage: ""})
        }
    }
    validateCompany = () => {
        if (this.state.company.length < 4) {
            this.setState({companyErrorMessage: "Nazwa firmy musi zawierać co najmniej 4 znaki"})
        } else 
            this.setState({companyErrorMessage: ""});
        ;
    }
    validateNip = () => {
        if (this.state.nip.length !== 10) {
            this.setState({nipErrorMessage: "NIP musi zawierać dokładnie 10 cyfr"})
        } else 
            this.setState({nipErrorMessage: ""});
        }
    
    validateStreet = () => {
        if (this.state.street.length < 4) {
            this.setState({streetErrorMessage: "Nazwa ulicy musi zawierać co najmniej 4 znaki"})
        } else 
            this.setState({streetErrorMessage: ""});
    }

    validateNumber = () => {
        if (this.state.number.length < 1 || this.state.number === 0) {
            this.setState({numberErrorMessage: "Niepoprawny numer domu"});
        } else 
            this.setState({numberErrorMessage: ""});
    }

    validateLocale = () => {
        if (this.state.locale.length < 1 || this.state.locale === 0) {
            this.setState({localeErrorMessage: "Niepoprawny numer lokalu"})
        } else 
            this.setState({localeErrorMessage: ""});
    }
    
    textToPDF() {

        var doc = new jsPDF();

        doc.setFont("helvetica");
        doc.setFontType("normal");
        doc.setFontSize(12);
        doc.text(10, 30, 'TransLingus Biuro Tłumaczeń');
        doc.text(10, 40, 'ul. Tłumaczeniowa 23');
        doc.text(10, 50, '12-345 Warszawa');
        doc.text(10, 60, 'NIP: 234-45-56-123');

        doc.save('faktury-proforma_TransLingus.pdf');
    };


    onSubmit = (e) => {
        e.preventDefault;
        console.log(this.isEnabled);
        if (this.state.textArea === '') {
            alert("nie wklejono tekstu do tłumaczenia");
        } else if (this.state.mailErrorMessage === '' && this.state.companyErrorMessage === '' && this.state.nipErrorMessage === '' && this.state.streetErrorMessage === '' && this.state.numberErrorMessage === '' && this.state.localeErrorMessage === '') {
            this.textToPDF();
            alert("Dziękujemy, formularz został poprawnie wypełniony - prosimy o zapisanie faktury proforma.");
        }
    }

    render() {
        (function () {
            window.addEventListener("resize", actualResizeHandler, false);
            function actualResizeHandler() {
                if (window.innerWidth > 720) {
                    document
                        .getElementById('menu-list')
                        .classList
                        .remove("visible");
                }
            }
        }());

        this.translationPrice = Math.floor(this.state.textAreaPages * this.state.pagePrice * this.state.languageGroupMultiplier / 100 * this.state.translationDirection);
        this.redactionPrice = Math.floor(this.translationPrice * this.state.redactPrice);
        this.meritoryPrice = Math.floor(this.translationPrice * this.state.meritPrice);
        this.transUrgentPrice = Math.floor(this.translationPrice * this.state.urgentPrice);
        this.redactUrgentPrice = Math.floor(this.redactionPrice * this.state.urgentPrice);
        this.meritUrgentPrice = Math.floor(this.meritoryPrice * this.state.urgentPrice);
        this.transExpressPrice = Math.floor(this.translationPrice * this.state.expressPrice);
        this.redactExpressPrice = Math.floor(this.redactionPrice * this.state.expressPrice);
        this.meritExpressPrice = Math.floor(this.meritoryPrice * this.state.expressPrice);
        this.isEnabled = this.state.email.length > 3 && this.state.company.length > 3 && this.state.nip.length === 10 && this.state.street.length > 3 && (Number(this.state.number) > 0) && this.state.locale > 0;
        this.currentDate = new Date();
        return (
            <div>
                <section className="section-calculator">
                    <div className="container">
                        <div className="calculator">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="input-area">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="calculator-title-box">
                                                    <a name="section-calculator">
                                                        <h2>WYCENA ON-LINE</h2>
                                                    </a>
                                                </div>
                                                <div className="calculator-text">
                                                    Wklej tekst do tłumaczenia
                                                </div>
                                                <textarea
                                                    className="calculator-textarea"
                                                    name="textArea"
                                                    onChange={this.changeTextArea}
                                                    value={this.state.textArea}></textarea>
                                                <div className="calculator-text-length">
                                                    Długość tekstu:&nbsp;
                                                    <strong className="calculator-monospace">
                                                        {this.state.textArea.length}
                                                        &nbsp;znaków<br/>
                                                        po zaokrągleniu&nbsp;{this.state.textAreaPages}
                                                        &nbsp;str.&nbsp;
                                                    </strong>
                                                    <span className="minimum-text">
                                                        (min. 1 str.)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="language-select">
                                                    <select
                                                        className="chosen-language"
                                                        onChange={this.setTranslationDirection}
                                                        value={this.state.select}>
                                                        <option value="1.2">Tłumaczenie z polskiego na:</option>
                                                        <option value="1">Tłumaczenie na polski z:</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <select
                                                    className="chosen-language"
                                                    onChange={this.handleLanguageChange}
                                                    value={this.state.select}>
                                                    <option value="100.angielski">angielski{this.state.suffix}</option>
                                                    <option value="100.francuski">francuski{this.state.suffix}</option>
                                                    <option value="100.niemiecki ">niemiecki{this.state.suffix}</option>
                                                    <option value="100.rosyjski ">rosyjski{this.state.suffix}</option>
                                                    <option value="110.hiszpański">hiszpański{this.state.suffix}</option>
                                                    <option value="110.ukraiński">ukraiński{this.state.suffix}</option>
                                                    <option value="110.włoski">włoski{this.state.suffix}</option>
                                                    <option value="120.białoruski">białoruski{this.state.suffix}</option>
                                                    <option value="125.czeski">czeski{this.state.suffix}</option>
                                                    <option value="125.duński">duński{this.state.suffix}</option>
                                                    <option value="125.litewski">litewski{this.state.suffix}</option>
                                                    <option value="130.łotewski">łotewski{this.state.suffix}</option>
                                                    <option value="135.niderlandzki">niderlandzki{this.state.suffix}</option>
                                                    <option value="130.norweski">norweski{this.state.suffix}</option>
                                                    <option value="125.portugalski">portugalski{this.state.suffix}</option>
                                                    <option value="125.szwedzki">szwedzki{this.state.suffix}</option>
                                                    <option value="125.rumuński">rumuński{this.state.suffix}</option>
                                                    <option value="135.węgierski">węgierski{this.state.suffix}</option>
                                                    <option value="140.chiński">chiński{this.state.suffix}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="pricing-table ">
                                        <div className="row">
                                            <div className="pricing-table-row-header">
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-headers">
                                                        Termin:<br/>
                                                        <span className="realisation-time">czas realizacji</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-headers">
                                                        Zwykły<br/>
                                                        <span className="realisation-time">{this.state.realisationTimeMin}
                                                            - {this.state.realisationTimeMax + 24}
                                                            godz.</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-headers">
                                                        Pilny<br/>
                                                        <span className="realisation-time">{this.state.realisationTimeMin}
                                                            - {this.state.realisationTimeMax}
                                                            godz.</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-headers">
                                                        Ekspres<br/>
                                                        <span className="realisation-time">maks. {this.state.realisationTimeMin}
                                                            godz.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="pricing-table-row-transl">
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-transl-cell">Tłumaczenie zwykłe
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-transl-cell hover"
                                                        id="translBasic"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net" id="tr-1-net">{this.translationPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat" id="tr-1-br">{this.calculateVat(this.translationPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-transl-cell hover"
                                                        id="translUrgent"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net" id="tr-2-net">{this.transUrgentPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat" id="tr-2-br">{this.calculateVat(this.transUrgentPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-transl-cell hover"
                                                        id="translExpress"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.transExpressPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.transExpressPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="pricing-table-row-redact-lang">
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-redact-cell">+ redakcja językowa
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-redact-cell hover"
                                                        id="redactBasic"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.redactionPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactionPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-redact-cell hover"
                                                        id="redactUrgent"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.redactUrgentPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactUrgentPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-redact-cell hover"
                                                        id="redactExpress"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.redactExpressPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactExpressPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="pricing-table-row-redact-merit">
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-merit-cell">+ redakcja merytoryczna
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-merit-cell hover"
                                                        id="meritBasic"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.meritoryPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.meritoryPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-merit-cell hover"
                                                        id="meritUrgent"
                                                        onClick={this.handleCellClick}
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.meritUrgentPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.meritUrgentPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-merit-cell hover"
                                                        id="meritExpress"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.meritExpressPrice}
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.meritExpressPrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.inVisible}>
                                <div className="chosen-table">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="row chosen">
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="chosen-title">TWÓJ WYBÓR:</div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="chosen-service">
                                                        <p className="medium-text">{this.state.chosenServiceDescripion}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="chosen-time">
                                                        {this.state.chosenTimeMinMax}
                                                        godz.<br/>
                                                        <span className="small-italic">czas realizacji</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="chosen-price">{this.state.chosenServicePrice}
                                                        zł netto
                                                        <br/>
                                                        <span className="price-with-vat">{this.calculateVat(this.state.chosenServicePrice)}
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="text-explanation">
                                                Wpisz swój adres email, podaj dane Twojej firmy i wciśnij ZAMAWIAM, <br/>aby otrzymać
                                                maila z gotową fakturą pro-forma.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <form className="company-data" onSubmit={this.onSubmit}>
                                                <label className="company-data-label" htmlFor="email">Podaj swój email</label>
                                                <p className="error-message">{this.state.emailErrorMessage}</p>
                                                <input
                                                    required
                                                    onBlur={this.validateEmail}
                                                    className="company-data-input"
                                                    name="email"
                                                    type="email"
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                                                <label className="company-data-label" htmlFor="company">Podaj nazwę firmy</label>
                                                <p className="error-message">{this.state.companyErrorMessage}</p>
                                                <input
                                                    required
                                                    onBlur={this.validateCompany}
                                                    className="company-data-input"
                                                    name="company"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    value={this.state.company}/>
                                                <label className="company-data-label" htmlFor="NIP">Podaj NIP firmy</label>
                                                <p className="error-message">{this.state.nipErrorMessage}</p>
                                                <input
                                                    required
                                                    onBlur={this.validateNip}
                                                    className="company-data-input"
                                                    name="nip"
                                                    type="number"
                                                    onChange={this.handleChange}
                                                    value={this.state.nip}/>
                                                <label className="company-data-label" htmlFor="street">Podaj nazwę ulicy</label>
                                                <p className="error-message">{this.state.streetErrorMessage}</p>
                                                <input
                                                    required
                                                    onBlur={this.validateStreet}
                                                    className="company-data-input"
                                                    name="street"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    value={this.state.street}/>
                                                <label className="company-data-label" htmlFor="number">Podaj numer domu</label>
                                                <p className="error-message">{this.state.numberErrorMessage}</p>
                                                <input
                                                    required
                                                    onBlur={this.validateNumber}
                                                    className="company-data-input"
                                                    name="number"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    value={this.state.number}/>
                                                <label className="company-data-label" htmlFor="locale">Podaj numer lokalu</label>
                                                <p className="error-message">{this.state.localeErrorMessage}</p>
                                                <input
                                                    onBlur={this.validateLocale}
                                                    className="company-data-input"
                                                    name="locale"
                                                    type="number"
                                                    onChange={this.handleChange}
                                                    value={this.state.locale}/>
                                                <p className="order-disabled-explanation">
                                                    {this.state.textArea.length >= 100
                                                        ? ""
                                                        : "Wklej tekst do tłumaczenia - min. 100 znaków."}<br/> {this.isEnabled
                                                        ? ""
                                                        : "Wypełnij poprawnie wszystkie pola formularza."}
                                                </p>
                                                <button
                                                    className="order-button"
                                                    disabled={!(this.isEnabled && this.state.textArea.length >= 100)}
                                                    onClick={this.textToPDF}>
                                                    ZAMAWIAM
                                                </button>
                                            </form>
                                            {/* <p className="invoice-info">
                                                poniżej wzór faktury proforma do wysłania mailem
                                            </p> */}
                                        </div>
                                    </div>

                                    {/* <div className="invoice-page">
                                        <div className="stretcher">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="invoice-header">
                                                        <div className="margin">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                    <div className="company-data">
                                                                        <b>TransLingus Biuro Tłumaczeń</b><br/>
                                                                        ul. Tłumaczeniowa 23<br/>
                                                                        12-345 Warszawa<br/>
                                                                        NIP: 234-45-56-123<br/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                    <div className="logo"></div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                    <div className="invoice">
                                                                        <b>FAKTURA PROFORMA</b><br/>
                                                                        FV TL/2017/13456<br/>
                                                                        wystawiona: {this
                                                                            .currentDate
                                                                            .getDate()}.{this
                                                                            .currentDate
                                                                            .getMonth() + 1}.{this
                                                                            .currentDate
                                                                            .getFullYear()}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="invoice-main">
                                                        <div className="margin">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                    <div className="client-data">
                                                                        dla:<br/>
                                                                        <b>{this.state.company.length === 0
                                                                                ? "...podaj nazwę firmy..."
                                                                                : this.state.company}</b><br/>
                                                                        <b>{this.state.street.length === 0
                                                                                ? "...podaj nazwę ulicy..."
                                                                                : this.state.street} {this.state.number}
                                                                            lok. {this.state.locale}</b><br/>
                                                                        <b>NIP: {this.state.nip.length !== 10
                                                                                ? "...podaj NIP (10 cyfr)..."
                                                                                : this.state.nip}</b>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                    <div className="service-data">
                                                                        Usługa:<br/>
                                                                        <b>{this.state.chosenServiceDescripion}</b><br/>
                                                                        ilość stron:
                                                                        <b>{this.state.textAreaPages}</b><br/>
                                                                        cena za stronę:
                                                                        <b>{this.state.pagePrice}
                                                                            zł</b>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                    <div className="service-prices">
                                                                        Cena netto:<br/>
                                                                        <b>{this.state.chosenServicePrice}
                                                                            zł</b><br/>
                                                                        Cena brutto:<br/>
                                                                        <b>{this.calculateVat(this.state.chosenServicePrice)}
                                                                            zł</b><br/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="invoice-footer">
                                                        <div className="margin">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                                    <b>TransLingus Biuro Tłumaczeń</b><br/>ul. Tłumaczeniowa | 23 12-345 Warszawa | NIP: 234-45-56-123
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


module.exports = Calculator;