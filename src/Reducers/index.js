import { combineReducers } from "redux";

import clubs from './club';
import events from './event';
import upcomingevents from './upcomingevent';

export default combineReducers({ clubs, events, upcomingevents });