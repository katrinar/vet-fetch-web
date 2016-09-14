import React, { Component } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class HomeContainer extends Component {
    constructor(props, context){
        super(props, context)
    }

    render(){
        return(
         <div>
            
            <Nav />

            <section id="page-title">
                <div className="container clearfix">
                    <h1>Welcome, {this.props.currentUser.username}</h1>
                    
                </div>
            </section>

            <div className="section notopmargin nobottommargin">
                <div className="container clearfix">

                      <div id="portfolio" className="portfolio-1 clearfix">

                        <article className="portfolio-item pf-media pf-icons clearfix">
                            <div className="portfolio-image">
                                <img src="/images/iphone-on-desk-2.png" alt="Pet Dashboard" /> 
                            </div>
                            <div className="portfolio-desc">
                                <h3><a href="/pets">Pet Dashboard</a></h3>
                                <ul className="iconlist">
                                    <li><i className="icon-ok"></i>Register Pet</li>
                                    <li><i className="icon-ok"></i>My Pets</li>
                                </ul>
                            </div>
                        </article>

                         <article className="portfolio-item pf-media pf-icons clearfix">
                            <div className="portfolio-image">
                                <img src="/images/writing.png" alt="Vet Insurance" />
                            </div>
                            <div className="portfolio-desc">
                                <h3><a href="/vets">Vet Search</a></h3>
                                <ul className="iconlist">
                                    <li><i className="icon-ok"></i>Find Vets</li>
                                    <li><i className="icon-ok"></i>Coming Soon: Bookmarked Vets</li>
                                </ul>
                            </div>
                        </article>

                         <article className="portfolio-item pf-media pf-icons clearfix">
                            <div className="portfolio-image">
                                <img src="/images/woman-at-desk.png" alt="Pet Insurance" />
                            </div>
                            <div className="portfolio-desc">
                                <h3><a href="/insurance">Pet Insurance</a></h3>
                                <ul className="iconlist">
                                    <li><i className="icon-ok"></i>Coming Soon: Insurance 101</li>
                                    <li><i className="icon-ok"></i>Coming Soon: Find a Plan for your Pet</li>
                                </ul>
                            </div>
                        </article>
                    </div>    

                </div>
            </div>

            <Footer />
        </div>
        )
    }
}

export default HomeContainer