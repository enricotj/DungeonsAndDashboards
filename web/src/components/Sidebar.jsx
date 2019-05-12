import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Sidebar.css';

const mapStateToProps = (state) => {
	return {
		docked: state.layout.sidebarDocked
	}
};

class Sidebar extends Component {
	render() {
		var dockWidth = this.props.docked ? 300 : 0;
		
		return (
			<aside className='Sidebar' style={{width: dockWidth}}>
				<a>Sidebar</a>
			</aside>
		);
	}
}

export default connect(
	mapStateToProps,
	null
)(Sidebar);
