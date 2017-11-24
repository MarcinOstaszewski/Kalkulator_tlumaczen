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
            <section className = "section-about-us" > 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="section-about-us-header">
                                        <h2 className="section-about-us-header-text" ><a name="section-about-us"><h2>O NAS</h2></a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
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
        )
    }
}

module.exports = AboutUs;