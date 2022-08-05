/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const indexPageCounter = state => state.indexPageCounter;

export const getTrigger = createSelector([indexPageCounter], counter => counter.trigger);

export const getPlayStatus = createSelector([indexPageCounter], counter => counter.isRunning);

export const getCount = createSelector([indexPageCounter], counter => counter.count);
