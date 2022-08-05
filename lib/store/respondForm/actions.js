export const ActionTypes = {
	OPEN_FORM: 'respond-form/open',
	ON_SUCCESS_SEND: 'respond-form/on-success-send',
	RESET: 'respond-form/reset',
};

export const openFormArea = () => ({
	type: ActionTypes.OPEN_FORM,
});

export const onSuccessSend = () => ({
	type: ActionTypes.ON_SUCCESS_SEND,
});

export const reset = () => ({
	type: ActionTypes.RESET,
});
