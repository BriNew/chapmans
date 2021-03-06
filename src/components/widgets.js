import React from 'react';
import './widgets.css';

export class Widgets extends React.Component {
	render() {
		return(
			<div>
			<div>
				<ul className="widget_titles content_titles">
		        	<li className="location content"><h2>Home</h2></li>
		      	</ul>
			</div>
			<div className="widget_container_container content_container_container">
		    	<div className="widget_container content_container">
				  <div className="home_greeting_container">
				  	<div className="home_greeting">
				  	<p className="home_greeting_line_1">Welcome to Chapman's Gem and Mineral Shop.</p>
				  	<p>We are open 7 days a week, 9 - 5.
				  	Come visit the #1 rated attraction in the area, and spend time in our ever expanding museum. Check out our
				  	reviews and location below. Hope to see you soon!</p> 
				  	</div>
				  </div>
				  <div className="map_and_ta">
				      <div id="TA_selfserveprop774" className="ta_widget_container_desktop">
			              <ul id="0hMMZifw6g" className="TA_links V8th9Pr6YN">
			                <li id="tr9bRR" className="VSIgkvQb">
			                  <a target="_blank" href="https://www.tripadvisor.com/">
</a>
			                </li>
			              </ul>
			          </div>
		            <script src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=774&amp;
		            locationId=2161569&amp;lang=en_US&amp;rating=true&amp;nreviews=3&amp;
		            writereviewlink=true&amp;popIdx=true&amp;iswide=false&amp;border=&amp;display_version=2"></script>
	            	<div className="map_widget_container">
				      <iframe className="map_widget" width="500px" height="374px" frameBorder="0" 
				      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJE-VJ-QsO1FQRIQFQSgU1gvc&key=AIzaSyDrWGFKHiOsKlelMMMxkl0_J_KBOCThMmU" 
				      allowFullScreen></iframe>
			      	</div>
		      	</div>
			    </div>
			</div>
			</div>
			)
	}
};