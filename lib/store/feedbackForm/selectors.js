/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const feedbackForm = state => state.feedbackForm;

export const isAreaOpen = createSelector([feedbackForm], feedbackForm => feedbackForm.isFormAreaOpen);
export const isSentSuccesfully = createSelector([feedbackForm], feedbackForm => feedbackForm.isSentSuccesfully);
