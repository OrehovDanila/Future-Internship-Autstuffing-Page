export const ActionTypes = {
	OPEN_FORM: 'feedback-form/open',
	ON_SUCCESS_SEND: 'feedback-form/on-success-send',
	RESET: 'feedback-form/reset',
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
