import kinds from './kinds';

export const ActionTypes = {
	OPEN_MODAL: 'modal/open',
	CLOSE_MODAL: 'modal/close',
};

export const openModal = payload => ({
	type: ActionTypes.OPEN_MODAL,
	payload,
});

export const openFeedbackModal = (title = 'modal.feedback') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.FEEDBACK, title },
});

export const openSignInModal = (title = 'modal.signin') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.AUTH, title },
});

export const openSignUpModal = (title = 'modal.signup') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.SIGNUP, title },
});

export const openRecoverPasswordModal = (title = 'modal.recover') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.RECOVER, title },
});

export const openChangePasswordModal = (title = 'modal.recover') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.CHANGEPASSWORD, title },
});

export const openActionsModal = (title = 'modal.actions') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.ACTIONS, title },
});

export const openTechnicalSupportServices = (title = 'modal.techsupport-services') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.SUPPORT, title },
});

export const openDesignSupportServices = (title = 'modal.design-support-services') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.DESIGNSUPPORT, title },
});

export const openUIDesignServices = (title = 'modal.ui-design-services') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.UIDESIGN, title },
});

export const openBitrixFeatures = (title = 'modal.bitrix-features') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.BITRIXFEATURES, title },
});

export const openRespondModal = (title = 'modal.respond') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.RESPOND, title },
});

export const openCreateReviewModal = (title = 'modal.create-review') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.CREATEREVIEW, title },
});

export const openStuffCardModal = (title = 'modal.stuff-card') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.STUFFCARD, title }
});

export const openRequestModal = (title = 'modal.request') => ({
	type: ActionTypes.OPEN_MODAL,
	payload: { kind: kinds.REQUEST, title }
});

export const closeModal = payload => ({
	type: ActionTypes.CLOSE_MODAL,
	payload,
});
