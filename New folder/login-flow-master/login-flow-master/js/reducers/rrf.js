/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE,FETCH_ALL } from '../constants/AppConstants';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');
import auth from '../utils/auth';

// The initial application state
const initialState = [{
id:1
title: 'soem one',
createdAt: '10-10-017'
},
{
id:1
title: 'soem one',
createdAt: '10-10-017'
},
{
id:1
title: 'soem one',
createdAt: '10-10-017'
}]

// Takes care of changing the application state
export function rrfReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL:
      return state;
      break;
    default:
      return state;
  }
}
