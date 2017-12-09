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
            chosenServiceDescription: '',
            chosenTimeMinMax: '',
            realisationTimeMin: 24,
            realisationTimeMax: 48,
            chosenServicePrice: 0,
            translationDirection: 1.2,
            email: 'aa@ww.pl',
            company: 'Firma Potrzebująca Tłumaczenia',
            nip: 1234567890,
            street: 'Językowa',
            number: 123,
            locale: 4,
            postal: '00000',
            city: 'Warszawa',
            mailErrorMessage: '',
            companyErrorMessage: '',
            nipErrorMessage: '',
            streetErrorMessage: '',
            numberErrorMessage: '',
            localeErrorMessage: '',
            postalErrorMessage: '',
            cityErrorMessage: '',
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
            realisationTimeMax: (Math.ceil(this.state.textAreaPages / 6) * 48),
            inVisible: 'not-visible'
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
        this.setState({chosenService: event.currentTarget.id, 
            inVisible: '', 
            chosenServicePrice: tempPrice, 
            chosenTimeMinMax: tempMinTime, 
            chosenServiceDescription: tempServiceDescr
        });
        return;
    }

    realisationTime = () => {
        this.setState({
            realisationTimeMin: (Math.ceil(this.state.textAreaPages / 6) * 24),
            realisationTimeMax: (Math.ceil(this.state.textAreaPages / 6) * 48)
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
        if (this.state.number.length < 1 || this.state.number == 0) {
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
    validatePostal = () => {
        if (this.state.postal.length !== 5) {
            this.setState({postalErrorMessage: "Kod pocztowy musi mieć 5 cyfr (bez innych znaków)"})
        } else 
            this.setState({postalErrorMessage: ""});
    }
    validateCity = () => {
        if (this.state.city.length < 3) {
            this.setState({cityErrorMessage: "Nazwa miasta za krótka"})
        } else 
            this.setState({cityErrorMessage: ""});
    }

    textToPDF = (today, company, companyAddress, postalCity, serviceTime, nip, chosenServiceDescription, textAreaPages, pagePrice, netPrice, grossPrice) => {

        var doc = new jsPDF();

        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.text(20, 20, 'TransLingus Biuro Tlumaczen' );
        doc.text(20, 25, 'ul. Tlumaczeniowa 23' );
        doc.text(20, 30, '12-345 Warszawa ');
        doc.text(20, 35, 'NIP: 234-45-56-123' );

        doc.text(90, 20, 'Faktura pro-forma' );
        
        doc.setFontType("normal");
        doc.text(90, 25, 'FV TL/2017/13456' );
        doc.text(90, 30, 'wystawiona dnia:' );
        doc.text(90, 35,  String(today) );

        doc.text(20, 70, 'dla:');
        doc.setFontType("bold");
        doc.text(20, 75, String(company));
        doc.text(20, 80, String(companyAddress));
        doc.text(20, 85, String(postalCity));
        doc.text(20, 90, String(nip));
        doc.text(90, 85, String(serviceTime));
        
        doc.setFontType("normal");
        doc.text(90, 70, 'usluga:');
        doc.text(90, 80, 'termin wykonania uslugi:');
        doc.text(22, 120, 'ilosc stron:');
        doc.text(52, 120, 'cena za strone:');
        doc.text(92, 120, 'cena netto:');
        doc.text(132, 120, 'cena brutto:');
        
        doc.setFontType("bold");
        doc.text(90, 75, String(chosenServiceDescription) );
        doc.text(22, 130, String(textAreaPages) );
        doc.text(52, 130, String(pagePrice) );
        doc.text(92, 130, String(netPrice) );
        doc.text(132, 130, String(grossPrice) );
        
        doc.setLineWidth(0.25);
        doc.line(20, 115, 190, 115);
        doc.line(20, 124, 190, 124);
        doc.line(20, 134, 190, 134);

        doc.line(20, 115, 20, 134);
        doc.line(50, 115, 50, 134);
        doc.line(90, 115, 90, 134);
        doc.line(130, 115, 130, 134);
        doc.line(190, 115, 190, 134);
        
        doc.line(50, 270, 160, 270);
        doc.text(105, 275, 'TransLingus Biuro Tlumaczen', null, null, 'center');
        doc.setFontType("italic");
        doc.text(105, 280, 'ul. Tlumaczeniowa 23   |   12-345 Warszawa   |   NIP: 234-45-56-123', null, null, 'center');
        alert("Dziękujemy, formularz został poprawnie wypełniony. Prosimy o zapisanie pliku PDF z fakturą proforma.");
        doc.save('TransLingus-faktura-proforma.pdf');
    };

    replaceDiacritics = (text) => {
        return text.replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C')
        .replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L')
        .replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O')
        .replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
        .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
    }

    onSubmit = (e) => {
        e.preventDefault;
        // this.setState({isEnabled : false});
        if (this.state.textArea === '') {
            alert("! nie wklejono tekstu do tłumaczenia !");
        } else if (this.state.mailErrorMessage === '' && this.state.companyErrorMessage === '' && this.state.nipErrorMessage === '' && this.state.streetErrorMessage === '' && this.state.numberErrorMessage === '' && this.state.localeErrorMessage === '' && this.state.postalErrorMessage === '' && this.state.cityErrorMessage === '') {
            var today = `${this.currentDate.getDate()}.${this.currentDate.getMonth() + 1}.${this.currentDate.getFullYear()}`;
            var companyAddress = this.state.street + ' ' + this.state.number + ' / ' + this.state.locale;
            var postalCity = this.state.postal + ' ' + this.state.city;
            var serviceTime = this.state.chosenTimeMinMax + " godz.";
            var nip = 'NIP: ' + this.state.nip;
            var pagePrice = ((this.state.chosenServicePrice / this.state.textAreaPages).toFixed(2) + ' zl');
            var netPrice = ((this.state.chosenServicePrice) + ' zl');
            var grossPrice = (this.calculateVat(this.state.chosenServicePrice) + ' zl');
            this.textToPDF(today, this.replaceDiacritics(this.state.company), this.replaceDiacritics(companyAddress), this.replaceDiacritics(postalCity), serviceTime, nip, this.replaceDiacritics(this.state.chosenServiceDescription), this.state.textAreaPages, pagePrice, netPrice, grossPrice);
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
                                                    <span className="minimum-text">{this.state.textAreaPages <= 1 
                                                    ? "(min. 1 str.)" 
                                                    : ""}
                                                    </span>
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
                                                        <span className="realisation-time">{this.state.realisationTimeMin}&nbsp;
                                                            - {this.state.realisationTimeMax + 24}&nbsp;
                                                            godz.</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-headers">
                                                        Pilny<br/>
                                                        <span className="realisation-time">{this.state.realisationTimeMin}&nbsp;
                                                            - {this.state.realisationTimeMax}&nbsp;
                                                            godz.</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="pricing-table-headers">
                                                        Ekspres<br/>
                                                        <span className="realisation-time">maks. {this.state.realisationTimeMin}&nbsp;
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
                                                        <span className="price-net" id="tr-1-net">{this.translationPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat" id="tr-1-br">{this.calculateVat(this.translationPrice)}&nbsp;
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-transl-cell hover"
                                                        id="translUrgent"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net" id="tr-2-net">{this.transUrgentPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat" id="tr-2-br">{this.calculateVat(this.transUrgentPrice)}&nbsp;
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-transl-cell hover"
                                                        id="translExpress"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.transExpressPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.transExpressPrice)}&nbsp;
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
                                                        <span className="price-net">{this.redactionPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactionPrice)}&nbsp;
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-redact-cell hover"
                                                        id="redactUrgent"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.redactUrgentPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactUrgentPrice)}&nbsp;
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-redact-cell hover"
                                                        id="redactExpress"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.redactExpressPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.redactExpressPrice)}&nbsp;
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
                                                        <span className="price-net">{this.meritoryPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.meritoryPrice)}&nbsp;
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-merit-cell hover"
                                                        id="meritUrgent"
                                                        onClick={this.handleCellClick}
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.meritUrgentPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.meritUrgentPrice)}&nbsp;
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div
                                                        className="pricing-table-merit-cell hover"
                                                        id="meritExpress"
                                                        onClick={this.handleCellClick}>
                                                        <span className="price-net">{this.meritExpressPrice}&nbsp;
                                                            zł netto</span>

                                                        <span className="price-with-vat">{this.calculateVat(this.meritExpressPrice)}&nbsp;
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
                                                        <p className="medium-text">{this.state.chosenServiceDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="chosen-time">
                                                        {this.state.chosenTimeMinMax}&nbsp;godz.<br/>
                                                        <span className="small-italic">maksymalny czas realizacji</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="chosen-price">{this.state.chosenServicePrice}&nbsp;
                                                        zł netto
                                                        <br/>
                                                        <span className="price-with-vat">{this.calculateVat(this.state.chosenServicePrice)}&nbsp;
                                                            zł z VAT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="text-explanation">
                                                Wpisz swój adres email, podaj dane Twojej firmy i wciśnij ZAMAWIAM, <br/>
                                                następnie zapisz plik z gotową fakturą pro-forma.
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

                                                <label className="company-data-label" htmlFor="postal">Podaj 5 cyfr kodu pocztowego</label>
                                                <p className="error-message">{this.state.postalErrorMessage}</p>
                                                <input
                                                    onBlur={this.validatePostal}
                                                    className="company-data-input"
                                                    name="postal"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    value={this.state.postal}/>

                                                <label className="company-data-label" htmlFor="city">Podaj nazwę miasta</label>
                                                <p className="error-message">{this.state.cityErrorMessage}</p>
                                                <input
                                                    onBlur={this.validateCity}
                                                    className="company-data-input"
                                                    name="city"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    value={this.state.city}/>


                                                <p className="order-disabled-explanation">
                                                    {this.state.textArea.length >= 100
                                                        ? ""
                                                        : "Tekst do tłumaczenia ma mniej niż 100 znaków!"}<br/> 
                                                    {this.isEnabled
                                                        ? ""
                                                        : "Proszę poprawnie wypełnić wszystkie pola formularza:"}
                                                    
                                                </p>
                                                <button
                                                    className="order-button"
                                                    disabled={!(this.isEnabled && this.state.textArea.length >= 100)}>
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


module.exports = Calculator;