import React from 'react';
import ReactDOM from 'react-dom';

export class Calculator extends React.Component {
    render() {
        return (
            <div>
                <section className = "section-calculator" > <div className="container">
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
        </div>
        )
    }
}
