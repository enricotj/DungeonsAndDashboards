import React, { Component } from 'react';

import './Content.css';

class Content extends Component {

	handleClick = (e) => {
		console.log('Toggle button clicked!');
	}

	render() {
		return (
			<div className='Content'>
				<button onClick={this.handleClick}>Toggle Sidebar</button>
			</div>
		);
	}
}

export default Content;