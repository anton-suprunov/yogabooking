import { createSelector } from 'reselect';
import { NAME } from './consts';

export const getUsers = state => {
  return state[NAME].allIds.map(id => state[NAME].byId[id]);
};

export const userCreated = state => state[NAME].userCreated;

export const getUser = (state, userId) => userId ? state[NAME].byId[userId] : undefined;