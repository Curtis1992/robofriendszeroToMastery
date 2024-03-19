import React from 'react';
import Cardlist from './cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';
 
 class App extends component {
 	constuctor() {
 		super()
 		this.state = {
 			robots: robots,
 			searchfield: ''
 		}
 	}

Searchchange (event) {
	this.setstate({searchfield: event.target.value})
					
}

render() {
	const filterrobots = this.state.robots.filter(robot => {
		return robots.name.toLowercase().includes(this.state.searchfield.toLowercase())

	})
	return (
		<div classname='tc'>
			<h1>Robofriends</h1>
			<SearchBox />
			<Cardlist robots={this.state.robots} />
		</div>
);
 	}	 
}

export default App;