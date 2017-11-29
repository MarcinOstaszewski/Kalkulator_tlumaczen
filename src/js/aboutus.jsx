import React from 'react';
import ReactDOM from 'react-dom';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        return ( 
            <div>
            <section className="section-about-us" > 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="section-about-us-header">
                                        <h2 className="section-about-us-header-text" ><a name="section-about-us"><h2>O NAS</h2></a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
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
                        <div className="col-lg-1 col-md-1 col-sm-12">
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="about-us-image-div">
                                {/* <img src="img/1804_opt.jpg" alt="team-hands" className="about-us-image"/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

module.exports = AboutUs;