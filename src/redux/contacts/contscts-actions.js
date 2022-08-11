import { createAction } from '@reduxjs/toolkit';
import { ADD, FILTER, DELETE } from './contacts-types';

export const addContact = createAction(ADD);

export const deleteContact = createAction(DELETE);

export const filterContact = createAction(FILTER);
