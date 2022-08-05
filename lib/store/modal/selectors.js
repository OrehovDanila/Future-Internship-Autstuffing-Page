/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const modal = state => state.modal;

export const activeModal = createSelector([modal], modal => modal.kind);
export const activeModalTitle = createSelector([modal], modal => modal.title);
export const isModalActive = createSelector([modal], modal => modal.kind !== null);
