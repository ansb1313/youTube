import {all, call} from 'redux-saga/effects'
import appSaga from './app/saga';
import authSaga from './auth/saga';
import videosSaga from './videos/saga'
import searchSaga from './search/saga'

function* sagas() {
    yield all([
       call(appSaga),
       call(authSaga),
       call(videosSaga),
       call(searchSaga)
    ])
}

export default sagas;