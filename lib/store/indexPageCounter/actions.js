export const ActionTypes = {
	TICK: 'indexPageCounter/tick',
	TOGGLE: 'indexPageCounter/toggle',
	INCREMENT: 'indexPageCounter/increment',
	RESET: 'indexPageCounter/reset',
};

export const tick = () => ({
	type: ActionTypes.TICK,
});

export const toggle = bool => ({
	type: ActionTypes.TOGGLE,
	payload: bool,
});

export const increment = () => ({
	type: ActionTypes.INCREMENT,
});

export const reset = () => ({
	type: ActionTypes.RESET,
});
