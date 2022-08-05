/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const user = state => state.user;

export const token = createSelector(user, user => user.token);
export const isAuthenticated = createSelector(user, user => user.token !== null);
