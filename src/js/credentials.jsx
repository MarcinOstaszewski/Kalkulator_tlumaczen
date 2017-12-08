import React from 'react';


class Credentials extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        return ( 
            <section className="section-credentials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="section-credentials-header">
                                        <h2 className="section-credentials-header-text">
                                            <a name="section-credentials"><h2>REFERENCJE</h2></a>
                                        </h2> 
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                    <div className="row">
                        <div className = "col-lg-12 col-lg-12 col-md-12 col-sm-12" >
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
        )
    }
}

module.exports = Credentials;