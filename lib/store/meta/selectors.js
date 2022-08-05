/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const meta = state => state.meta;

export const media = createSelector(meta, meta => meta.media);

export const screen = createSelector(meta, meta => meta.screen);

export const initialized = createSelector(meta, meta => meta.initialized);

export const isBannerClosed = createSelector(meta, meta => meta.bannerClosed);
