import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class ComingSoon extends Component {
	render(){
		return(
			<div>
				<TopBar />
				<Nav />

				<div className="content-wrap">
					<div className="container clearfix">

						<div className="heading-block title-center nobottomborder">
	                        <h1>Coming Soon!</h1>
	                        <span>Please check back again in a few days.</span>
	                    </div>

                    
                    	<div className="clear"></div>

	                    <div className="progress progress-striped active topmargin divcenter" style={{height:10, maxWidth:600}}>
	                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 80}}>
	                            <span className="sr-only">80% Complete</span>
	                        </div>
	                    </div>

                    	<div className="divider divider-center divider-short divider-margin"><i className="icon-time"></i></div>

                    	<div id="widget-subscribe-form-result" data-notify-type="success" data-notify-msg=""></div>
	                    <form id="widget-subscribe-form" action="include/subscribe.php" role="form" className="nobottommargin">
	                        <div className="input-group input-group-lg divcenter" style={{maxWidth:600}}>
	                            <span className="input-group-addon"><i className="icon-email2"></i></span>
	                            <input type="email" name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email" />
	                            <span className="input-group-btn">
	                                <button className="btn btn-default" type="submit">Subscribe Now</button>
	                            </span>
	                        </div>
	                    </form>
                	</div>

            	</div>
				<Footer />
			</div>

			)
	}
}

export default ComingSoon