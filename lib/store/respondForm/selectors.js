/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const respondForm = state => state.respondForm;

export const isAreaOpen = createSelector([respondForm], respondForm => respondForm.isFormAreaOpen);
export const isSentSuccesfully = createSelector([respondForm], respondForm => respondForm.isSentSuccesfully);
