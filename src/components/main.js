import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import {Home} from './home';
import {Story} from './story';
import {Museum} from './museum';
import {store} from "./store";
import {PhotoGallery} from "./gallery";
import '../index.css';

export class Main extends React.Component {
	render() {
		return(
			<div>
				  <main role="main" className="main_container">
				    <Switch>
				      <Route exact path='/' component={Home}/>
				      <Route path='/about' component={Story}/>
				      <Route path='/photos' component={PhotoGallery}/>
				      <Route path='/museum' component={Museum}/>
				    </Switch>
				  </main>
			</div>
			
		);
	}
};
