import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSidebar } from '../actions/LayoutActions';

import './Content.css';

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSidebar: () => dispatch(toggleSidebar)
	}
};

class Content extends Component {

	handleClick = (e) => {
		this.props.toggleSidebar();
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

export default connect(
	null,
	mapDispatchToProps
)(Content);
