import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as AuthAction} from './auth/redux'
import {Action as VideosAction} from "./videos/redux";
import {Action as SearchAction} from './search/redux';

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const authActions = bindActionCreators(AuthAction.Creators, dispatch);
export const videosActions = bindActionCreators(VideosAction.Creators, dispatch);
export const searchActions = bindActionCreators(SearchAction.Creators, dispatch);
