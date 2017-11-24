import React from 'react';
import ReactDOM from 'react-dom';

class Partners extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        return ( 
            <section className="section-partners">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="section-partners-header">
                                        <h2 className="section-partners-header-text">
                                            <a name="section-partners"><h2>ZAUFALI NAM</h2></a>
                                        </h2 > 
                                    </div> 
                                </div>
                            </div > 
                        </div> 
                        < div className = "col-lg-2" > 
                            <img src="img/FAKELOGO01.png" alt="fake-logo-1"/> 
                        </div>
                        <div className="col-lg-2">
                            <img src="img/FAKELOGO02.png " alt=" fake - logo - 2 "/>
                        </div>
                        < div className = "col-lg-2" >
                            < img src = "img/FAKELOGO03.png " alt = " fake - logo - 3 " />
                        </div>
                        <div className="col-lg-2">
                        < img src = "img/FAKELOGO01.png " alt = " fake - logo - 1 " />
                        </div>
                        < div className = "col-lg-2" >
                        < img src = "img/FAKELOGO02.png " alt = " fake - logo - 2 " />
                        </div>
                        <div className="col-lg-2">
                        <img src = "img/FAKELOGO03.png " alt = " fake - logo - 3 " />
                        </div>
                    </div > 
                </div > 
            </section> 
        )
    }
}

module.exports = Partners;