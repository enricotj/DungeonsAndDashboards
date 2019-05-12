const initialState = {
	sidebarDocked: false
}

const layout = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_SIDEBAR':
			return {
				...state,
				sidebarDocked: !state.sidebarDocked
			};

		default:
			return state;
	}
}

export default layout;